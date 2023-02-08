// accordion

document.querySelectorAll('.accordion__title').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      el.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      el.classList.add("active");
    }
  })
})
