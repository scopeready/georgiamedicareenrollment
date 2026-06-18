/* ECOS Medicare Solutions — shared site behavior (no dependencies) */
(function () {
  // Stamp consent date/time (server also records receipt time).
  var ct = document.getElementById('consent_timestamp');
  if (ct) ct.value = new Date().toISOString();

  // Current year in footer.
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Gentle scroll reveal — skipped entirely when reduced motion is preferred.
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  var els = document.querySelectorAll('.section, .stat, .card');
  els.forEach(function (el) { el.classList.add('reveal'); });
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();
