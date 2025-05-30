(async function() {
  const params    = new URLSearchParams(location.search);
  const category  = params.get('category');
  const container = document.getElementById('quiz-container');
  const tracker   = document.getElementById('score-tracker');

  let questions = []
  try {
    const res = await fetch(`http://localhost:3000/${category}`);
    const data = await res.json();
    questions = data.map(q => ({
      question: q.Q,
      options: q.Options,
      answer:q.Answer
    }))
  } catch {
    container.innerHTML = `CODE MACHINE BROKE: ${err.message}</div>`
    return
  }

  // initialize
  let currentScore = 0;
  localStorage.setItem(`currentScore_${category}`, 0);
  tracker.textContent = `Score: ${currentScore}`;

  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `<p>${i+1}. ${q.question}</p>`;
    container.appendChild(div);

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;

      btn.addEventListener('click', () => {
        if (div.querySelector('.alert')) return;  // only first click

        // feedback
        const mark = document.createElement('div');
        mark.className = opt === q.answer ? 'alert green' : 'alert red';
        mark.textContent = opt === q.answer ? 'Correct!' : 'Incorrect';
        div.appendChild(mark);

        // update score if correct
        if (opt === q.answer) {
          currentScore++;
          localStorage.setItem(`currentScore_${category}`, currentScore);
          tracker.textContent = `Score: ${currentScore}`;
        }

        // disable further clicks on this question
        div.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
      });

      div.appendChild(btn);
    });
  });

  // submit
  const submit = document.createElement('button');
  submit.className = 'btn-round';
  submit.textContent = 'Submit';
  submit.addEventListener('click', () => {
    window.location.href =
      `results.html?score=${currentScore}&total=${questions.length}&category=${category}`;
  });
  container.appendChild(submit);
})();
