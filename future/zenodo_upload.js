#!/usr/bin/env node
/**
 * Zenodo Preprint Upload Script
 * Uploads the drug repurposing screen preprint to Zenodo and returns the DOI.
 *
 * Usage: node zenodo_upload.js <YOUR_ZENODO_API_TOKEN>
 *
 * To get a token:
 *   1. Go to https://zenodo.org and log in (GitHub login works)
 *   2. Go to Settings > Applications > Personal access tokens > New Token
 *   3. Check "deposit:actions" and "deposit:write"
 *   4. Copy the token and pass it as the argument
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = process.argv[2];
if (!TOKEN) {
  console.error('Usage: node zenodo_upload.js <ZENODO_API_TOKEN>');
  console.error('');
  console.error('To get a token:');
  console.error('  1. Go to https://zenodo.org → log in with GitHub');
  console.error('  2. Settings → Applications → Personal access tokens → New Token');
  console.error('  3. Check "deposit:actions" and "deposit:write"');
  console.error('  4. Copy the token and run this script again');
  process.exit(1);
}

const PDF_PATH = path.join(__dirname, 'preprint-drug-repurposing.pdf');
const BASE = 'zenodo.org';

const METADATA = {
  metadata: {
    title: 'A Systematic Drug Repurposing Screen for Marshall Syndrome: Targeting Eight Self-Amplifying Destructive Cascades in COL11A1 Collagenopathy',
    upload_type: 'publication',
    publication_type: 'preprint',
    description: 'Marshall syndrome (COL11A1/Stickler type 2) is a rare autosomal dominant collagenopathy with no approved disease-modifying therapies. We present a systematic screen of 34 existing medications mapped to 8 self-amplifying destructive cascades that drive progressive tissue degradation. Compounds were ranked using a 5-domain composite scoring system encompassing evidence strength, safety profile, mechanistic directness, accessibility, and cascade coverage. Network connectivity analysis identifies Loop 3 (Senescence/SASP) as the highest-leverage intervention target, with the greatest downstream influence on remaining cascades. Top candidates include doxycycline (MMP/ADAMTS inhibition), N-acetylcysteine (ferroptosis and oxidative stress), metformin (senolytic and anti-inflammatory), and diacerein (IL-1 blockade with chondroprotection). A tiered combination strategy is proposed alongside an N-of-1 trial protocol designed for clinical translation in ultra-rare populations where conventional trial recruitment is infeasible.',
    creators: [{ name: 'Ralston, Bryan', affiliation: 'Independent Researcher' }],
    keywords: [
      'Marshall syndrome',
      'Stickler syndrome type 2',
      'COL11A1',
      'drug repurposing',
      'collagenopathy',
      'rare disease',
      'senescence',
      'MMP inhibition',
      'N-of-1 trial',
      'antisense oligonucleotide'
    ],
    license: 'cc-by-4.0',
    access_right: 'open',
    language: 'eng',
    notes: 'This preprint has not been peer-reviewed. It is intended as a structured framework for researchers and clinicians working with Marshall syndrome / Stickler type 2 families. Nothing in this document constitutes medical advice.',
    related_identifiers: [
      {
        identifier: 'https://bryanralston.github.io/marshall-syndrome-resource/',
        relation: 'isSupplementedBy',
        resource_type: 'other',
        scheme: 'url'
      }
    ],
    subjects: [
      { term: 'Rare diseases', scheme: 'url', identifier: 'http://id.loc.gov/authorities/subjects/sh85111184' },
      { term: 'Drug repositioning', scheme: 'url', identifier: 'http://id.loc.gov/authorities/subjects/sh2013002033' }
    ]
  }
};

function request(method, path, body, contentType) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: BASE,
      port: 443,
      path: path + (path.includes('?') ? '&' : '?') + `access_token=${TOKEN}`,
      method,
      headers: {}
    };

    let payload;
    if (body && contentType === 'application/json') {
      payload = JSON.stringify(body);
      opts.headers['Content-Type'] = 'application/json';
      opts.headers['Content-Length'] = Buffer.byteLength(payload);
    } else if (body && contentType === 'binary') {
      // handled separately
    }

    const req = https.request(opts, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString();
        try { resolve({ status: res.statusCode, data: JSON.parse(raw) }); }
        catch { resolve({ status: res.statusCode, data: raw }); }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

function uploadFile(bucketUrl, filePath) {
  return new Promise((resolve, reject) => {
    const fileName = path.basename(filePath);
    const fileData = fs.readFileSync(filePath);
    const url = new URL(`${bucketUrl}/${fileName}?access_token=${TOKEN}`);

    const opts = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname + url.search,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Length': fileData.length
      }
    };

    const req = https.request(opts, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString();
        try { resolve({ status: res.statusCode, data: JSON.parse(raw) }); }
        catch { resolve({ status: res.statusCode, data: raw }); }
      });
    });
    req.on('error', reject);
    req.write(fileData);
    req.end();
  });
}

async function main() {
  console.log('=== Zenodo Preprint Upload ===\n');

  // Verify PDF exists
  if (!fs.existsSync(PDF_PATH)) {
    console.error(`PDF not found at: ${PDF_PATH}`);
    process.exit(1);
  }
  const stats = fs.statSync(PDF_PATH);
  console.log(`PDF found: ${(stats.size / 1024).toFixed(0)} KB\n`);

  // Step 1: Create empty deposition
  console.log('Step 1/4: Creating deposition...');
  const dep = await request('POST', '/api/deposit/depositions', {}, 'application/json');
  if (dep.status !== 201) {
    console.error('Failed to create deposition:', dep.status, dep.data);
    process.exit(1);
  }
  const depId = dep.data.id;
  const bucket = dep.data.links.bucket;
  console.log(`  Deposition ID: ${depId}`);
  console.log(`  Bucket: ${bucket}\n`);

  // Step 2: Upload PDF
  console.log('Step 2/4: Uploading PDF...');
  const upload = await uploadFile(bucket, PDF_PATH);
  if (upload.status !== 200 && upload.status !== 201) {
    console.error('Failed to upload PDF:', upload.status, upload.data);
    process.exit(1);
  }
  console.log(`  Upload complete: ${upload.data.key}\n`);

  // Step 3: Set metadata
  console.log('Step 3/4: Setting metadata...');
  const meta = await request('PUT', `/api/deposit/depositions/${depId}`, METADATA, 'application/json');
  if (meta.status !== 200) {
    console.error('Failed to set metadata:', meta.status, meta.data);
    process.exit(1);
  }
  console.log('  Metadata set successfully\n');

  // Step 4: Publish
  console.log('Step 4/4: Publishing...');
  const pub = await request('POST', `/api/deposit/depositions/${depId}/actions/publish`, null);
  if (pub.status !== 202) {
    console.error('Failed to publish:', pub.status, pub.data);
    console.error('\nThe deposition was created but not published.');
    console.error(`You can publish manually at: https://zenodo.org/deposit/${depId}`);
    process.exit(1);
  }

  const doi = pub.data.doi;
  const doiUrl = pub.data.doi_url || `https://doi.org/${doi}`;
  const recordUrl = pub.data.links?.record_html || `https://zenodo.org/records/${pub.data.record_id || depId}`;

  console.log('\n========================================');
  console.log('  PUBLISHED SUCCESSFULLY');
  console.log('========================================');
  console.log(`  DOI:    ${doi}`);
  console.log(`  URL:    ${doiUrl}`);
  console.log(`  Record: ${recordUrl}`);
  console.log('========================================\n');

  // Save DOI for reference
  const doiFile = path.join(__dirname, 'zenodo_doi.txt');
  fs.writeFileSync(doiFile, JSON.stringify({ doi, doiUrl, recordUrl, depositId: depId, publishedAt: new Date().toISOString() }, null, 2));
  console.log(`DOI saved to: ${doiFile}`);
}

main().catch(err => {
  console.error('Unexpected error:', err.message);
  process.exit(1);
});
