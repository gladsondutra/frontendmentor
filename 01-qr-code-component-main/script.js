const toggleBtn = document.querySelector('.toggle-bg');

toggleBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  document.body.classList.toggle('darkTheme')
})