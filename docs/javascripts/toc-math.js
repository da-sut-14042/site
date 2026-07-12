// Make math show up in generated UI text that MkDocs/MkDocs-Material keeps
// as plain text instead of running through pymdownx.arithmatex.
//
// MkDocs-Material extracts heading text as plain text for both sidebars, so a
// heading like `سوال ۵ — حذف \(k\) رقم` lands in the DOM as the literal
// string `\(k\)`. Our MathJax config has `processHtmlClass: "arithmatex"`
// plus `ignoreHtmlClass: ".*|"`, which means MathJax only typesets nodes
// that are explicitly tagged. Admonition/details titles have the same
// problem when their title text contains math.
//
// Important: we only tag `.md-ellipsis` (the leaf-most text container that
// both the left nav and the right TOC use). Tagging both `.md-nav__link`
// and the nested `.md-ellipsis` causes MathJax to process the same math
// twice — once via the parent root and once via the child — producing
// visibly duplicated output.
//
// Re-runs on every page swap (Material instant-loading) and after MathJax
// startup completes, so the order of MathJax-loaded vs. DOM-ready doesn't
// matter.

(function () {
  "use strict";

  // Anything containing one of these substrings is treated as math-bearing.
  // Note: `$` alone is too generic (prices, names) — we require at least one
  // recognised delimiter pair somewhere in the string.
  function hasMath(text) {
    if (!text) return false;
    if (text.indexOf("\\(") !== -1 && text.indexOf("\\)") !== -1) return true;
    if (text.indexOf("\\[") !== -1 && text.indexOf("\\]") !== -1) return true;
    if (text.indexOf("$$") !== -1 && text.lastIndexOf("$$") !== text.indexOf("$$")) return true;
    // Single-dollar pair on the same string, ignoring escaped \$.
    var stripped = text.replace(/\\\$/g, "");
    var dollars = (stripped.match(/\$/g) || []).length;
    if (dollars >= 2) return true;
    return false;
  }

  function tag(root) {
    var tagged = [];
    var nodes = root.querySelectorAll(
      ".md-ellipsis, .md-typeset .admonition-title, .md-typeset details > summary"
    );
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.dataset.tocMathBound) continue;
      if (!hasMath(el.textContent)) continue;
      el.dataset.tocMathBound = "1";
      el.classList.add("arithmatex");
      tagged.push(el);
    }
    return tagged;
  }

  function typeset(nodes) {
    if (!nodes.length) return;
    var mj = window.MathJax;
    if (!mj || !mj.typesetPromise) return;
    // Clear any prior rendering so we don't end up with two copies if
    // MathJax's auto-typeset already processed these elements during its
    // initial body sweep.
    if (mj.typesetClear) {
      try { mj.typesetClear(nodes); } catch (_) {}
    }
    mj.typesetPromise(nodes).catch(function () {});
  }

  function run() {
    var nodes = tag(document);
    if (!nodes.length) return;
    if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
      window.MathJax.startup.promise.then(function () { typeset(nodes); });
    } else {
      // MathJax script not loaded yet — give it a beat. The script tag
      // order in extra_javascript means this rarely fires.
      setTimeout(function () { typeset(nodes); }, 200);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  // Material's instant-loading swaps content without a full page load.
  document.addEventListener("DOMContentSwitch", run);
})();
