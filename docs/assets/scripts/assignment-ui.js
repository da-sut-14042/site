(function () {
  "use strict";

  function stringsForPage(root) {
    const source = root.querySelector("#assignment-ui-strings");
    if (!source) return null;
    try {
      return JSON.parse(source.textContent);
    } catch (_error) {
      return null;
    }
  }

  function setProblemVisible(heading, visible) {
    heading.hidden = !visible;
    const previous = heading.previousElementSibling;
    if (previous && previous.matches("hr.problem-break")) previous.hidden = !visible;

    let element = heading.nextElementSibling;
    while (element && !element.matches("h2")) {
      element.hidden = !visible;
      element = element.nextElementSibling;
    }
  }

  function buildFilter(controls, strings) {
    controls.classList.add("assignment-problem-filter");

    const label = document.createElement("span");
    label.textContent = strings.filter_label;
    controls.appendChild(label);

    [["all", strings.all_problems], ["deliverable", strings.deliverable_problems]].forEach(
      function (entry, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.filterMode = entry[0];
        button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
        button.textContent = entry[1];
        controls.appendChild(button);
      }
    );
  }

  function bindFilter(root, strings) {
    const controls = root.querySelector("[data-assignment-problem-filter]");
    if (!controls || controls.dataset.bound) return;
    controls.dataset.bound = "1";
    buildFilter(controls, strings);

    const problems = Array.from(root.querySelectorAll("h2.problem"));
    controls.addEventListener("click", function (event) {
      const button = event.target.closest("[data-filter-mode]");
      if (!button) return;
      const mode = button.dataset.filterMode || "all";

      controls.querySelectorAll("[data-filter-mode]").forEach(function (candidate) {
        candidate.setAttribute("aria-pressed", candidate.dataset.filterMode === mode ? "true" : "false");
      });
      problems.forEach(function (heading) {
        setProblemVisible(
          heading,
          mode !== "deliverable" || heading.classList.contains("problem-deliverable")
        );
      });
    });
  }

  function localize(root, strings) {
    root.querySelectorAll("[data-ui-string]").forEach(function (element) {
      const value = strings[element.dataset.uiString];
      if (value) element.textContent = value;
    });
    root.querySelectorAll("[data-ui-aria-label]").forEach(function (element) {
      const value = strings[element.dataset.uiAriaLabel];
      if (value) element.setAttribute("aria-label", value);
    });
  }

  function init() {
    const root = document.querySelector(".md-content") || document;
    const strings = stringsForPage(root);
    if (!strings) return;
    localize(root, strings);
    bindFilter(root, strings);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  document.addEventListener("DOMContentSwitch", init);
})();
