/* Ahmed Lashari - Portfolio Interactions */
(function () {
  "use strict";

  /* ---------- Dynamic Copyright Year ---------- */
  var yr = document.getElementById("year");
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }

  /* ---------- Print / Save PDF Action ---------- */
  var printBtn = document.getElementById("print-btn");
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }

  /* ---------- Smooth Internal Anchor Navigation ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
})();
