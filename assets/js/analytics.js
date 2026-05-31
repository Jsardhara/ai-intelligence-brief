// Track page views and CTA clicks
(function() {
  // Simple localStorage-based analytics
  const data = JSON.parse(localStorage.getItem('analytics') || '{"views":0,"clicks":[]}');
  data.views++;
  data.lastVisit = new Date().toISOString();
  localStorage.setItem('analytics', JSON.stringify(data));

  // Track CTA clicks
  document.querySelectorAll('a[href*="stripe"]').forEach(link => {
    link.addEventListener('click', () => {
      const clicks = JSON.parse(localStorage.getItem('cta_clicks') || '[]');
      clicks.push({url: link.href, time: new Date().toISOString()});
      localStorage.setItem('cta_clicks', JSON.stringify(clicks));
    });
  });
})();
