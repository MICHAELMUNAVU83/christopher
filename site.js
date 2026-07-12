/* ============================================================
   Christopher Msando Foundation — rendering
   ------------------------------------------------------------
   - On index.html: renders the project cards (#projects-grid)
     and the story cards (#stories-grid) from window.SITE_DATA.
     Project cards link to project.html?project=<slug>.
   - On project.html: reads ?project=<slug> (or ?story=<slug>)
     and fills in the detail page + the related projects grid.
   ============================================================ */
(function () {
  "use strict";

  var SITE_URL = "https://christophermsandofoundation.org";
  var data = window.SITE_DATA || { projects: [], stories: [] };
  var projects = data.projects || [];
  var stories = data.stories || [];

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function fromHTML(html) {
    var tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    return tpl.content.firstElementChild;
  }

  function toAbsoluteUrl(path) {
    if (!path) return SITE_URL + "/";
    if (/^https?:\/\//i.test(path)) return path;
    return SITE_URL + "/" + String(path).replace(/^\/+/, "");
  }

  function slugToKeywords(slug) {
    return String(slug || "")
      .split("-")
      .filter(Boolean)
      .join(", ");
  }

  function updateMetaTag(selector, content) {
    var node = document.querySelector(selector);
    if (node && content) node.setAttribute("content", content);
  }

  function updateCanonical(href) {
    var node = document.getElementById("canonical-link");
    if (node && href) node.setAttribute("href", href);
  }

  function updateSchema(entry, canonicalUrl, isStory) {
    var node = document.getElementById("page-schema");
    if (!node || !entry) return;

    var schema = {
      "@context": "https://schema.org",
      "@type": isStory ? "Article" : "CreativeWork",
      headline: entry.title,
      name: entry.title,
      description: entry.summary || entry.excerpt || entry.title,
      image: [toAbsoluteUrl(entry.heroImage || entry.image)],
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Christopher Msando Foundation",
        url: SITE_URL + "/",
      },
      publisher: {
        "@type": "NGO",
        name: "Christopher Msando Foundation",
        url: SITE_URL + "/",
        logo: {
          "@type": "ImageObject",
          url: SITE_URL + "/images/logo.png",
        },
      },
      about: [
        "ICT education",
        "Youth mentorship",
        "Community outreach",
        "Kenya",
      ],
    };

    if (entry.date && !isNaN(Date.parse(entry.date))) {
      schema.datePublished = entry.date;
    }

    if (entry.location) {
      schema.contentLocation = {
        "@type": "Place",
        name: entry.location,
      };
    }

    node.textContent = JSON.stringify(schema);
  }

  function updateDetailSeo(entry, isStory) {
    if (!entry) return;

    var queryKey = isStory ? "story" : "project";
    var canonicalUrl =
      SITE_URL + "/project.html?" + queryKey + "=" + encodeURIComponent(entry.slug);
    var imageUrl = SITE_URL + "/images/logo.png";
    var description = entry.summary || entry.excerpt || entry.title;
    var title = entry.title + " | Christopher Msando Foundation";
    var typeLabel = isStory ? "story" : "project";
    var keywords = [
      "Christopher Msando Foundation",
      entry.title,
      slugToKeywords(entry.slug),
      "ICT Kenya",
      "youth empowerment",
      typeLabel,
    ]
      .filter(Boolean)
      .join(", ");

    document.title = title;
    updateCanonical(canonicalUrl);
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:url"]', canonicalUrl);
    updateMetaTag('meta[property="og:image"]', imageUrl);
    updateMetaTag('meta[property="og:image:alt"]', "Christopher Msando Foundation logo");
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', imageUrl);
    updateMetaTag('meta[name="keywords"]', keywords);
    updateSchema(entry, canonicalUrl, isStory);
  }

  function initThreeScenes() {
    if (!window.THREE) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    var roots = document.querySelectorAll("[data-three-scene]");
    if (!roots.length) return;

    Array.prototype.forEach.call(roots, function (root, index) {
      createAmbientScene(root, index);
    });
  }

  function createAmbientScene(root, index) {
    if (!root || !root.clientWidth || !root.clientHeight) return;

    var THREE = window.THREE;
    var theme = root.getAttribute("data-three-theme") || "light";
    var palette =
      theme === "dark"
        ? {
            particle: 0x9ad1ff,
            wire: 0x4294d5,
            orb: 0xf3f8fc,
            fog: 0x12324d,
          }
        : {
            particle: 0x4294d5,
            wire: 0x6db8f1,
            orb: 0xffffff,
            fog: 0xf3f8fc,
          };

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch (error) {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(root.clientWidth, root.clientHeight);
    renderer.domElement.className = "three-canvas";
    root.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(palette.fog, theme === "dark" ? 0.055 : 0.09);

    var camera = new THREE.PerspectiveCamera(42, root.clientWidth / root.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 15);

    var group = new THREE.Group();
    group.rotation.x = 0.35;
    group.rotation.y = index % 2 === 0 ? -0.25 : 0.25;
    scene.add(group);

    var shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(4.4, 1),
      new THREE.MeshBasicMaterial({
        color: palette.wire,
        wireframe: true,
        transparent: true,
        opacity: theme === "dark" ? 0.28 : 0.18,
      })
    );
    group.add(shell);

    var halo = new THREE.Mesh(
      new THREE.TorusGeometry(5.8, 0.08, 16, 160),
      new THREE.MeshBasicMaterial({
        color: palette.particle,
        transparent: true,
        opacity: theme === "dark" ? 0.18 : 0.14,
      })
    );
    halo.rotation.x = Math.PI / 2.4;
    group.add(halo);

    var orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 24, 24),
      new THREE.MeshBasicMaterial({
        color: palette.orb,
        transparent: true,
        opacity: theme === "dark" ? 0.4 : 0.28,
      })
    );
    orb.position.set(0, 0, -1.4);
    group.add(orb);

    var positions = new Float32Array(180 * 3);
    for (var i = 0; i < positions.length; i += 3) {
      var radius = 4.8 + Math.random() * 4.4;
      var theta = Math.random() * Math.PI * 2;
      var phi = Math.acos(2 * Math.random() - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.65;
      positions[i + 2] = radius * Math.cos(phi);
    }

    var starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    var stars = new THREE.Points(
      starsGeometry,
      new THREE.PointsMaterial({
        color: palette.particle,
        size: theme === "dark" ? 0.08 : 0.07,
        transparent: true,
        opacity: theme === "dark" ? 0.85 : 0.55,
        sizeAttenuation: true,
      })
    );
    scene.add(stars);

    var pointer = { x: 0, y: 0 };
    function handlePointer(event) {
      var rect = root.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.8;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.5;
    }

    root.addEventListener("pointermove", handlePointer);

    function resize() {
      var width = root.clientWidth;
      var height = root.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener("resize", resize);

    function tick(time) {
      var t = time * 0.00035;
      group.rotation.y += 0.0012;
      group.rotation.z = Math.sin(t * 2) * 0.08;
      group.position.x += (pointer.x * 1.4 - group.position.x) * 0.04;
      group.position.y += (-pointer.y * 1.2 - group.position.y) * 0.04;
      halo.rotation.z -= 0.0022;
      shell.rotation.x -= 0.0015;
      orb.position.y = Math.sin(t * 3.2) * 0.35;
      stars.rotation.y -= 0.0006;
      stars.rotation.x = Math.cos(t * 1.4) * 0.08;
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    }

    window.requestAnimationFrame(tick);
  }

  /* ---------- index.html: project cards ---------- */
  function renderProjectCards() {
    var grid = document.getElementById("projects-grid");
    if (!grid) return;
    var cta = document.getElementById("projects-cta");
    projects.forEach(function (p) {
      var href = "project.html?project=" + encodeURIComponent(p.slug);
      var card = fromHTML(
        '<a href="' + href + '" ' +
          'class="group block overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-brand/50">' +
          '<img src="' + esc(p.image) + '" loading="lazy" alt="' + esc(p.title) + '" ' +
            'class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />' +
          '<div class="p-7">' +
            '<h4 class="text-xl font-bold group-hover:text-brand">' + esc(p.title) + "</h4>" +
            '<p class="mt-3 text-sm text-white/60">' + esc(p.excerpt) + "</p>" +
            '<div class="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">' +
              '<div><div class="text-lg font-bold">' + esc(p.goal) + "</div>" +
                '<div class="text-xs text-white/50">Funding Goal</div></div>' +
              '<div><div class="text-lg font-bold">' + esc(p.raised) + "</div>" +
                '<div class="text-xs text-white/50">Raised So Far</div></div>' +
            "</div>" +
          "</div>" +
        "</a>"
      );
      if (cta) grid.insertBefore(card, cta);
      else grid.appendChild(card);
    });
  }

  /* ---------- index.html: story cards ---------- */
  function renderStoryCards() {
    var grid = document.getElementById("stories-grid");
    if (!grid) return;
    stories.forEach(function (s) {
      var href = "project.html?story=" + encodeURIComponent(s.slug);
      var card = fromHTML(
        '<article class="group">' +
          '<a href="' + href + '" class="block overflow-hidden rounded-3xl">' +
            '<img src="' + esc(s.image) + '" loading="lazy" alt="' + esc(s.title) + '" ' +
              'class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />' +
          "</a>" +
          '<div class="mt-5 flex items-center justify-between">' +
            '<span class="text-sm text-ink/50">' + esc(s.date) + "</span>" +
            '<a href="' + href + '" class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">Read More' +
              '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" ' +
                'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
                '<line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></a>' +
          "</div>" +
          '<div class="mt-4 border-t border-ink/10 pt-4">' +
            '<h2 class="text-xl font-bold group-hover:text-brand"><a href="' + href + '">' + esc(s.title) + "</a></h2>" +
          "</div>" +
        "</article>"
      );
      grid.appendChild(card);
    });
  }

  /* ---------- project.html: fill the detail page ---------- */
  function renderDetail() {
    var root = document.getElementById("project-detail");
    if (!root) return;

    var params = new URLSearchParams(window.location.search);
    var projectSlug = params.get("project");
    var storySlug = params.get("story");
    var slug = projectSlug || storySlug;
    var entry =
      projects.filter(function (p) { return p.slug === slug; })[0] ||
      stories.filter(function (s) { return s.slug === slug; })[0] ||
      projects[0];
    if (!entry) return;
    var isStory =
      !!storySlug ||
      stories.some(function (s) { return s.slug === entry.slug; });

    function setText(id, text) {
      var node = document.getElementById(id);
      if (node) node.textContent = text;
    }

    setText("p-date", entry.date || "");
    setText("p-title", entry.title);
    setText("p-excerpt", entry.summary || entry.excerpt || "");
    setText("p-story-heading", entry.storyHeading || entry.title);

    var hero = document.getElementById("p-hero-bg");
    if (hero) hero.style.backgroundImage = 'url("' + (entry.heroImage || entry.image) + '")';

    var bodyWrap = document.getElementById("p-story-body");
    if (bodyWrap) {
      var body = entry.body || [];
      var highlights = entry.highlights || [];
      var html = "";
      if (body[0]) html += "<p>" + esc(body[0]) + "</p>";
      if (highlights.length) {
        html += '<ul class="list-disc space-y-2 pl-6 marker:text-[#4294d5]">';
        highlights.forEach(function (h) { html += "<li>" + esc(h) + "</li>"; });
        html += "</ul>";
      }
      if (body.length > 1) {
        html += '<h3 class="pt-4 text-xl font-bold text-[#f3f8fc]">More about this</h3>';
        body.slice(1).forEach(function (para) { html += "<p>" + esc(para) + "</p>"; });
      }
      bodyWrap.innerHTML = html;
    }

    updateDetailSeo(entry, isStory);
    renderRelated(entry.slug);
  }

  /* ---------- project.html: related projects grid ---------- */
  function renderRelated(currentSlug) {
    var grid = document.getElementById("related-grid");
    if (!grid) return;
    var cta = document.getElementById("related-cta");
    projects.forEach(function (p) {
      var href = "project.html?project=" + encodeURIComponent(p.slug);
      var current = p.slug === currentSlug;
      var card = fromHTML(
        '<a href="' + href + '" ' +
          'class="group block overflow-hidden rounded-2xl bg-white/[0.04] ring-1 transition hover:-translate-y-1 ' +
          (current ? "ring-[#4294d5]/60" : "ring-white/10 hover:ring-[#4294d5]/40") + '">' +
          '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy" ' +
            'class="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />' +
          '<div class="p-6">' +
            '<h3 class="text-lg font-bold group-hover:text-[#4294d5]">' + esc(p.title) + "</h3>" +
            '<p class="mt-2 text-sm text-[#f3f8fc]/70">' + esc(p.excerpt) + "</p>" +
            '<div class="mt-5 h-px bg-white/10"></div>' +
            '<div class="mt-5 grid grid-cols-2 gap-4">' +
              '<div><p class="font-bold">' + esc(p.goal) + "</p>" +
                '<p class="text-xs text-[#f3f8fc]/60">Funding Goal</p></div>' +
              '<div><p class="font-bold">' + esc(p.raised) + "</p>" +
                '<p class="text-xs text-[#f3f8fc]/60">Raised So Far</p></div>' +
            "</div>" +
          "</div>" +
        "</a>"
      );
      if (cta) grid.insertBefore(card, cta);
      else grid.appendChild(card);
    });
  }

  /* ---------- index.html: hero image slider ---------- */
  function initHeroSlider() {
    var root = document.querySelector("[data-hero-slider]");
    if (!root) return;

    var slides = Array.prototype.slice.call(root.querySelectorAll("img"));
    var dotsWrap = root.querySelector("[data-hero-dots]");
    if (slides.length < 2) return;

    var reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var current = 0;
    var dots = slides.map(function (_, index) {
      var dot = fromHTML(
        '<button type="button" aria-label="Show slide ' + (index + 1) + '" ' +
          'class="h-2 w-2 rounded-full bg-white/60 ring-1 ring-ink/10 transition-all duration-300"></button>'
      );
      dot.addEventListener("click", function () {
        goTo(index);
        restartAutoplay();
      });
      if (dotsWrap) dotsWrap.appendChild(dot);
      return dot;
    });

    function render() {
      slides.forEach(function (slide, index) {
        slide.classList.toggle("opacity-100", index === current);
        slide.classList.toggle("opacity-0", index !== current);
      });
      dots.forEach(function (dot, index) {
        dot.classList.toggle("w-6", index === current);
        dot.classList.toggle("bg-white", index === current);
        dot.classList.toggle("bg-white/60", index !== current);
      });
    }

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      render();
    }

    function next() {
      goTo(current + 1);
    }

    var timer = null;
    function restartAutoplay() {
      if (reduceMotion) return;
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(next, 5000);
    }

    render();
    restartAutoplay();

    root.addEventListener("mouseenter", function () {
      if (timer) window.clearInterval(timer);
    });
    root.addEventListener("mouseleave", restartAutoplay);
  }

  function init() {
    renderProjectCards();
    renderStoryCards();
    renderDetail();
    initThreeScenes();
    initHeroSlider();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
