// Paris time in the top-right corner, like a studio clock
(function(){
  const els = document.querySelectorAll('[data-clock]');
  const fmt = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'Europe/Paris' });
  function tick(){ const t = fmt.format(new Date()) + ' Paris'; els.forEach(e => e.textContent = t); }
  tick(); setInterval(tick, 15000);
})();
