// Show stored best scores on homepage
document.addEventListener('DOMContentLoaded', () => {
  const scores = JSON.parse(localStorage.getItem('scores') || '{}');
  document.querySelectorAll('.category-btn').forEach(btn => {
    const cat = btn.dataset.category;
    if (scores[cat] != null) {
      const span = document.createElement('span');
      span.className = 'score-badge';
      span.textContent = `Score: ${scores[cat]}`;
      btn.after(span);
    }
  });
});

document.getElementById("recommend-btn").onclick = () => {
  window.location.href="recommend.html";
};