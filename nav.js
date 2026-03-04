/**
 * Marshall Syndrome Resource - Shared Navigation
 * Builds sidebar, breadcrumbs, handles mobile menu, highlights current page.
 */
(function() {
  'use strict';

  // ===== SITE STRUCTURE =====
  // Add pages here to extend the site - sidebar and breadcrumbs update automatically.
  var SITE = [
    {
      folder: 'basics', title: 'Basics', pages: [
        { file: 'basics/index.html', title: 'What is Marshall Syndrome?', k: 'COL11A1 collagen XI mutation genetics diagnosis definition overview type II collagenopathy autosomal dominant splice site exon' },
        { file: 'basics/molecular-biology.html', title: 'The Molecular Biology', k: 'COL11A1 collagen XI fibril diameter haploinsufficiency dominant-negative protein misfolding ER stress UPR' },
        { file: 'basics/natural-history.html', title: 'Decade-by-Decade Natural History', k: 'prognosis progression timeline age childhood adolescence adult symptoms worsening hearing vision joints' },
        { file: 'basics/marshall-vs-stickler.html', title: 'Marshall vs. Stickler', k: 'stickler syndrome type 2 difference distinction advocacy OMIM geneticist splice site 54bp exon dominant-negative' }
      ]
    },
    {
      folder: 'spine', title: 'Spine', pages: [
        { file: 'spine/index.html', title: 'Why the Spine is Affected', k: 'disc degeneration vertebral endplate nucleus pulposus annulus fibrosus collagen XI spine back pain' },
        { file: 'spine/spinal-pain.html', title: 'Spinal Pain Research', k: 'back pain chronic nociceptive inflammatory neuropathic disc herniation Schmorl nodes vertebral' },
        { file: 'spine/puberty-window.html', title: 'Puberty: The Vulnerable Window', k: 'growth spurt adolescence hormones IGF-1 GH vulnerability rapid growth disc stress' },
        { file: 'spine/growth.html', title: 'Growth, Puberty & the Spine', k: 'growth plate chondrocyte maturation height short stature skeletal development' },
        { file: 'spine/imaging.html', title: 'Imaging Protocol', k: 'MRI X-ray CT scan imaging radiology vertebral endplate Schmorl nodes scoliosis kyphosis platyspondyly' },
        { file: 'spine/piezoelectricity.html', title: 'Collagen Piezoelectricity & PEMF', k: 'piezoelectric PEMF pulsed electromagnetic field bone healing collagen vibration mechanical loading' },
        { file: 'spine/endplate-calcification.html', title: 'Endplate Calcification Cascade', k: 'endplate calcification mineralization nutrient diffusion disc degeneration cartilage' },
        { file: 'spine/exosome-signaling.html', title: 'Exosome Communication', k: 'exosomes extracellular vesicles cell communication signaling disc degeneration intercellular' },
        { file: 'spine/iron-metabolism.html', title: 'Iron Metabolism in the Disc', k: 'iron ferroptosis ferritin hepcidin ferroportin Piezo1 NCOA4 oxidative stress lipid peroxidation' },
        { file: 'spine/developmental-signaling.html', title: 'Developmental Signaling Pathways', k: 'Wnt Hedgehog Notch BMP TGF-beta SOX9 development embryonic signaling pathway' },
        { file: 'spine/multi-organ-protection.html', title: 'Multi-Organ Protection: Eyes, Ears & Disc', k: 'retinal detachment hearing loss vitreous eye ear tectorial membrane vision myopia' },
        { file: 'spine/immune-dysregulation.html', title: 'The Four-Mechanism Immune Cascade', k: 'immune complement mast cell inflammation NF-kB cytokine TNF IL-1 innate adaptive' },
        { file: 'spine/growth-spurt.html', title: 'Growth Spurt Vulnerability Map', k: 'growth velocity puberty rapid growth disc vulnerability stress biomechanical' },
        { file: 'spine/cervical-myelopathy.html', title: 'Cervical Myelopathy: A Critical Risk', k: 'cervical myelopathy cord compression Lhermitte sign electric shock neck zap spinal cord weakness legs numbness Hoffmann Babinski clonus MRI urgent' },
        { file: 'spine/craniocervical-instability.html', title: 'Craniocervical Instability (CCI)', k: 'CCI AAI atlantoaxial instability craniocervical junction C1 C2 atlas axis transverse ligament Lhermitte sign leg weakness red ears evening fatigue Chiari settling fusion clivo-axial angle Grabb-Oakes ADI flexion extension upright MRI DMX' }
      ]
    },
    {
      folder: 'treatment', title: 'Treatment', pages: [
        { file: 'treatment/index.html', title: 'Treatment Overview', k: 'treatment options management plan overview approach' },
        { file: 'treatment/surgery.html', title: 'Surgical Considerations', k: 'surgery spinal fusion decompression laminectomy disc replacement indications risks' },
        { file: 'treatment/physical-therapy.html', title: 'Physical Therapy', k: 'physical therapy PT exercise rehabilitation core stabilization stretching strengthening' },
        { file: 'treatment/vibration-therapy.html', title: 'Whole-Body Vibration', k: 'whole body vibration WBV therapy bone density muscle activation platform' },
        { file: 'treatment/exercise.html', title: 'Exercise as Molecular Medicine', k: 'exercise swimming cycling yoga pilates walking safe activities irisin myokines anti-inflammatory' },
        { file: 'treatment/pain-model.html', title: 'Seven-Mechanism Pain Model', k: 'pain model seven mechanism nociceptive inflammatory neuropathic central nociplastic biomechanical psychosocial' },
        { file: 'treatment/early-pain.html', title: 'Urgency: Early Pain Management', k: 'early pain intervention urgency window chronic pain prevention central sensitization pediatric' },
        { file: 'treatment/pain-management.html', title: 'Pain Management', k: 'pain management medication NSAID acetaminophen gabapentin amitriptyline duloxetine opioid alternatives' },
        { file: 'treatment/daily-guide.html', title: 'Practical Daily Guide', k: 'daily routine morning evening schedule practical tips lifestyle management' },
        { file: 'treatment/anesthesia.html', title: 'Anesthesia Safety', k: 'anesthesia intubation airway difficult micrognathia Pierre Robin sedation surgery precautions OrphanAnesthesia' },
        { file: 'treatment/exercise-pathways.html', title: 'Exercise: 10 Molecular Pathways', k: 'exercise molecular pathways NRF2 AMPK autophagy irisin myokines anti-inflammatory senescence' },
        { file: 'treatment/supplements-advanced.html', title: 'Advanced Supplement Targets', k: 'supplements NAC curcumin resveratrol omega-3 vitamin D magnesium collagen support' },
        { file: 'treatment/pain-stack.html', title: 'The 5-Agent Pain Convergence Stack', k: 'pain convergence stack multi-target synergy combined therapy protocol' },
        { file: 'treatment/aquatic-therapy.html', title: 'Aquatic Therapy', k: 'aquatic therapy swimming pool hydrotherapy water exercise buoyancy joint protection low impact' },
        { file: 'treatment/photobiomodulation.html', title: 'Photobiomodulation (Red Light Therapy)', k: 'photobiomodulation red light therapy near infrared PBM LED laser mitochondria ATP collagen healing' },
        { file: 'treatment/morning-protocol.html', title: 'The 90-Minute Morning Protocol', k: 'morning routine protocol stiffness wake up stretching warm up daily' },
        { file: 'treatment/complete-protocol.html', title: 'Complete 24-Hour Protocol', k: '24 hour protocol daily schedule morning afternoon evening night chronotherapy timing' },
        { file: 'treatment/central-sensitization.html', title: 'Central Sensitization & Pain Amplification', k: 'central sensitization pain amplification wind-up glial microglia astrocyte BDNF KCC2 GABA Lhermitte sign autonomic red ears QST LDN naltrexone amitriptyline TENS alpha-delta sleep nociplastic trigeminovascular' }
      ]
    },
    {
      folder: 'nutrition', title: 'Nutrition & Supplements', pages: [
        { file: 'nutrition/index.html', title: 'Nutrition Overview', k: 'nutrition diet food overview anti-inflammatory Mediterranean' },
        { file: 'nutrition/diet-protocol.html', title: 'Nutrition Protocol', k: 'diet protocol anti-inflammatory foods omega-3 antioxidant fiber polyphenols' },
        { file: 'nutrition/glucose-ages.html', title: 'Glucose, AGEs & Disc Nutrition', k: 'glucose AGEs advanced glycation end products sugar blood sugar disc nutrition glycation collagen crosslinking' },
        { file: 'nutrition/ferroptosis.html', title: 'The Ferroptosis Connection', k: 'ferroptosis iron cell death GPX4 glutathione lipid peroxidation oxidative stress selenium' },
        { file: 'nutrition/senescence.html', title: 'The Senescence Problem', k: 'senescence aging SASP senolytic cell death zombie cells p16 p21' },
        { file: 'nutrition/wnt-pathway.html', title: 'Wnt Pathway Dysregulation', k: 'Wnt beta-catenin pathway fibrosis GSK-3 signaling disc degeneration' },
        { file: 'nutrition/taurine.html', title: 'Taurine: A Key Supplement', k: 'taurine supplement amino acid antioxidant anti-inflammatory mitochondria dosing' },
        { file: 'nutrition/supplements.html', title: 'Epigenetic Defense Protocol', k: 'epigenetic defense supplements protocol methylation DNA histone acetylation' },
        { file: 'nutrition/gut-spine.html', title: 'The Gut-Spine Connection', k: 'gut microbiome spine connection inflammation intestinal permeability leaky gut probiotics' },
        { file: 'nutrition/autophagy.html', title: 'Disc Autophagy', k: 'autophagy cellular recycling fasting mTOR AMPK disc cell survival clearance' },
        { file: 'nutrition/what-not-to-do.html', title: 'What NOT to Do', k: 'avoid dangerous harmful contraindicated mistakes warnings cracking chiropractic high impact' },
        { file: 'nutrition/gut-disc-axis.html', title: 'The Gut-Disc Axis', k: 'gut disc axis microbiome butyrate short chain fatty acids SCFA LPS endotoxin' },
        { file: 'nutrition/precision-nutrition.html', title: 'Precision Nutritional Biochemistry', k: 'precision nutrition biochemistry personalized nutrigenomics biomarker-guided micronutrient' },
        { file: 'nutrition/environmental-toxins.html', title: 'Environmental Toxin Avoidance', k: 'environmental toxins BPA phthalates pesticides heavy metals air quality water filter endocrine disruptors' }
      ]
    },
    {
      folder: 'monitoring', title: 'Monitoring', pages: [
        { file: 'monitoring/index.html', title: 'Monitoring Overview', k: 'monitoring overview schedule appointments tracking follow-up' },
        { file: 'monitoring/biomarkers.html', title: 'Comprehensive Monitoring Panel', k: 'biomarkers blood test CRP ESR CTX P1NP vitamin D iron ferritin labs panel' },
        { file: 'monitoring/epigenetic-aging.html', title: 'Epigenetic Age Monitoring', k: 'epigenetic age clock DNA methylation biological age Horvath aging acceleration' },
        { file: 'monitoring/puberty-window.html', title: 'Puberty Vulnerability Window', k: 'puberty vulnerability window Tanner stage growth spurt hormones timing monitoring' },
        { file: 'monitoring/sleep.html', title: 'Sleep & Circadian Health', k: 'sleep circadian rhythm melatonin insomnia quality duration hygiene blue light' },
        { file: 'monitoring/screening-tests.html', title: 'Screening Tests', k: 'screening tests annual checkup eye exam hearing test spine imaging heart echo' },
        { file: 'monitoring/red-flags.html', title: 'Red Flags: Emergency Care', k: 'red flags emergency urgent warning signs ER hospital retinal detachment vision loss neurological' },
        { file: 'monitoring/biomarker-dashboard.html', title: '11-Domain Biomarker Dashboard', k: 'biomarker dashboard 11 domain tracking inflammation bone iron oxidative stress immune complement' },
        { file: 'monitoring/sleep-architecture.html', title: 'Sleep Architecture: Nocturnal Defense', k: 'sleep architecture NREM REM deep sleep stages nocturnal defense repair growth hormone melatonin cortisol' },
        { file: 'monitoring/growth-velocity.html', title: 'Growth Velocity Monitoring', k: 'growth velocity height weight BMI percentile growth chart pediatric endocrinology bone age' },
        { file: 'monitoring/endocrine-panel.html', title: 'Endocrine & Bone Health Monitoring', k: 'endocrine bone health DEXA vitamin D calcium thyroid TSH IGF-1 growth hormone ferritin iron bone density osteoporosis osteopenia mineralization BSP Tanner puberty' },
        { file: 'monitoring/sleep-apnea.html', title: 'Sleep-Disordered Breathing & OSA', k: 'sleep apnea OSA obstructive central snoring airway CPAP polysomnography PSG adenotonsillectomy midface micrognathia Pierre Robin hypoxia triple-hit nocturnal HIF NF-kB' }
      ]
    },
    {
      folder: 'future', title: 'Future Therapies', pages: [
        { file: 'future/index.html', title: 'Emerging Therapies', k: 'emerging therapies future treatment pipeline research development' },
        { file: 'future/gene-therapy.html', title: 'Gene Therapy Approaches', k: 'gene therapy CRISPR base editing antisense oligonucleotide AAV viral vector COL11A1 correction' },
        { file: 'future/tissue-engineering.html', title: 'Tissue Engineering Timeline', k: 'tissue engineering scaffold bioprinting stem cell disc replacement regeneration implant' },
        { file: 'future/clinical-trials.html', title: 'Clinical Trials & Registries', k: 'clinical trials registry ClinicalTrials.gov recruitment eligibility rare disease study research' },
        { file: 'future/advocacy.html', title: 'Rare Disease Advocacy', k: 'advocacy rare disease orphan drug patient organization support group lobbying awareness NORD' },
        { file: 'future/gene-therapy-update.html', title: 'Gene Therapy: 2026 Update', k: 'gene therapy 2026 update CRISPR prime editing delivery AAV lipid nanoparticle progress' },
        { file: 'future/regenerative-medicine.html', title: 'Regenerative Medicine Roadmap', k: 'regenerative medicine stem cell MSC iPSC disc repair cartilage restoration growth factor PRP' }
      ]
    },
    {
      folder: 'living', title: 'Living With Marshall', pages: [
        { file: 'living/index.html', title: 'Living With Marshall', k: 'living daily life coping adaptation quality of life family' },
        { file: 'living/comorbidities.html', title: 'Comorbidity Interactions', k: 'comorbidity interactions hearing loss vision myopia retinal detachment mitral valve joint hypermobility Pierre Robin cleft palate' },
        { file: 'living/psychology.html', title: 'Psychological Impact', k: 'psychology mental health anxiety depression chronic pain coping emotional wellbeing self-esteem' },
        { file: 'living/school-504.html', title: 'School 504 Plan', k: 'school 504 plan IEP accommodations classroom seating standing desk breaks PE modifications teacher letter' },
        { file: 'living/talking.html', title: 'Talking About Marshall', k: 'talking explaining communication friends family teachers doctors child-friendly language' },
        { file: 'living/specialists.html', title: 'Specialists to Consult', k: 'specialists doctors team geneticist orthopedic rheumatologist ophthalmologist audiologist pain medicine PT psychologist' },
        { file: 'living/pain-neuroscience.html', title: 'Pain Neuroscience in Children', k: 'pain neuroscience education PNE children pediatric alarm system metaphor fear avoidance catastrophizing graded exposure CBT' },
        { file: 'living/psychological-support.html', title: 'Psychological & Social Support', k: 'psychological support mental health counseling CBT family therapy peer support chronic illness identity resilience' },
        { file: 'living/autonomic-dysfunction.html', title: 'Autonomic Dysfunction', k: 'autonomic dysfunction dysautonomia POTS orthostatic red ears flushing Lhermitte sign sympathetic parasympathetic cervical heart rate blood pressure temperature fatigue' },
        { file: 'living/tmj-craniofacial.html', title: 'TMJ & Craniofacial Pain', k: 'TMJ temporomandibular joint jaw pain clicking popping micrognathia malocclusion auriculotemporal nerve red ear syndrome DDR2 MMP-13 orthodontic dental' },
        { file: 'living/vestibular-dysfunction.html', title: 'Vestibular Dysfunction & Balance', k: 'vestibular dysfunction balance dizziness vertigo BPPV inner ear stereocilia tectorial membrane vHIT VEMP posturography falls legs giving out vestibulospinal VRT rehabilitation' },
        { file: 'living/symptom-tracker.html', title: 'Symptom Timeline & Tracker', k: 'symptom tracker diary log timeline pain record history documentation backup export' },
        { file: 'living/symptom-navigator.html', title: 'Symptom Navigator', k: 'symptom navigator assessment checklist triage routing personalized recommendations specialist gap analysis' }
      ]
    },
    {
      folder: 'resources', title: 'Resources', pages: [
        { file: 'resources/index.html', title: 'Resources', k: 'resources links organizations information support' },
        { file: 'resources/questions.html', title: 'Questions for Doctors', k: 'questions doctors appointments preparation what to ask specialist visit' },
        { file: 'resources/latest-research.html', title: 'Latest Research', k: 'latest research papers publications PubMed studies new findings 2025 2026' },
        { file: 'resources/support.html', title: 'Support Resources', k: 'support groups families communities online forums Facebook foundation Stickler Involved People' },
        { file: 'resources/references.html', title: 'References', k: 'references bibliography citations sources papers journals authors' }
      ]
    },
    {
      folder: 'emerging', title: 'Emerging Research', pages: [
        { file: 'emerging/index.html', title: 'Emerging Research Overview', k: 'emerging research speculative novel hypotheses cross-domain synthesis' },
        { file: 'emerging/nrf2-convergence.html', title: 'NRF2: The Master Convergence Node', k: 'NRF2 KEAP1 sulforaphane broccoli exercise irisin AMPK melatonin DMF antioxidant Wnt GPX4 ferroptosis convergence' },
        { file: 'emerging/nocturnal-destruction.html', title: 'The Nocturnal Destruction Window', k: 'nocturnal night destruction sleep 2AM 5AM complement activation cortisol melatonin disc damage circadian' },
        { file: 'emerging/pemf-timing.html', title: 'PEMF Timing & the Safe Window', k: 'PEMF timing pulsed electromagnetic field safe window morning evening protocol frequency duration' },
        { file: 'emerging/complement-ferroptosis.html', title: 'Complement-Ferroptosis Interaction', k: 'complement ferroptosis C3 C5 MAC membrane attack iron lipid peroxidation interaction synergy' },
        { file: 'emerging/chronotherapy-protocol.html', title: 'Complete 24-Hour Chronotherapy Protocol', k: 'chronotherapy 24 hour protocol timing circadian supplement exercise sleep schedule optimization' },
        { file: 'emerging/mcas-neuroinflammation.html', title: 'MCAS, Complement & Neuroinflammation', k: 'MCAS mast cell activation syndrome complement neuroinflammation tryptase histamine C3a C5a perineurial collagen XI antibodies autoimmune' }
      ]
    }
  ];

  // ===== DETECT CURRENT PAGE =====
  var currentPath = window.location.pathname;
  var pathParts = currentPath.split('/');
  var currentFile = '';

  // Find which folder/page we're on by matching path segments
  for (var pi = pathParts.length - 1; pi >= 0; pi--) {
    for (var si = 0; si < SITE.length; si++) {
      if (pathParts[pi] === SITE[si].folder) {
        currentFile = pathParts[pi] + '/' + (pathParts[pi + 1] || 'index.html');
        break;
      }
    }
    if (currentFile) break;
  }

  // Check if we're on the root index
  var lastPart = pathParts[pathParts.length - 1];
  if (!currentFile && (lastPart === 'index.html' || lastPart === '' || lastPart === 'marshall-syndrome-resource')) {
    currentFile = 'index.html';
  }

  // ===== COMPUTE BASE PATH =====
  var isSubfolder = currentFile.indexOf('/') !== -1;
  var basePath = isSubfolder ? '../' : './';

  function makeHref(targetFile) {
    return isSubfolder ? '../' + targetFile : './' + targetFile;
  }

  // ===== BUILD SIDEBAR =====
  var sidebar = document.getElementById('sidebar');
  if (sidebar) {
    var html = '<div class="sidebar-title">Contents</div>';
    html += '<a href="' + basePath + '"' + (currentFile === 'index.html' ? ' class="active"' : '') + '>Home</a>';

    for (var i = 0; i < SITE.length; i++) {
      var section = SITE[i];
      var isCurrent = currentFile.indexOf(section.folder + '/') === 0;

      html += '<div class="sidebar-folder' + (isCurrent ? '' : ' collapsed') + '">';
      html += '<div class="sidebar-folder-header" onclick="this.parentElement.classList.toggle(\'collapsed\')">';
      html += '<span class="folder-arrow">&#9660;</span> ' + section.title;
      html += '</div>';
      html += '<div class="sidebar-folder-pages">';

      for (var j = 0; j < section.pages.length; j++) {
        var page = section.pages[j];
        var isActive = (currentFile === page.file);
        html += '<a href="' + makeHref(page.file) + '"' + (isActive ? ' class="active"' : '') + '>' + page.title + '</a>';
      }

      html += '</div></div>';
    }

    sidebar.innerHTML = html;
  }

  // ===== BUILD BREADCRUMB =====
  var breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb && currentFile !== 'index.html') {
    var crumbs = '<a href="' + basePath + '">Home</a>';

    for (var bi = 0; bi < SITE.length; bi++) {
      var bSection = SITE[bi];
      for (var bj = 0; bj < bSection.pages.length; bj++) {
        if (bSection.pages[bj].file === currentFile) {
          crumbs += '<span class="sep">&#8250;</span>';
          crumbs += '<a href="' + makeHref(bSection.folder + '/index.html') + '">' + bSection.title + '</a>';
          if (currentFile !== bSection.folder + '/index.html') {
            crumbs += '<span class="sep">&#8250;</span>';
            crumbs += '<span>' + bSection.pages[bj].title + '</span>';
          }
          break;
        }
      }
    }

    breadcrumb.innerHTML = crumbs;
  }

  // ===== HAMBURGER MENU =====
  var hamburger = document.getElementById('hamburgerBtn');
  var overlayEl = document.getElementById('sidebarOverlay');

  function toggleSidebar() {
    var sb = document.getElementById('sidebar');
    var ov = document.getElementById('sidebarOverlay');
    sb.classList.toggle('open');
    ov.classList.toggle('active');
  }

  if (hamburger) hamburger.addEventListener('click', toggleSidebar);
  if (overlayEl) overlayEl.addEventListener('click', toggleSidebar);

  // Close sidebar on link click (mobile)
  if (sidebar) {
    sidebar.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && window.innerWidth <= 900) {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('active');
      }
    });
  }

  // ===== BACK TO TOP =====
  var topBtn = document.getElementById('backToTop');
  if (topBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        topBtn.classList.add('visible');
      } else {
        topBtn.classList.remove('visible');
      }
    }, { passive: true });

    topBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== SEARCH: In-Page Highlighting + Cross-Page Results =====
  var searchInput = document.getElementById('searchInput');
  var searchCount = document.getElementById('searchCount');
  var pageBody = document.querySelector('.page-body') || document.querySelector('.content');
  var searchDebounce = null;

  // Build flat page index for cross-page search
  var pageIndex = [];
  for (var xi = 0; xi < SITE.length; xi++) {
    var xSec = SITE[xi];
    for (var xj = 0; xj < xSec.pages.length; xj++) {
      var xp = xSec.pages[xj];
      pageIndex.push({
        file: xp.file,
        title: xp.title,
        section: xSec.title,
        searchText: (xp.title + ' ' + (xp.k || '') + ' ' + xSec.title).toLowerCase()
      });
    }
  }

  // Create cross-page results dropdown
  var searchDropdown = document.createElement('div');
  searchDropdown.className = 'search-dropdown';
  searchDropdown.style.cssText = 'display:none;position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #d1d5db;border-radius:0 0 8px 8px;max-height:360px;overflow-y:auto;z-index:1001;box-shadow:0 8px 24px rgba(0,0,0,0.15);';
  var searchWrapper = document.querySelector('.search-wrapper');
  if (searchWrapper) {
    searchWrapper.style.position = 'relative';
    searchWrapper.appendChild(searchDropdown);
  }

  function clearHighlights() {
    var marks = document.querySelectorAll('mark.search-highlight');
    for (var mi = 0; mi < marks.length; mi++) {
      var parent = marks[mi].parentNode;
      parent.replaceChild(document.createTextNode(marks[mi].textContent), marks[mi]);
      parent.normalize();
    }
  }

  function highlightTextNodes(root, regex) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var textNodes = [];
    var node;
    while (node = walker.nextNode()) {
      var tag = node.parentNode.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' || tag === 'INPUT' || tag === 'MARK') continue;
      if (regex.test(node.nodeValue)) {
        textNodes.push(node);
      }
      regex.lastIndex = 0;
    }

    var totalCount = 0;
    var firstMark = null;

    for (var ti = 0; ti < textNodes.length; ti++) {
      var textNode = textNodes[ti];
      var text = textNode.nodeValue;
      var frag = document.createDocumentFragment();
      var lastIdx = 0;
      var match;
      regex.lastIndex = 0;

      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIdx) {
          frag.appendChild(document.createTextNode(text.substring(lastIdx, match.index)));
        }
        var mark = document.createElement('mark');
        mark.className = 'search-highlight';
        mark.textContent = match[0];
        frag.appendChild(mark);
        if (!firstMark) firstMark = mark;
        totalCount++;
        lastIdx = regex.lastIndex;
      }

      if (lastIdx < text.length) {
        frag.appendChild(document.createTextNode(text.substring(lastIdx)));
      }

      textNode.parentNode.replaceChild(frag, textNode);
    }

    return { count: totalCount, firstMark: firstMark };
  }

  function searchSitePages(query) {
    var q = query.toLowerCase();
    var words = q.split(/\s+/).filter(function(w) { return w.length >= 2; });
    if (words.length === 0) return [];

    var results = [];
    for (var ri = 0; ri < pageIndex.length; ri++) {
      var pg = pageIndex[ri];
      var score = 0;
      var allMatch = true;
      for (var wi = 0; wi < words.length; wi++) {
        if (pg.searchText.indexOf(words[wi]) !== -1) {
          score++;
          // Bonus for title match
          if (pg.title.toLowerCase().indexOf(words[wi]) !== -1) score += 2;
        } else {
          allMatch = false;
        }
      }
      // Require at least one word to match; boost pages where all words match
      if (score > 0) {
        if (allMatch) score += 5;
        results.push({ page: pg, score: score });
      }
    }

    results.sort(function(a, b) { return b.score - a.score; });
    return results.slice(0, 10);
  }

  function showDropdown(results, query) {
    if (results.length === 0) {
      searchDropdown.style.display = 'none';
      return;
    }

    var html = '<div style="padding:6px 12px;font-size:0.75rem;color:#6b7280;border-bottom:1px solid #e5e7eb;font-weight:600;">Pages matching &ldquo;' + query.replace(/</g,'&lt;') + '&rdquo;</div>';
    for (var di = 0; di < results.length; di++) {
      var r = results[di];
      var isCurrent = (r.page.file === currentFile);
      html += '<a href="' + makeHref(r.page.file) + '" style="display:block;padding:8px 12px;text-decoration:none;color:#1f2937;border-bottom:1px solid #f3f4f6;font-size:0.88rem;' + (isCurrent ? 'background:#eff6ff;' : '') + '"';
      html += ' onmouseover="this.style.background=\'#f0f9ff\'" onmouseout="this.style.background=\'' + (isCurrent ? '#eff6ff' : '#fff') + '\'">';
      html += '<div style="font-weight:600;">' + r.page.title + '</div>';
      html += '<div style="font-size:0.75rem;color:#6b7280;">' + r.page.section + (isCurrent ? ' &mdash; <em>current page</em>' : '') + '</div>';
      html += '</a>';
    }
    searchDropdown.innerHTML = html;
    searchDropdown.style.display = 'block';
  }

  if (searchInput && pageBody) {
    // Update placeholder
    searchInput.placeholder = 'Search all pages...';

    searchInput.addEventListener('input', function() {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(function() {
        clearHighlights();

        var query = searchInput.value.trim();
        if (query.length < 2) {
          if (searchCount) searchCount.textContent = '';
          searchDropdown.style.display = 'none';
          return;
        }

        // 1. Cross-page search (always)
        var siteResults = searchSitePages(query);
        showDropdown(siteResults, query);

        // 2. In-page highlighting (current page content)
        var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        var regex = new RegExp('(' + escaped + ')', 'gi');
        var result = highlightTextNodes(pageBody, regex);

        if (searchCount) {
          var parts = [];
          if (result.count > 0) parts.push(result.count + ' on this page');
          if (siteResults.length > 0) parts.push(siteResults.length + ' page' + (siteResults.length !== 1 ? 's' : ''));
          searchCount.textContent = parts.join(' · ');
        }

        // Scroll to first in-page match
        if (result.firstMark) {
          result.firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200);
    });

    // Clear on Escape
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        searchInput.value = '';
        clearHighlights();
        if (searchCount) searchCount.textContent = '';
        searchDropdown.style.display = 'none';
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchWrapper.contains(e.target)) {
        searchDropdown.style.display = 'none';
      }
    });

    // Reopen dropdown on focus if there's a query
    searchInput.addEventListener('focus', function() {
      if (searchInput.value.trim().length >= 2) {
        var results = searchSitePages(searchInput.value.trim());
        showDropdown(results, searchInput.value.trim());
      }
    });
  }

})();
