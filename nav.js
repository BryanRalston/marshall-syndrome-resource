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
        { file: 'basics/adult-progression.html', title: 'Disease Progression Across the Lifespan', k: 'adult progression lifespan aging decades 20s 30s 40s 50s osteoarthritis joint replacement spinal stenosis hearing loss cochlear implant cataract osteoporosis disability workplace accommodation pregnancy quality of life chronic pain employment mental health fall prevention assistive devices advance directive anesthesia' },
        { file: 'basics/marshall-vs-stickler.html', title: 'Marshall vs. Stickler', k: 'stickler syndrome type 2 difference distinction advocacy OMIM geneticist splice site 54bp exon dominant-negative' },
        { file: 'basics/pierre-robin.html', title: 'Pierre Robin Sequence', k: 'Pierre Robin sequence micrognathia glossoptosis cleft palate airway obstruction mandibular distraction osteogenesis feeding neonatal NICU prone positioning Haberman bottle speech velopharyngeal insufficiency VPI craniofacial' },
        { file: 'basics/genetic-counseling.html', title: 'Genetic Counseling & Family Planning', k: 'genetic counseling inheritance autosomal dominant 50% risk family planning prenatal testing CVS amniocentesis PGT-M IVF cascade testing VUS variant genetic counselor GINA insurance NSGC de novo mutation pregnancy' },
        { file: 'basics/midface-hypoplasia.html', title: 'Midface Hypoplasia & Facial Features', k: 'midface hypoplasia maxillary flat face nasal bridge anteverted nares philtrum Marshall facies micrognathia airway anesthesia mask ventilation intubation Eustachian sinus cephalometric Le Fort distraction osteogenesis' },
        { file: 'basics/phenotype-genotype.html', title: 'Phenotype-Genotype Correlation', k: 'COL11A1 genotype phenotype correlation splice site exon skipping dominant-negative haploinsufficiency missense glycine VUS pathogenic variant classification ClinVar registry deep intronic minigene variable expressivity genetic modifier epigenetic severity spectrum fibrochondrogenesis' },
        { file: 'basics/unified-model.html', title: 'The Unified Model: Multi-System Cascade', k: 'unified model cascade self-amplifying loop senescence SASP ferroptosis exosome connexin-43 endplate calcification complement MMP ADAMTS lactate microbiome gut-disc axis Wnt AKT GSK3-beta senolytics fisetin quercetin iron progression inflammation anti-inflammatory' }
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
        { file: 'spine/craniocervical-instability.html', title: 'Craniocervical Instability (CCI)', k: 'CCI AAI atlantoaxial instability craniocervical junction C1 C2 atlas axis transverse ligament Lhermitte sign leg weakness red ears evening fatigue Chiari settling fusion clivo-axial angle Grabb-Oakes ADI flexion extension upright MRI DMX' },
        { file: 'spine/lhermitte-sign.html', title: 'Lhermitte\'s Sign: 12 Convergent Mechanisms', k: 'Lhermitte sign electric shock neck zap flexion dorsal column ephaptic transmission demyelination ferroptosis oligodendrocyte Chiari syringomyelia vascular posterior spinal artery tethered cord zinc copper B12 deficiency convergence myelopathy radiation' },
        { file: 'spine/scoliosis.html', title: 'Scoliosis & Kyphosis', k: 'scoliosis kyphosis Cobb angle bracing Boston Rigo Schroth SEAS platyspondyly Scheuermann curve progression Risser Sanders VBT vertebral body tethering growing rods MAGEC spinal fusion Adams forward bend EOS' },
        { file: 'spine/surgical-outcomes.html', title: 'Spinal Surgery Outcomes & Long-Term Tracking', k: 'surgery outcomes fusion cervical lumbar scoliosis decompression laminectomy VBT adjacent segment disease pseudarthrosis hardware failure dural tear CSF leak wound healing bone density preoperative optimization rehabilitation recovery timeline complications connective tissue collagenopathy microdiscectomy reoperation CCI myelopathy' },
        { file: 'spine/csf-leak.html', title: 'CSF Leak & Intracranial Hypotension', k: 'CSF leak cerebrospinal fluid intracranial hypotension dura mater positional headache orthostatic headache brain sagging pachymeningeal enhancement epidural blood patch myelography dural ectasia dural weakness connective tissue collagen atraumatic needle lumbar puncture spinal anaesthesia CCI overlap prevention' },
        { file: 'spine/lumbar-stenosis.html', title: 'Lumbar Spinal Stenosis', k: 'lumbar stenosis spinal canal narrowing neurogenic claudication radiculopathy cauda equina laminectomy foraminotomy decompression spondylolisthesis facet hypertrophy ligamentum flavum Williams flexion epidural' },
        { file: 'spine/tethered-cord.html', title: 'Tethered Cord Syndrome', k: 'tethered cord filum terminale conus medullaris bladder bowel leg weakness foot deformity pes cavus growth spurt untethering neurosurgery occult spinal dysraphism SSEP urodynamic' },
        { file: 'spine/chiari-syringomyelia.html', title: 'Chiari Malformation & Syringomyelia', k: 'Chiari malformation syringomyelia syrinx tonsillar herniation foramen magnum CCI acquired congenital posterior fossa decompression craniocervical fusion Valsalva headache cough occipital EDS triad upright MRI cine-flow CSF' },
        { file: 'spine/platyspondyly.html', title: 'Platyspondyly & Vertebral Body Changes', k: 'platyspondyly flat vertebrae vertebral body height width ratio DEXA BMAD bone density overestimate disproportionate short trunk arm span kyphosis wedging endplate growth plate chondrocyte Scheuermann surgical pedicle' },
        { file: 'spine/schmorl-nodes.html', title: 'Schmorl\'s Nodes & Endplate Failure', k: 'Schmorl node endplate failure herniation vertical disc vertebral body Modic changes edema inflammation active chronic MRI STIR imaging growth spurt prevention 64% hallmark radiographic' }
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
        { file: 'treatment/photobiomodulation.html', title: 'Photobiomodulation (Red Light Therapy)', k: 'photobiomodulation red light therapy near infrared PBM LED laser mitochondria ATP collagen healing LLLT tendon ligament three-phase fibroblast hydroxyproline tensile strength remodeling' },
        { file: 'treatment/hyperbaric-oxygen.html', title: 'Hyperbaric Oxygen Therapy (HBOT)', k: 'hyperbaric oxygen HBOT HBO chamber pressure ATA NRF2 stem cells disc paradox HIF ferroptosis pediatric' },
        { file: 'treatment/morning-protocol.html', title: 'The Morning Protocol', k: 'morning routine protocol stiffness wake up stretching warm up daily sulforaphane PBM PEMF exercise' },
        { file: 'treatment/complete-protocol.html', title: 'Complete 24-Hour Protocol', k: '24 hour protocol daily schedule morning afternoon evening night chronotherapy timing' },
        { file: 'treatment/central-sensitization.html', title: 'Central Sensitization & Pain Amplification', k: 'central sensitization pain amplification wind-up glial microglia astrocyte BDNF KCC2 GABA Lhermitte sign autonomic red ears QST LDN naltrexone amitriptyline TENS alpha-delta sleep nociplastic trigeminovascular' },
        { file: 'treatment/pain-neuroscience-education.html', title: 'Pain Neuroscience Education', k: 'PNE pain neuroscience education HOPE program kinesiophobia fear avoidance central sensitization alarm volume knob age-appropriate pacing graded exposure relaxation self-management Cincinnati guideline hypermobility children pediatric CBT biopsychosocial' },
        { file: 'treatment/drug-repurposing.html', title: 'Drug Repurposing for Marshall Syndrome', k: 'drug repurposing carbamazepine ER stress 4-PBA TUDCA chemical chaperone doxycycline MMP inhibitor metformin AMPK DMF dimethyl fumarate omega-3 resolvin N-of-1 trial off-label' },
        { file: 'treatment/vagus-nerve-stimulation.html', title: 'Vagus Nerve Stimulation (taVNS)', k: 'vagus nerve stimulation taVNS transcutaneous auricular cholinergic anti-inflammatory pathway CAP TNF IL-6 pain neuromodulation ear tragus FDA pediatric' },
        { file: 'treatment/small-fiber-neuropathy.html', title: 'Small Fiber Neuropathy Testing', k: 'small fiber neuropathy SFN skin punch biopsy IENFD intraepidermal nerve fiber density burning pain allodynia autonomic C-fiber A-delta perineurium collagen nerve sheath QST sudomotor corneal confocal' },
        { file: 'treatment/osteoarthritis.html', title: 'Early-Onset Osteoarthritis', k: 'osteoarthritis OA joint pain hip knee ankle cartilage degradation MMP-13 COMP hypermobility stiffness joint replacement arthroplasty hyaluronic acid PRP corticosteroid bracing orthotics rheumatologist pediatric TKA survivorship 15-PGDH PGE2 regeneration young patient revision' },
        { file: 'treatment/hypermobility-management.html', title: 'Hypermobility Management', k: 'hypermobility Beighton score joint laxity proprioception balance training ring splint orthotics bracing closed chain exercise subluxation instability EDS connective tissue PT strengthening ankle knee shoulder wrist' },
        { file: 'treatment/tens-guide.html', title: 'TENS Practical Guide', k: 'TENS transcutaneous electrical nerve stimulation electrode placement gate control pain frequency pulse width burst mode pediatric drug-free non-invasive back knee neck hip shoulder' },
        { file: 'treatment/medication-sensitivity.html', title: 'Medication Sensitivity & Drug Reactions', k: 'medication sensitivity drug reaction local anesthetic resistance fluoroquinolone tendon NSAID gastropathy corticosteroid opioid pharmacogenomics CYP2D6 CYP2C19 mast cell autonomic adverse effect' },
        { file: 'treatment/dental-protection.html', title: 'Dental Protection Protocol', k: 'dental protection teeth enamel hypoplasia TMJ anesthesia articaine fluoride sealant xylitol orthodontic malocclusion extraction wound healing emergency avulsion fracture mouthguard caries prevention' },
        { file: 'treatment/deconditioning-spiral.html', title: 'The Deconditioning Spiral', k: 'deconditioning spiral inactivity muscle weakness joint instability cardiovascular orthostatic intolerance bed rest exercise paradox fear avoidance pain cycle vicious cycle graded exercise isometrics' },
        { file: 'treatment/proprioception-balance.html', title: 'Proprioception & Fall Prevention', k: 'proprioception balance fall prevention triple deficit vestibular visual joint position sense Romberg BOSU tandem home safety nightlight grab bar footwear stability perturbation training' },
        { file: 'treatment/orthotics-bracing.html', title: 'Orthotics, Bracing & Supportive Devices', k: 'orthotics bracing AFO SMO UCBL foot ankle knee wrist ring splint Boston brace scoliosis cervical collar insole custom pedorthist orthotist compliance fitting insurance HCPCS' },
        { file: 'treatment/flare-management.html', title: 'Flare Management & Pain Crisis Protocol', k: 'flare pain crisis acute worsening trigger barometric growth spurt first hour protocol red flag rescue medication ice heat recovery pacing flare plan action plan ER emergency' },
        { file: 'treatment/complementary-therapies.html', title: 'Complementary & Manual Therapies', k: 'complementary therapy massage acupuncture chiropractic contraindicated craniosacral osteopathic OMT yoga tai chi dry needling prolotherapy PRP manual therapy safety green yellow red' },
        { file: 'treatment/low-dose-naltrexone.html', title: 'Low-Dose Naltrexone (LDN)', k: 'LDN low-dose naltrexone TLR4 glial modulation neuroinflammation NF-kB endorphin OGF opioid growth factor compounding pharmacy titration off-label fibromyalgia Crohn pain amplification' },
        { file: 'treatment/hearing-rehabilitation.html', title: 'Hearing Rehabilitation Technology', k: 'hearing rehabilitation technology cochlear implant hearing aid FM system remote microphone bone conduction BAHA Osia tectorial membrane COL11A1 audiogram audiometry high-frequency sensorineural loss classroom 504 captioning tinnitus speech-in-noise Roger frequency lowering' }
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
        { file: 'nutrition/environmental-toxins.html', title: 'Environmental Toxin Avoidance', k: 'environmental toxins BPA phthalates pesticides heavy metals air quality water filter endocrine disruptors' },
        { file: 'nutrition/age-crosslinking.html', title: 'AGE Crosslinking Prevention', k: 'AGE advanced glycation end products crosslinking pentosidine sugar collagen stiffness cooking methods polyphenols HbA1c non-enzymatic browning Maillard diet' },
        { file: 'nutrition/gut-permeability.html', title: 'Gut Permeability & COL11A1', k: 'gut permeability leaky gut COL11A1 intestinal barrier goblet cell LPS translocation TLR4 NF-kB zonulin calprotectin glutamine butyrate probiotic microbiome bacterial translocation' },
        { file: 'nutrition/reflux-gi-motility.html', title: 'Reflux & GI Motility', k: 'reflux GERD gastroesophageal LES hiatal hernia gastroparesis IBS constipation bloating dyspepsia PPI prokinetic fundoplication mast cell gut motility autonomic' },
        { file: 'nutrition/vitamin-d.html', title: 'Vitamin D: The Multi-System Protector', k: 'vitamin D cholecalciferol D3 D2 calcitriol 25-OH bone disc immune pain muscle eye sleep target range dosing K2 MK-7 DEXA calcium deficiency supplementation fat-soluble' }
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
        { file: 'monitoring/sleep-apnea.html', title: 'Sleep-Disordered Breathing & OSA', k: 'sleep apnea OSA obstructive central snoring airway CPAP polysomnography PSG adenotonsillectomy midface micrognathia Pierre Robin hypoxia triple-hit nocturnal HIF NF-kB' },
        { file: 'monitoring/cardiac-screening.html', title: 'Cardiac Screening & MVP', k: 'cardiac heart mitral valve prolapse MVP echocardiogram echo aortic root palpitations arrhythmia endocarditis collagen valve myxomatous regurgitation cardiologist sports clearance autonomic POTS' },
        { file: 'monitoring/short-stature.html', title: 'Short Stature & Growth Hormone', k: 'short stature height growth hormone GH IGF-1 bone age platyspondyly disproportionate trunk endocrinology growth velocity percentile skeletal dysplasia psychosocial body image' },
        { file: 'monitoring/bone-density.html', title: 'Bone Density & Osteoporosis Risk', k: 'bone density DEXA osteoporosis osteopenia BMD Z-score T-score trabecular vitamin D calcium bisphosphonate pamidronate peak bone mass vibration fracture P1NP CTX mineralization' }
      ]
    },
    {
      folder: 'future', title: 'Future Therapies', pages: [
        { file: 'future/index.html', title: 'Emerging Therapies', k: 'emerging therapies future treatment pipeline research development' },
        { file: 'future/gene-therapy.html', title: 'Gene Therapy Approaches', k: 'gene therapy CRISPR base editing antisense oligonucleotide AAV viral vector COL11A1 correction' },
        { file: 'future/tissue-engineering.html', title: 'Tissue Engineering Timeline', k: 'tissue engineering scaffold bioprinting stem cell disc replacement regeneration implant' },
        { file: 'future/clinical-trials.html', title: 'Clinical Trials & Registries', k: 'clinical trials registry ClinicalTrials.gov recruitment eligibility rare disease study research' },
        { file: 'future/advocacy.html', title: 'Rare Disease Advocacy', k: 'advocacy rare disease orphan drug patient organization support group lobbying awareness NORD' },
        { file: 'future/gene-therapy-update-2025.html', title: 'Gene Therapy: 2025 Update', k: 'gene therapy 2025 update Vyjuvek beremagene geperpavec COL7A1 epidermolysis bullosa CRISPR allele-specific base editing prime editing ASO antisense oligonucleotide exon skipping AAV cartilage disc delivery minigene COL11A1 COL6A1 collagen dominant-negative splice variant' },
        { file: 'future/gene-therapy-update.html', title: 'Gene Therapy: 2026 Update', k: 'gene therapy 2026 update CRISPR prime editing delivery AAV lipid nanoparticle progress' },
        { file: 'future/regenerative-medicine.html', title: 'Regenerative Medicine Roadmap', k: 'regenerative medicine stem cell MSC iPSC disc repair cartilage restoration growth factor PRP' },
        { file: 'future/cell-banking.html', title: 'Cell Banking & Biobanking', k: 'cell banking biobanking fibroblast skin biopsy dental pulp stem cell PBMC cord blood iPSC cryopreservation Coriell NIGMS future therapy gene therapy regenerative medicine baby teeth' },
        { file: 'future/research-roadmap.html', title: 'Research Roadmap: Reversing Marshall Syndrome', k: 'research roadmap reversal cure gene therapy ASO siRNA CRISPR allele-specific silencing dominant-negative haplosufficiency cascade priority senescence SASP MMP ferroptosis timeline delivery challenge cartilage disc eye ear cell banking advocacy drug repurposing metformin doxycycline senolytics iPSC tissue engineering three layers' },
        { file: 'future/n-of-1-marshall-protocol.html', title: 'N-of-1 Trial Protocol', k: 'N-of-1 trial protocol biomarker supplement prescription NAC selenium vitamin K2 omega-3 metformin doxycycline losartan hsCRP MMP-3 IL-6 ferroptosis GPX4 safety monitoring physician letter crossover evidence rare disease FDA single patient' },
        { file: 'future/drug-repurposing-screen.html', title: 'Drug Repurposing Screen', k: 'drug repurposing screen cascade MMP ferroptosis senescence SASP connexin-43 endplate calcification complement lactate gut-disc NAC metformin doxycycline vitamin K2 selenium curcumin colchicine losartan rapamycin quercetin fisetin hydroxychloroquine LDN deferiprone zileuton tonabersat physician off-label combination strategy' },
        { file: 'future/researcher-directory.html', title: 'Researcher & Lab Directory', k: 'researcher lab directory COL11A1 Stickler Marshall gene therapy silencing siRNA ASO CRISPR collagen VI delivery AAV Krystal Biotech Regeneron senolytic Kirkland disc cartilage regeneration clinical trial registry NORD SIP GenomeConnect CoRDS conference ASHG ARVO advocacy patient outreach' }
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
        { file: 'living/doctor-letter.html', title: 'Doctor Letter', k: 'doctor letter medical summary print specialist ER emergency anesthesia airway cervical spine provider handout one-page COL11A1 clinical features surveillance' },
        { file: 'living/pain-neuroscience.html', title: 'Pain Neuroscience in Children', k: 'pain neuroscience education PNE children pediatric alarm system metaphor fear avoidance catastrophizing graded exposure CBT' },
        { file: 'living/pain-flare-protocol.html', title: 'Pain Flare Protocol: Traffic Light System', k: 'pain flare crisis protocol traffic light system green yellow red zone pacing boom bust cycle activity rest energy battery school modifications bed rest deconditioning comfort strategies recovery graded return' },
        { file: 'living/psychological-support.html', title: 'Psychological & Social Support', k: 'psychological support mental health counseling CBT family therapy peer support chronic illness identity resilience MBSR mindfulness-based stress reduction adolescent brain imaging disability improvement' },
        { file: 'living/autonomic-dysfunction.html', title: 'Autonomic Dysfunction', k: 'autonomic dysfunction dysautonomia POTS orthostatic red ears flushing Lhermitte sign sympathetic parasympathetic cervical heart rate blood pressure temperature fatigue' },
        { file: 'living/sleep-disordered-breathing.html', title: 'Sleep-Disordered Breathing & Airway', k: 'sleep disordered breathing airway management OSA obstructive sleep apnea snoring CPAP BiPAP polysomnography adenotonsillectomy mandibular distraction osteogenesis midface hypoplasia micrognathia Pierre Robin anesthesia intubation AHI screening rapid maxillary expansion myofunctional tracheostomy 502-patient' },
        { file: 'living/tmj-craniofacial.html', title: 'TMJ & Craniofacial Pain', k: 'TMJ temporomandibular joint jaw pain clicking popping micrognathia malocclusion auriculotemporal nerve red ear syndrome DDR2 MMP-13 orthodontic dental' },
        { file: 'living/vestibular-dysfunction.html', title: 'Vestibular Dysfunction & Balance', k: 'vestibular dysfunction balance dizziness vertigo BPPV inner ear stereocilia tectorial membrane vHIT VEMP posturography falls legs giving out vestibulospinal VRT rehabilitation' },
        { file: 'living/symptom-tracker.html', title: 'Symptom Timeline & Tracker', k: 'symptom tracker diary log timeline pain record history documentation backup export' },
        { file: 'living/symptom-navigator.html', title: 'Symptom Navigator', k: 'symptom navigator assessment checklist triage routing personalized recommendations specialist gap analysis' },
        { file: 'living/hearing-management.html', title: 'Hearing Management', k: 'hearing loss sensorineural conductive mixed tectorial membrane audiogram hearing aid BTE bone conduction BAHA cochlear implant FM system Roger speech language tinnitus ear infection otitis media tympanostomy tube noise protection audiologist ABR OAE wireless remote microphone 2025 quality standard SNR Bluetooth LE Audio binaural' },
        { file: 'living/hearing-loss-mechanisms.html', title: 'Hearing Loss Mechanisms: Full Spectrum', k: 'hearing loss mechanisms sensorineural conductive mixed autoimmune inflammatory anti-CII collagen II antibody tectorial membrane COL11A1 central auditory processing disorder CAPD APD cervicogenic somatic Eustachian tube otitis media effusion ossicular steroid trial immunosuppression methotrexate FM system ABR OAE audiogram air-bone gap fluctuating asymmetric CCI vertebral artery' },
        { file: 'living/tinnitus.html', title: 'Tinnitus Management', k: 'tinnitus ringing buzzing hissing sound therapy CBT TRT habituation hearing aid masking notched sound ototoxic medication aminoglycoside cisplatin cochlear damage central gain somatic cervicogenic TMJ pulsatile pediatric sleep insomnia THI questionnaire neuromodulation taVNS' },
        { file: 'living/eye-management.html', title: 'Eye Management', k: 'eye retinal detachment vitreous degeneration myopia nearsightedness cataract glaucoma prophylactic cryotherapy laser retinopexy Cambridge Protocol lattice degeneration giant retinal tear scleral buckle vitrectomy IOL polycarbonate UV protection ophthalmologist vitreoretinal' },
        { file: 'living/transition-adult-care.html', title: 'Transition to Adult Care', k: 'transition adult care pediatric transfer self-advocacy medical summary insurance ADA employment disability pregnancy parenthood genetic risk specialist adult provider independence teen young adult' },
        { file: 'living/headaches.html', title: 'Headaches: 5 Types in Marshall Syndrome', k: 'headache migraine cervicogenic positional CSF leak tension medication overuse occipital neuralgia trigeminovascular Chiari intracranial hypotension red flag GON block headache diary' },
        { file: 'living/fatigue-management.html', title: 'Fatigue Management', k: 'fatigue energy spoon theory pacing post-exertional malaise brain fog cognitive fatigue exercise paradox sleep disruption autonomic deconditioning school accommodations energy envelope boom bust' },
        { file: 'living/dental-orthodontic.html', title: 'Dental & Orthodontic Management', k: 'dental orthodontic teeth enamel malocclusion Pierre Robin palate cleft jaw mandible TMJ braces retention root resorption local anesthetic sedation airway fluoride sealant caries periodontal' },
        { file: 'living/strabismus.html', title: 'Strabismus (Eye Misalignment)', k: 'strabismus esotropia exotropia hypertropia amblyopia lazy eye binocular vision depth perception eye muscle surgery recession resection prism patching scleral thinning pediatric ophthalmologist' },
        { file: 'living/easy-bruising.html', title: 'Easy Bruising & Abuse Differentiation', k: 'bruising easy bruise capillary fragility vascular collagen child abuse non-accidental injury NAI CPS mandatory reporting geneticist letter documentation proactive von Willebrand coagulation' },
        { file: 'living/vpi-nasal-speech.html', title: 'VPI & Nasal Speech', k: 'VPI velopharyngeal insufficiency nasal speech hypernasal cleft palate velum pharyngeal flap sphincter pharyngoplasty speech therapy SLP nasometry videofluoroscopy submucous cleft intelligibility articulation' },
        { file: 'living/family-impact.html', title: 'Family & Sibling Impact', k: 'family sibling caregiver burnout glass child guilt de novo inheritance parent marriage financial respite support rare disease coping' },
        { file: 'living/sports-clearance.html', title: 'Sports Clearance & Activity Guide', k: 'sports clearance PE physical education activity green yellow red traffic light swimming cycling trampoline gymnastics contact sport coach letter camp retinal cervical cardiac' },
        { file: 'living/wound-healing.html', title: 'Wound Healing & Skin', k: 'wound healing scar skin collagen surgery suture dehiscence tensile strength connective tissue dermal fragility bruising surgical recovery closure' },
        { file: 'living/travel-planning.html', title: 'Travel & Vacation Planning', k: 'travel flying airplane altitude retinal detachment cabin pressure medical kit hearing aid airport security medication time zone specialist road trip amusement park camp international vacation' },
        { file: 'living/pregnancy-management.html', title: 'Pregnancy & Obstetric Management', k: 'pregnancy obstetric high-risk MFM maternal fetal medicine cervical competence cerclage epidural cesarean retinal Valsalva relaxin postpartum breastfeeding newborn PGT-M prenatal airway anesthesia' },
        { file: 'living/emergency-card.html', title: 'Emergency Protocol Card', k: 'emergency ER protocol card triage airway difficult intubation cervical spine CCI retinal detachment ototoxic aminoglycoside wound healing joint laxity dislocation phone nurse hospital crisis 2am' }
      ]
    },
    {
      folder: 'resources', title: 'Resources', pages: [
        { file: 'resources/index.html', title: 'Resources', k: 'resources links organizations information support' },
        { file: 'resources/questions.html', title: 'Questions for Doctors', k: 'questions doctors appointments preparation what to ask specialist visit' },
        { file: 'resources/latest-research.html', title: 'Latest Research', k: 'latest research papers publications PubMed studies new findings 2025 2026' },
        { file: 'resources/support.html', title: 'Support Resources', k: 'support groups families communities online forums Facebook foundation Stickler Involved People' },
        { file: 'resources/references.html', title: 'References', k: 'references bibliography citations sources papers journals authors' },
        { file: 'resources/emergency-card.html', title: 'Emergency Medical Card', k: 'emergency card medical alert ID bracelet travel school nurse print airway cervical spine retinal detachment MedicAlert ICE 504 IEP sedation anesthesia AI diagnostics cervical precautions NEXUS QR code wound care' },
        { file: 'resources/surgical-checklist.html', title: 'Pre-Surgical Checklist', k: 'surgical checklist pre-surgical airway micrognathia midface hypoplasia cervical spine anesthetic resistance articaine lidocaine tissue fragility wound healing mitral valve prolapse retinal detachment eye protection fluoroquinolone letter template' },
        { file: 'resources/surgery-checklist.html', title: 'Pre-Surgery Checklist', k: 'surgery checklist pre-operative preparation anesthesia cervical spine clearance wound healing letter template print OrphanAnesthesia intubation pain recovery procedure' },
        { file: 'resources/newly-diagnosed.html', title: 'Newly Diagnosed: First 30 Days', k: 'newly diagnosed first 30 days start here guide roadmap specialists tests school accommodations emotional support onboarding triage checklist' },
        { file: 'resources/insurance-navigation.html', title: 'Insurance Navigation & Financial Advocacy', k: 'insurance prior authorization denial appeal hearing aid coverage GINA SSI SSDI financial assistance NORD copay charity care peer-to-peer review patient advocate rare disease coverage medical necessity' },
        { file: 'resources/genetic-counseling.html', title: 'Genetic Counseling & Family Planning', k: 'genetic counseling family planning autosomal dominant inheritance de novo mutation parental mosaicism gonadal germline sibling screening recurrence risk phenotypic variability COL11A1 carrier testing prenatal CVS amniocentesis PGT-M IVF preimplantation donor gametes reproductive options' },
        { file: 'resources/n-of-1-trials.html', title: 'N-of-1 Trials & Building Evidence', k: 'N-of-1 trial single patient crossover washout evidence rare disease case report publication outcome measure biomarker doxycycline LDN sulforaphane CARE guidelines statistical analysis' }
      ]
    },
    {
      folder: 'emerging', title: 'Emerging Research', pages: [
        { file: 'emerging/index.html', title: 'Emerging Research Overview', k: 'emerging research speculative novel hypotheses cross-domain synthesis' },
        { file: 'emerging/nrf2-convergence.html', title: 'NRF2: The Master Convergence Node', k: 'NRF2 KEAP1 sulforaphane broccoli exercise irisin AMPK melatonin DMF antioxidant Wnt GPX4 ferroptosis convergence' },
        { file: 'emerging/nocturnal-destruction.html', title: 'The Nocturnal Destruction Window', k: 'nocturnal night destruction sleep 2AM 5AM complement activation cortisol melatonin disc damage circadian' },
        { file: 'emerging/pemf-timing.html', title: 'PEMF Timing & the Safe Window', k: 'PEMF timing pulsed electromagnetic field safe window morning evening protocol frequency duration' },
        { file: 'emerging/complement-ferroptosis.html', title: 'Complement-Ferroptosis Interaction', k: 'complement ferroptosis C3 C5 MAC membrane attack iron lipid peroxidation interaction synergy' },
        { file: 'emerging/peroxynitrite-bridge.html', title: 'Peroxynitrite: The Bridge Between Inflammation and Cell Death', k: 'peroxynitrite ONOO NF-kB iNOS nitric oxide superoxide GPX4 ferroptosis bridge inflammation cell death ebselen melatonin NRF2 glutathione GSH selenium organoselenium manganese porphyrin MnTBAP uric acid amplification loop mitochondria lipid peroxidation serial pathway' },
        { file: 'emerging/chronotherapy-protocol.html', title: 'Complete 24-Hour Chronotherapy Protocol', k: 'chronotherapy 24 hour protocol timing circadian supplement exercise sleep schedule optimization' },
        { file: 'emerging/mcas-neuroinflammation.html', title: 'MCAS, Complement & Neuroinflammation', k: 'MCAS mast cell activation syndrome complement neuroinflammation tryptase histamine C3a C5a perineurial collagen XI antibodies autoimmune' },
        { file: 'emerging/er-stress-upr.html', title: 'ER Stress & the Unfolded Protein Response', k: 'ER stress endoplasmic reticulum unfolded protein response UPR IRE1 PERK ATF6 CHOP BiP GRP78 misfolded collagen dominant-negative chaperone 4-PBA TUDCA carbamazepine apoptosis' },
        { file: 'emerging/yap-taz-mechanosensing.html', title: 'YAP/TAZ: The Mechanosensing Bridge', k: 'YAP TAZ mechanosensing mechanotransduction integrin FAK Rho ROCK matrix stiffness Piezo1 ferroptosis senescence fibrosis CTGF irisin verteporfin Hippo pathway' },
        { file: 'emerging/glial-neuroinflammation.html', title: 'Glial Activation & Neuroinflammation', k: 'glia microglia astrocyte neuroinflammation BDNF KCC2 GABA reversal central pain LDN naltrexone TLR4 oligodendrocyte PEA palmitoylethanolamide mast cell spinal cord' },
        { file: 'emerging/exercise-sensitization-paradox.html', title: 'The Exercise Paradox: Central Sensitization First', k: 'exercise paradox central sensitization exercise-induced hypoalgesia EIH descending inhibition BDNF KCC2 GABA reversal conditioned pain modulation CPM avoidance deconditioning aquatic therapy LDN amitriptyline treatment sequencing pain neuroscience education hypermobility adolescent' },
        { file: 'emerging/mmp-cascade.html', title: 'The MMP Cascade: Destruction Executors', k: 'MMP matrix metalloproteinase MMP-3 MMP-13 stromelysin collagenase ADAMTS aggrecanase PAX1 TIMP doxycycline omega-3 DDR2 biomarker cartilage destruction' },
        { file: 'emerging/circadian-disc-clock.html', title: 'Circadian Biology & the Disc Clock', k: 'circadian BMAL1 CLOCK REV-ERB clock gene peripheral oscillator disc timing chronotherapy morning exercise melatonin complement gate 2AM vulnerability desynchronization' },
        { file: 'emerging/nfkb-inflammatory-hub.html', title: 'NF-kB: The Central Inflammatory Hub', k: 'NF-kB nuclear factor kappa B p50 p65 RelA IKK IkBa inflammation convergence MMP cytokine TNF IL-1 IL-6 iNOS COX-2 SASP amplification loop omega-3 resolvin curcumin LDN vagus cholinergic' },
        { file: 'emerging/gut-mechanotransduction.html', title: 'The Gut-Mechanotransduction Axis', k: 'gut mechanotransduction TMAO Piezo1 YAP dysbiosis microbiome TMA choline carnitine calcium iron ferroptosis intestinal barrier COL11A1 gut-disc axis gut permeability TMAO biomarker probiotic resveratrol fiber red meat L-carnitine FMO3 TMA lyase DMB double hit amplifier' },
        { file: 'emerging/glutathione-competition.html', title: 'The Glutathione Tug-of-War', k: 'glutathione GSH GPX4 ER stress ferroptosis competition zero-sum NAC N-acetylcysteine cysteine SLC7A11 GCLC glycine alpha-lipoic acid pool expansion PERK CHOP growth spurt puberty' },
        { file: 'emerging/circadian-autophagy.html', title: 'Circadian Autophagy Timing', k: 'circadian autophagy timing NCOA4 ferritinophagy iron release BMAL1 NRF2 morning exercise carbamazepine drug timing paradox clearance ferroptosis daytime nighttime' },
        { file: 'emerging/nocturnal-iron-cascade.html', title: 'The Nocturnal Iron Cascade', k: 'nocturnal iron cascade senescent cell 30x labile iron MAC complement ferroptosis propagation avascular senomorphic senolytic quercetin evening iron chelation amplification' },
        { file: 'emerging/autoimmune-hearing-loop.html', title: 'Autoimmune Hearing Loss: Anti-CII Loop', k: 'autoimmune hearing loss anti-CII antibody collagen II D3 epitope tectorial membrane sensorineural SSNHL Meniere immune-mediated corticosteroid methotrexate rituximab oral tolerance feedback loop' },
        { file: 'emerging/disc-starvation-clock.html', title: 'The Disc Starvation Clock', k: 'disc starvation clock Wnt calcification endplate nutrient delivery glucose NRF2 CBP competition beta-catenin osteogenic differentiation monitoring CT biomarker irreversible threshold' },
        { file: 'emerging/notochordal-countdown.html', title: 'The Notochordal Cell Countdown', k: 'notochordal cell countdown ages 9-12 Sonic Hedgehog Shh SOX9 stem cell renewal NP nucleus pulposus irreversible window urgency ER stress growth spurt fibrotic transformation' },
        { file: 'emerging/statins-triple-mechanism.html', title: 'Statins as Triple-Mechanism Therapy', k: 'statin HMG-CoA reductase isoprenoid Rho ROCK prenylation YAP NF-kB Wnt triple mechanism simvastatin pravastatin rosuvastatin pediatric repurposing disc MMP chondrocyte N-of-1' }
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

  // Detect mobile (matches CSS breakpoint)
  var isMobile = function() { return window.innerWidth <= 900; };

  // Create cross-page results dropdown
  var searchDropdown = document.createElement('div');
  searchDropdown.className = 'search-dropdown';
  searchDropdown.style.cssText = 'display:none;position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #d1d5db;border-radius:0 0 8px 8px;max-height:360px;overflow-y:auto;z-index:1001;box-shadow:0 8px 24px rgba(0,0,0,0.15);';

  // Create overlay for mobile (dims background behind dropdown)
  var searchOverlay = document.createElement('div');
  searchOverlay.className = 'search-dropdown-overlay';
  document.body.appendChild(searchOverlay);

  var searchWrapper = document.querySelector('.search-wrapper');
  if (searchWrapper) {
    searchWrapper.style.position = 'relative';
    searchWrapper.appendChild(searchDropdown);
  }

  // Close search on overlay tap (mobile)
  searchOverlay.addEventListener('click', function() {
    searchDropdown.style.display = 'none';
    searchOverlay.classList.remove('active');
    if (searchInput) searchInput.blur();
  });

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
    if (isMobile()) searchOverlay.classList.add('active');
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
          searchOverlay.classList.remove('active');
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

        // Scroll to first in-page match (skip on mobile — fights with iOS keyboard)
        if (result.firstMark && !isMobile()) {
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
        searchOverlay.classList.remove('active');
      }
    });

    // Close dropdown when clicking/tapping outside
    document.addEventListener('click', function(e) {
      if (!searchWrapper.contains(e.target)) {
        searchDropdown.style.display = 'none';
        searchOverlay.classList.remove('active');
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
