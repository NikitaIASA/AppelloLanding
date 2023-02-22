const windowEl = window;
const documentEl = document;
const htmlEl = document.documentElement;
const bodyEl = document.body;

const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll(".fixed-block");
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - bodyEl.offsetWidth}px`;

  htmlEl.style.scrollBehavior = "none";
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });
  bodyEl.style.paddingRight = paddingOffset;
  bodyEl.classList.add("dis-scroll");
  bodyEl.dataset.position = pagePosition;
  bodyEl.style.top = `-${pagePosition}px`;
};

const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll(".fixed-block");
  const body = document.body;
  const pagePosition = parseInt(bodyEl.dataset.position, 10);
  fixBlocks.forEach((el) => {
    el.style.paddingRight = "0px";
  });
  bodyEl.style.paddingRight = "0px";

  bodyEl.style.top = "auto";
  bodyEl.classList.remove("dis-scroll");
  window.scroll({
    top: pagePosition,
    left: 0,
  });
  bodyEl.removeAttribute("data-position");
  htmlEl.style.scrollBehavior = "smooth";
};

document.querySelectorAll(".accordion__header").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;
    let more = el.querySelector(".accordion__more");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      more.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      more.classList.add("active");
    }
  });
});

const burger = document?.querySelector("[data-burger]");
const menu = document?.querySelector("[data-menu]");
const menuItems = document?.querySelectorAll("[data-menu-item]");
const overlay = document?.querySelector("[data-menu-overlay]");
const closeBtn = document?.querySelector('[data-menu-close]');


burger?.addEventListener("click", (e) => {
  burger?.classList.toggle("burger--active");
  menu?.classList.toggle("menu--active");

  if (menu?.classList.contains("menu--active")) {
    burger?.setAttribute("aria-expanded", "true");
    burger?.setAttribute("aria-label", "Закрыть меню");
    disableScroll();
  } else {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    enableScroll();
  }
});

closeBtn?.addEventListener('click', () => {
  burger?.setAttribute('aria-expanded', 'false');
  burger?.setAttribute('aria-label', 'Открыть меню');
  burger.classList.remove('burger--active');
  menu.classList.remove('menu--active');
  enableScroll();
});

overlay?.addEventListener("click", () => {
  burger?.setAttribute("aria-expanded", "false");
  burger?.setAttribute("aria-label", "Открыть меню");
  burger.classList.remove("burger--active");
  menu.classList.remove("menu--active");
  enableScroll();
});

menuItems?.forEach((el) => {
  el.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    enableScroll();
  });
});
