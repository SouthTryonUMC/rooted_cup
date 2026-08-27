/* rooted. — the only script on the site.
   Three jobs: scroll reveals, Netlify form submits with an inline thank-you,
   and lazy start for the one video. Nothing else belongs in here. */
(function () {
  document.documentElement.classList.add('js');

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scroll reveals, only on elements already marked .reveal in the HTML. */
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* Netlify forms: post in place, swap to the thank-you block.
     With JS off, the form posts normally and Netlify shows its own page. */
  document.querySelectorAll('form[data-netlify]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; }
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (res) {
        if (!res.ok) { throw new Error(res.status); }
        var done = document.getElementById(form.getAttribute('data-done'));
        if (done) { form.hidden = true; done.hidden = false; done.setAttribute('tabindex', '-1'); done.focus(); }
      }).catch(function () {
        if (btn) { btn.disabled = false; }
        var err = form.querySelector('.form-note');
        if (err) {
          err.textContent = 'That didn’t go through. Email us instead: darryl@rootedclt.org';
        }
      });
    });
  });

  /* The one video: load and play only when it is near the viewport,
     and never under reduced motion (the poster stands in). */
  var vid = document.querySelector('.media-slot video');
  if (vid) {
    if (reduced) {
      vid.removeAttribute('autoplay');
    } else if ('IntersectionObserver' in window) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            if (vid.dataset.src && !vid.querySelector('source')) {
              var s = document.createElement('source');
              s.src = vid.dataset.src; s.type = 'video/mp4';
              vid.appendChild(s); vid.load();
            }
            vid.play().catch(function () {});
            vio.unobserve(vid);
          }
        });
      }, { rootMargin: '200px' });
      vio.observe(vid);
    }
  }
})();
