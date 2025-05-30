// Navigate to quiz page when category clicked
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = `quiz.html?category=${btn.dataset.category}`;
  });
});
