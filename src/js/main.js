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
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 7,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.options__item');
  const tabsContent = document.querySelectorAll('.cards');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('options__item')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsBtn.forEach(el => {el.classList.remove('options__item--active')});
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add(`options__item--active`);

    tabsContent.forEach(el => {el.classList.remove('cards--active')});
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('cards--active');
  }
})
