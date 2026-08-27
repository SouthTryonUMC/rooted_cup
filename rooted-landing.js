/* rooted. landing — the only script on the page.
   Three jobs: the roast gauge, the scroll reveals, the form submit.
   Nothing else belongs in here. */
(function () {
  document.documentElement.classList.add('js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* The gauge. Sections carry data-stage and data-temp; the rail and the
     mobile chip read whichever stage holds the middle of the viewport. */
  var stages = [].slice.call(document.querySelectorAll('.stage'));
  var railTemp = document.getElementById('railTemp');
  var railStage = document.getElementById('railStage');
  var chipText = document.getElementById('chipText');
  var nodes = [].slice.call(document.querySelectorAll('.rail-node'));
  if ('IntersectionObserver' in window && stages.length) {
    var gio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) { return; }
        var i = stages.indexOf(e.target);
        var t = e.target.getAttribute('data-temp');
        var s = e.target.getAttribute('data-stage');
        var temp = t === '-' ? '—' : t + '°';
        if (railTemp) { railTemp.textContent = temp; }
        if (railStage) { railStage.textContent = s; }
        if (chipText) { chipText.textContent = s + ' · ' + temp; }
        nodes.forEach(function (n, j) { n.classList.toggle('on', j === i); });
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    stages.forEach(function (s) { gio.observe(s); });
  }

  /* Scroll reveals. */
  if (!reduced && 'IntersectionObserver' in window) {
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { rio.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* The form: post to Netlify in place, answer in place.
     With JS off it posts normally and Netlify shows its own page. */
  var form = document.getElementById('capture');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var btn = document.getElementById('sendBtn');
      var msg = document.getElementById('msg');
      btn.disabled = true; btn.textContent = 'Sending';
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (res) {
        if (!res.ok) { throw new Error(res.status); }
        form.reset(); btn.style.display = 'none';
        msg.className = 'msg on';
        msg.textContent = 'Got it. We’ll be in touch, usually within a couple of days.';
      }).catch(function () {
        btn.disabled = false; btn.textContent = 'Send it';
        msg.className = 'msg on';
        msg.innerHTML = 'That didn’t send. Email <a href="mailto:darryl@rootedclt.org">darryl@rootedclt.org</a> or call <a href="tel:+19807854280">(980) 785-4280</a>.';
      });
    });
  }
})();
