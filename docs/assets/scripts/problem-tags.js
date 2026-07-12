// Toggle the blur on `.ptag-topic` chips so students can choose to peek at
// the topic only after they've engaged with the statement. No state is
// persisted — every page load starts blurred again, which is intentional.

(function () {
  "use strict";

  function bind(root) {
    root.querySelectorAll(".ptag-topic:not([data-bound])").forEach(function (el) {
      el.dataset.bound = "1";
      el.addEventListener("click", function () {
        el.classList.toggle("revealed");
      });
      el.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          el.classList.toggle("revealed");
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { bind(document); });
  } else {
    bind(document);
  }

  // Material's instant-loading replaces page chunks; rebind on navigation.
  document.addEventListener("DOMContentSwitch", function () { bind(document); });
})();
