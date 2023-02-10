// accordion

document.querySelectorAll('.accordion__header').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    let more = el.querySelector('.accordion__more');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      more.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      more.classList.add("active");
    }
  })
})
