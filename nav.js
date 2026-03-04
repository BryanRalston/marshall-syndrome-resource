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
        { file: 'basics/index.html', title: 'What is Marshall Syndrome?' },
        { file: 'basics/molecular-biology.html', title: 'The Molecular Biology' },
        { file: 'basics/natural-history.html', title: 'Decade-by-Decade Natural History' }
      ]
    },
    {
      folder: 'spine', title: 'Spine', pages: [
        { file: 'spine/index.html', title: 'Why the Spine is Affected' },
        { file: 'spine/spinal-pain.html', title: 'Spinal Pain Research' },
        { file: 'spine/puberty-window.html', title: 'Puberty: The Vulnerable Window' },
        { file: 'spine/growth.html', title: 'Growth, Puberty & the Spine' },
        { file: 'spine/imaging.html', title: 'Imaging Protocol' },
        { file: 'spine/piezoelectricity.html', title: 'Collagen Piezoelectricity & PEMF' },
        { file: 'spine/endplate-calcification.html', title: 'Endplate Calcification Cascade' },
        { file: 'spine/exosome-signaling.html', title: 'Exosome Communication' },
        { file: 'spine/iron-metabolism.html', title: 'Iron Metabolism in the Disc' },
        { file: 'spine/developmental-signaling.html', title: 'Developmental Signaling Pathways' },
        { file: 'spine/multi-organ-protection.html', title: 'Multi-Organ Protection: Eyes, Ears & Disc' },
        { file: 'spine/immune-dysregulation.html', title: 'The Four-Mechanism Immune Cascade' },
        { file: 'spine/growth-spurt.html', title: 'Growth Spurt Vulnerability Map' }
      ]
    },
    {
      folder: 'treatment', title: 'Treatment', pages: [
        { file: 'treatment/index.html', title: 'Treatment Overview' },
        { file: 'treatment/surgery.html', title: 'Surgical Considerations' },
        { file: 'treatment/physical-therapy.html', title: 'Physical Therapy' },
        { file: 'treatment/vibration-therapy.html', title: 'Whole-Body Vibration' },
        { file: 'treatment/exercise.html', title: 'Exercise as Molecular Medicine' },
        { file: 'treatment/pain-model.html', title: 'Seven-Mechanism Pain Model' },
        { file: 'treatment/early-pain.html', title: 'Urgency: Early Pain Management' },
        { file: 'treatment/pain-management.html', title: 'Pain Management' },
        { file: 'treatment/daily-guide.html', title: 'Practical Daily Guide' },
        { file: 'treatment/anesthesia.html', title: 'Anesthesia Safety' },
        { file: 'treatment/exercise-pathways.html', title: 'Exercise: 10 Molecular Pathways' },
        { file: 'treatment/supplements-advanced.html', title: 'Advanced Supplement Targets' },
        { file: 'treatment/pain-stack.html', title: 'The 5-Agent Pain Convergence Stack' },
        { file: 'treatment/aquatic-therapy.html', title: 'Aquatic Therapy' },
        { file: 'treatment/photobiomodulation.html', title: 'Photobiomodulation (Red Light Therapy)' },
        { file: 'treatment/morning-protocol.html', title: 'The 90-Minute Morning Protocol' },
        { file: 'treatment/complete-protocol.html', title: 'Complete 24-Hour Protocol' }
      ]
    },
    {
      folder: 'nutrition', title: 'Nutrition & Supplements', pages: [
        { file: 'nutrition/index.html', title: 'Nutrition Overview' },
        { file: 'nutrition/diet-protocol.html', title: 'Nutrition Protocol' },
        { file: 'nutrition/glucose-ages.html', title: 'Glucose, AGEs & Disc Nutrition' },
        { file: 'nutrition/ferroptosis.html', title: 'The Ferroptosis Connection' },
        { file: 'nutrition/senescence.html', title: 'The Senescence Problem' },
        { file: 'nutrition/wnt-pathway.html', title: 'Wnt Pathway Dysregulation' },
        { file: 'nutrition/taurine.html', title: 'Taurine: A Key Supplement' },
        { file: 'nutrition/supplements.html', title: 'Epigenetic Defense Protocol' },
        { file: 'nutrition/gut-spine.html', title: 'The Gut-Spine Connection' },
        { file: 'nutrition/autophagy.html', title: 'Disc Autophagy' },
        { file: 'nutrition/what-not-to-do.html', title: 'What NOT to Do' },
        { file: 'nutrition/gut-disc-axis.html', title: 'The Gut-Disc Axis' },
        { file: 'nutrition/precision-nutrition.html', title: 'Precision Nutritional Biochemistry' },
        { file: 'nutrition/environmental-toxins.html', title: 'Environmental Toxin Avoidance' }
      ]
    },
    {
      folder: 'monitoring', title: 'Monitoring', pages: [
        { file: 'monitoring/index.html', title: 'Monitoring Overview' },
        { file: 'monitoring/biomarkers.html', title: 'Comprehensive Monitoring Panel' },
        { file: 'monitoring/epigenetic-aging.html', title: 'Epigenetic Age Monitoring' },
        { file: 'monitoring/puberty-window.html', title: 'Puberty Vulnerability Window' },
        { file: 'monitoring/sleep.html', title: 'Sleep & Circadian Health' },
        { file: 'monitoring/screening-tests.html', title: 'Screening Tests' },
        { file: 'monitoring/red-flags.html', title: 'Red Flags: Emergency Care' },
        { file: 'monitoring/biomarker-dashboard.html', title: '11-Domain Biomarker Dashboard' },
        { file: 'monitoring/sleep-architecture.html', title: 'Sleep Architecture: Nocturnal Defense' },
        { file: 'monitoring/growth-velocity.html', title: 'Growth Velocity Monitoring' }
      ]
    },
    {
      folder: 'future', title: 'Future Therapies', pages: [
        { file: 'future/index.html', title: 'Emerging Therapies' },
        { file: 'future/gene-therapy.html', title: 'Gene Therapy Approaches' },
        { file: 'future/tissue-engineering.html', title: 'Tissue Engineering Timeline' },
        { file: 'future/clinical-trials.html', title: 'Clinical Trials & Registries' },
        { file: 'future/advocacy.html', title: 'Rare Disease Advocacy' },
        { file: 'future/gene-therapy-update.html', title: 'Gene Therapy: 2026 Update' },
        { file: 'future/regenerative-medicine.html', title: 'Regenerative Medicine Roadmap' }
      ]
    },
    {
      folder: 'living', title: 'Living With Marshall', pages: [
        { file: 'living/index.html', title: 'Living With Marshall' },
        { file: 'living/comorbidities.html', title: 'Comorbidity Interactions' },
        { file: 'living/psychology.html', title: 'Psychological Impact' },
        { file: 'living/school-504.html', title: 'School 504 Plan' },
        { file: 'living/talking.html', title: 'Talking About Marshall' },
        { file: 'living/specialists.html', title: 'Specialists to Consult' },
        { file: 'living/pain-neuroscience.html', title: 'Pain Neuroscience in Children' },
        { file: 'living/psychological-support.html', title: 'Psychological & Social Support' }
      ]
    },
    {
      folder: 'resources', title: 'Resources', pages: [
        { file: 'resources/index.html', title: 'Resources' },
        { file: 'resources/questions.html', title: 'Questions for Doctors' },
        { file: 'resources/latest-research.html', title: 'Latest Research' },
        { file: 'resources/support.html', title: 'Support Resources' },
        { file: 'resources/references.html', title: 'References' }
      ]
    },
    {
      folder: 'emerging', title: 'Emerging Research', pages: [
        { file: 'emerging/index.html', title: 'Emerging Research Overview' },
        { file: 'emerging/nrf2-convergence.html', title: 'NRF2: The Master Convergence Node' },
        { file: 'emerging/nocturnal-destruction.html', title: 'The Nocturnal Destruction Window' },
        { file: 'emerging/pemf-timing.html', title: 'PEMF Timing & the Safe Window' },
        { file: 'emerging/complement-ferroptosis.html', title: 'Complement-Ferroptosis Interaction' },
        { file: 'emerging/chronotherapy-protocol.html', title: 'Complete 24-Hour Chronotherapy Protocol' }
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

  // ===== SIMPLE PAGE SEARCH =====
  var searchInput = document.getElementById('searchInput');
  var searchCount = document.getElementById('searchCount');
  var pageBody = document.querySelector('.page-body') || document.querySelector('.content');

  if (searchInput && pageBody) {
    var originalHTML = pageBody.innerHTML;

    searchInput.addEventListener('input', function() {
      var query = this.value.trim();
      if (query.length < 2) {
        pageBody.innerHTML = originalHTML;
        if (searchCount) searchCount.textContent = '';
        return;
      }

      var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      var regex = new RegExp('(' + escaped + ')', 'gi');
      var text = pageBody.textContent || pageBody.innerText;
      var matches = text.match(regex);
      var count = matches ? matches.length : 0;

      if (searchCount) {
        searchCount.textContent = count + ' match' + (count !== 1 ? 'es' : '');
      }

      if (count > 0) {
        // Highlight text but skip inside HTML tags
        var parts = originalHTML.split(/(<[^>]+>)/);
        for (var k = 0; k < parts.length; k++) {
          if (parts[k].charAt(0) !== '<') {
            parts[k] = parts[k].replace(regex, '<mark class="search-highlight">$1</mark>');
          }
        }
        pageBody.innerHTML = parts.join('');
      } else {
        pageBody.innerHTML = originalHTML;
      }
    });
  }

})();
