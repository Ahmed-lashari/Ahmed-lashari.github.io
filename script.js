/* Muhammad Ahmed Lashari, Founder Site Interactions */
(function () {
  "use strict";

  /* ---------- Dynamic Copyright Year ---------- */
  var yr = document.getElementById("year");
  if (yr) {
    yr.textContent = new Date().getFullYear();
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

  /* ---------- Scroll-triggered Fade-in ---------- */
  var fadeEls = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Fallback: show everything immediately */
    fadeEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
