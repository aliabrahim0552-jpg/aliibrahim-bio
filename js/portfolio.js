// Ali Al Ibrahim — Portfolio grid loader
//
// Projects are managed through the /admin studio (Decap CMS) and saved as
// markdown files with YAML frontmatter inside content/projects/ in this
// site's GitHub repository. This script reads that folder straight from
// GitHub (no build step / static site generator required) and renders it
// into the #portfolioGrid element on the page.
//
// -----------------------------------------------------------------------
// SETUP: after you connect this site to your own GitHub repository, edit
// the three values below to match it. See SETUP.md for the full walkthrough.
// -----------------------------------------------------------------------
var GITHUB_OWNER = "aliabrahim0552-jpg"; // e.g. "aliibrahim"
var GITHUB_REPO = "aliibrahim-bio";     // e.g. "aliibrahim-bio"
var GITHUB_BRANCH = "main";
var CONTENT_PATH = "content/projects";

(function () {
  "use strict";

  var grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  var API_LIST =
    "https://api.github.com/repos/" + GITHUB_OWNER + "/" + GITHUB_REPO +
    "/contents/" + CONTENT_PATH + "?ref=" + GITHUB_BRANCH;

  var lastProjects = [];

  function tr(key) {
    var lang = (window.SITE_I18N && window.SITE_I18N.getCurrent()) || "en";
    return window.SITE_I18N ? window.SITE_I18N.t(key, lang) : key;
  }

  fetchProjects()
    .then(function (projects) {
      lastProjects = projects;
      if (!projects.length) return renderEmpty();
      projects.sort(function (a, b) {
        return (b.date || "").localeCompare(a.date || "");
      });
      renderGrid(projects);
    })
    .catch(function () {
      renderEmpty();
    });

  // Re-render the grid/empty-state copy (and card link labels) when the
  // visitor switches language, without re-fetching from GitHub.
  document.addEventListener("sitelangchange", function () {
    if (lastProjects.length) renderGrid(lastProjects);
    else renderEmpty();
  });

  function fetchProjects() {
    // Not configured yet — skip the network round trip and show the empty state.
    if (GITHUB_OWNER === "your-github-username" || GITHUB_REPO === "your-repo-name") {
      return Promise.resolve([]);
    }

    return fetch(API_LIST, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (res) {
        if (!res.ok) throw new Error("no content folder yet");
        return res.json();
      })
      .then(function (files) {
        var mdFiles = files.filter(function (f) {
          return f.type === "file" && /\.md$/i.test(f.name);
        });
        return Promise.all(mdFiles.map(function (f) { return fetchOne(f.download_url); }));
      })
      .then(function (items) {
        return items.filter(Boolean);
      });
  }

  function fetchOne(url) {
    return fetch(url)
      .then(function (res) { return res.text(); })
      .then(parseFrontmatter)
      .catch(function () { return null; });
  }

  // Minimal frontmatter parser for the flat key: value fields this
  // project's CMS config produces. Not a general-purpose YAML parser.
  function parseFrontmatter(raw) {
    var parts = raw.split(/^---\s*$/m);
    if (parts.length < 3) return null;

    var data = {};
    parts[1].split("\n").forEach(function (line) {
      var m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
      if (!m) return;
      var key = m[1];
      var val = m[2].trim().replace(/^["']|["']$/g, "");
      data[key] = val;
    });

    data.body = parts.slice(2).join("---").trim();
    return data;
  }

  function renderGrid(projects) {
    var target = document.getElementById("portfolioGrid");
    if (!target) return;
    target.className = "portfolio-grid reveal in";
    target.innerHTML = projects.map(cardHTML).join("");
  }

  function cardHTML(p) {
    var title = escapeHTML(p.title || "Untitled project");
    var desc = escapeHTML((p.body || "").slice(0, 160));
    var date = p.date ? escapeHTML(p.date) : "";
    var thumb = p.image
      ? '<div class="work-thumb"><img src="' + escapeAttr(p.image) + '" alt="' + title + '" loading="lazy"></div>'
      : "";
    var links = "";
    if (p.link) links += '<a href="' + escapeAttr(p.link) + '" target="_blank" rel="noopener">' + escapeHTML(tr("work.link.view")) + "</a>";
    if (p.file) links += '<a href="' + escapeAttr(p.file) + '" target="_blank" rel="noopener">' + escapeHTML(tr("work.link.file")) + "</a>";

    return (
      '<article class="work-card">' +
        thumb +
        '<div class="work-body">' +
          (date ? '<span class="work-date">' + date + "</span>" : "") +
          "<h3>" + title + "</h3>" +
          (desc ? "<p>" + desc + "…</p>" : "") +
          (links ? '<div class="work-links">' + links + "</div>" : "") +
        "</div>" +
      "</article>"
    );
  }

  function renderEmpty() {
    var target = document.getElementById("portfolioGrid");
    if (!target) return;
    target.className = "portfolio-empty reveal in";
    target.innerHTML =
      '<span class="eyebrow">' + escapeHTML(tr("work.empty.eyebrow")) + "</span>" +
      "<h3>" + escapeHTML(tr("work.empty.h3")) + "</h3>" +
      "<p>" + escapeHTML(tr("work.empty.p")) + "</p>";
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function escapeAttr(str) { return escapeHTML(str); }
})();
