// MathJax v3 config used by both the published student site and the inline
// editor preview (which loads MathJax on demand). Keep this file dependency-
// free and small — it must be parsed before mathjax itself.

window.MathJax = {
  tex: {
    inlineMath:  [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    enableMenu: false,
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
};
