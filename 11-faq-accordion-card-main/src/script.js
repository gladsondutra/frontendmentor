const question = document.querySelectorAll('.faq-question');
const arrow = document.querySelectorAll('.arrow-icon');
const title = document.querySelectorAll('.faq-question-title');
const answer = document.querySelectorAll('.faq-question-answer');

question.forEach((e) => {
  e.addEventListener('click', () => {
    e.childNodes[1].classList.toggle('active-title');
    e.childNodes[3].classList.toggle('active-arrow');
    e.childNodes[5].classList.toggle('active-answer');
  })
})