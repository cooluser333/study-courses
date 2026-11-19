(function () {
  "use strict";
  var L = window.LESSONS, M = window.MODULES, S = window.SOURCES;
  var KEY = "weldcourse.progress.v1", TKEY = "weldcourse.theme";
  var main = document.getElementById("main"), side = document.getElementById("sidebar");

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  var prog = load();
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function totalQ() { return L.reduce(function (n, l) { return n + l.quiz.length; }, 0); }
  function doneCount() { return L.filter(function (l) { return prog[l.id] && prog[l.id].done; }).length; }

  /* Theme */
  var saved = null; try { saved = localStorage.getItem(TKEY); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (prefersDark ? "dark" : "light"));
  function setTheme(t) { document.documentElement.setAttribute("data-theme", t); try { localStorage.setItem(TKEY, t); } catch (e) {} }
  document.getElementById("themeBtn").onclick = function () { setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"); };
  document.getElementById("printBtn").onclick = function () { window.print(); };
  var menuBtn = document.getElementById("menuBtn");
  menuBtn.onclick = function () { var o = side.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); };

  /* Sidebar */
  function renderSide(cur) {
    var pct = Math.round(100 * doneCount() / L.length);
    var h = '<div class="card" style="margin-top:0"><strong>Your progress</strong><div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '" aria-label="Course progress"><span style="width:' + pct + '%"></span></div><span class="meta">' + doneCount() + ' of ' + L.length + ' lessons complete (' + pct + '%)</span></div>';
    h += '<ul><li><a href="#/"' + (cur === "home" ? ' aria-current="page"' : "") + '>Course home</a></li></ul>';
    M.forEach(function (m) {
      h += "<h2>" + esc(m.title) + "</h2><ul>";
      L.filter(function (l) { return l.module === m.id; }).forEach(function (l) {
        var d = prog[l.id] && prog[l.id].done;
        h += '<li><a href="#/lesson/' + l.id + '"' + (cur === l.id ? ' aria-current="page"' : "") + "><span>" + esc(l.title) + "</span>" + (d ? '<span class="done-mark" aria-label="completed">✓</span>' : "") + "</a></li>";
      });
      h += "</ul>";
    });
    h += '<h2>Reference</h2><ul><li><a href="#/glossary"' + (cur === "glossary" ? ' aria-current="page"' : "") + '>Glossary</a></li><li><a href="#/sources"' + (cur === "sources" ? ' aria-current="page"' : "") + '>All sources</a></li><li><a href="#/print"' + (cur === "print" ? ' aria-current="page"' : "") + '>Printable full course</a></li></ul>';
    side.innerHTML = h;
  }

  function sourceList(ids) {
    return '<ol class="sources">' + ids.map(function (id) { var s = S[id]; return s ? '<li>' + esc(s.org) + ' — <a href="' + s.url + '" target="_blank" rel="noopener">' + esc(s.title) + '</a><br><small>' + esc(s.url) + '</small></li>' : ""; }).join("") + "</ol>";
  }

  /* Pages */
  function home() {
    var mins = L.reduce(function (n, l) { return n + l.minutes; }, 0);
    var h = '<p class="meta">Open study course · ' + L.length + ' lessons · ' + totalQ() + ' quiz questions · about ' + Math.round(mins / 60 * 10) / 10 + ' hours of reading</p>';
    h += "<h1>Weld Fundamentals</h1><p>A free, college-level study course on the knowledge side of welding: safety law and practice, the major arc and oxy-fuel processes, metallurgy, joints and positions, weld symbols, filler-metal classification, equipment, inspection, and the path to AWS certification. Every lesson cites the regulations, standards bodies and manufacturer resources it draws on.</p>";
    h += '<div class="callout warn"><strong>Read this first:</strong> This course teaches theory. It does not replace supervised, hands-on training. Never strike an arc without proper PPE, ventilation, and someone qualified to show you the equipment. Standards such as AWS D1.1, A5.1, A2.4 and ANSI Z49.1 are updated periodically. Always check the current edition.</div>';
    var next = L.find(function (l) { return !(prog[l.id] && prog[l.id].done); });
    h += '<div class="row no-print">' + (next ? '<a class="btn" href="#/lesson/' + next.id + '">' + (doneCount() ? "Continue: " : "Start: ") + esc(next.title) + "</a>" : '<span class="btn">Course complete 🎉</span>') + ' <button class="btn secondary" id="resetBtn">Reset progress</button></div>';
    M.forEach(function (m) {
      h += "<h3>" + esc(m.title) + '</h3><div class="grid">';
      L.filter(function (l) { return l.module === m.id; }).forEach(function (l) {
        var p = prog[l.id] || {};
        h += '<div class="card"><a href="#/lesson/' + l.id + '"><strong>' + esc(l.title) + '</strong></a><div class="meta">' + l.minutes + " min · " + l.quiz.length + " questions" + (p.done ? " · ✓ best " + p.best + "/" + l.quiz.length : "") + "</div></div>";
      });
      h += "</div>";
    });
    main.innerHTML = h;
    document.getElementById("resetBtn").onclick = function () { if (confirm("Reset all progress and quiz scores?")) { prog = {}; save(prog); route(); } };
  }

  function lessonHTML(l, printMode) {
    var h = '<p class="meta">' + esc((M.find(function (m) { return m.id === l.module; }) || {}).title || "") + " · " + l.minutes + " min</p><h1>" + esc(l.title) + "</h1>";
    h += '<div class="card objectives"><strong>Learning objectives</strong>: by the end of this lesson you should be able to:<ul>' + l.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></div>";
    h += '<article class="lesson-body">' + l.body + "</article>";
    h += '<h3>Key terms</h3><dl class="terms">' + l.terms.map(function (t) { return "<dt>" + esc(t[0]) + "</dt><dd>" + esc(t[1]) + "</dd>"; }).join("") + "</dl>";
    h += '<h3>Self-check quiz</h3><form class="quiz" data-id="' + l.id + '">';
    l.quiz.forEach(function (q, i) {
      h += '<fieldset><legend>' + (i + 1) + ". " + esc(q.q) + "</legend>";
      q.o.forEach(function (o, j) { h += '<label><input type="radio" name="q' + i + '" value="' + j + '"> ' + esc(o) + "</label>"; });
      h += '<div class="fb" id="' + (printMode ? "p" : "") + "fb-" + l.id + "-" + i + '" aria-live="polite"></div><div class="answer-key">Answer: ' + esc(q.o[q.a]) + " — " + esc(q.why) + "</div></fieldset>";
    });
    if (!printMode) h += '<div class="row"><button class="btn" type="submit">Check answers</button><span class="meta" id="score"></span></div>';
    h += "</form>";
    h += "<h3>Sources</h3>" + sourceList(l.sources);
    return h;
  }

  function lesson(id) {
    var i = L.findIndex(function (l) { return l.id === id; });
    if (i < 0) return notFound();
    var l = L[i], prev = L[i - 1], next = L[i + 1];
    var h = lessonHTML(l, false);
    h += '<nav class="pager" aria-label="Lesson pagination">' + (prev ? '<a href="#/lesson/' + prev.id + '">← ' + esc(prev.title) + "</a>" : "<span></span>") + (next ? '<a href="#/lesson/' + next.id + '">' + esc(next.title) + " →</a>" : '<a href="#/glossary">Glossary →</a>') + "</nav>";
    main.innerHTML = h;
    var form = main.querySelector("form.quiz");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var score = 0;
      l.quiz.forEach(function (q, qi) {
        var sel = form.querySelector('input[name="q' + qi + '"]:checked');
        var fb = document.getElementById("fb-" + l.id + "-" + qi);
        if (!sel) { fb.className = "fb bad"; fb.textContent = "No answer selected. " + "Correct: " + q.o[q.a] + ". " + q.why; return; }
        var ok = +sel.value === q.a; if (ok) score++;
        fb.className = "fb " + (ok ? "ok" : "bad");
        fb.textContent = (ok ? "✓ Correct. " : "✗ Not quite. Correct answer: " + q.o[q.a] + ". ") + q.why;
      });
      var pass = score / l.quiz.length >= 0.8;
      var p = prog[l.id] || {}; p.best = Math.max(p.best || 0, score); if (pass) p.done = true; prog[l.id] = p; save(prog);
      document.getElementById("score").textContent = "Score: " + score + "/" + l.quiz.length + (pass ? ". Lesson marked complete." : ". 80% marks the lesson complete. Review and try again.");
      renderSide(l.id);
    });
  }

  function glossary() {
    var all = [];
    L.forEach(function (l) { l.terms.forEach(function (t) { all.push({ t: t[0], d: t[1], l: l }); }); });
    all.sort(function (a, b) { return a.t.localeCompare(b.t); });
    var h = "<h1>Glossary</h1><p class=\"meta\">" + all.length + " terms collected from every lesson.</p><dl class=\"terms\">";
    all.forEach(function (x) { h += "<dt id=\"g-" + esc(x.t.replace(/\W+/g, "-")) + "\">" + esc(x.t) + '</dt><dd>' + esc(x.d) + ' <a href="#/lesson/' + x.l.id + '">(' + esc(x.l.title.split(" ")[0]) + ")</a></dd>"; });
    main.innerHTML = h + "</dl>";
  }

  function sources() {
    var h = "<h1>All sources</h1><p>Every source below was opened and checked when this course was written. Each lesson lists the subset it relies on. The standards themselves (AWS D1.1, A2.4, A5.x, ANSI Z49.1) are copyrighted AWS documents. Consult the current editions directly.</p>";
    main.innerHTML = h + sourceList(Object.keys(S));
  }

  function printAll() {
    main.innerHTML = '<p class="no-print"><button class="btn" onclick="window.print()">Print / Save as PDF</button> Answer keys appear in the printed version.</p><h1>Weld Fundamentals: Full Course</h1>' + L.map(function (l) { return '<section style="break-before:page">' + lessonHTML(l, true) + "</section>"; }).join("");
  }

  function search(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    var h = "<h1>Search: " + esc(q) + "</h1>";
    if (!terms.length) { main.innerHTML = h + "<p>Type a search term.</p>"; return; }
    var res = [];
    L.forEach(function (l) {
      var tmp = document.createElement("div"); tmp.innerHTML = l.body;
      var text = l.title + " " + l.objectives.join(" ") + " " + (tmp.textContent || "") + " " + l.terms.map(function (t) { return t.join(" "); }).join(" ") + " " + l.quiz.map(function (x) { return x.q + " " + x.why; }).join(" ");
      var low = text.toLowerCase();
      if (terms.every(function (t) { return low.indexOf(t) >= 0; })) {
        var score = terms.reduce(function (n, t) { return n + low.split(t).length - 1; }, 0);
        var idx = low.indexOf(terms[0]), snip = text.substring(Math.max(0, idx - 80), idx + 160).replace(/\s+/g, " ");
        res.push({ l: l, score: score, snip: snip });
      }
    });
    res.sort(function (a, b) { return b.score - a.score; });
    var hl = function (s) { var out = esc(s); terms.forEach(function (t) { out = out.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); }); return out; };
    h += '<p class="meta">' + res.length + " lesson(s) found.</p>";
    res.forEach(function (r) { h += '<div class="result"><a href="#/lesson/' + r.l.id + '"><strong>' + esc(r.l.title) + "</strong></a><div>…" + hl(r.snip) + "…</div></div>"; });
    main.innerHTML = h;
  }

  function notFound() { main.innerHTML = '<h1>Page not found</h1><p><a href="#/">Back to the course home</a></p>'; }

  function route() {
    var hash = location.hash.replace(/^#/, "") || "/";
    var parts = hash.split("/").filter(Boolean), cur = "home";
    if (!parts.length) home();
    else if (parts[0] === "lesson") { cur = parts[1]; lesson(parts[1]); }
    else if (parts[0] === "glossary") { cur = "glossary"; glossary(); }
    else if (parts[0] === "sources") { cur = "sources"; sources(); }
    else if (parts[0] === "print") { cur = "print"; printAll(); }
    else if (parts[0] === "search") { cur = ""; search(decodeURIComponent(parts.slice(1).join("/"))); }
    else notFound();
    renderSide(cur);
    side.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false");
    if (parts[0] !== "search") { window.scrollTo(0, 0); main.focus({ preventScroll: true }); }
    var t = main.querySelector("h1"); document.title = (t ? t.textContent + " · " : "") + "Weld Fundamentals";
  }

  var st, sInput = document.getElementById("search");
  sInput.addEventListener("input", function () { clearTimeout(st); st = setTimeout(function () { location.hash = "#/search/" + encodeURIComponent(sInput.value.trim()); }, 250); });
  window.addEventListener("hashchange", route);
  route();
})();
