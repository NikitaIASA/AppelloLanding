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

const swiper = new Swiper('.swiper', {
  slidesPerView: 7,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
