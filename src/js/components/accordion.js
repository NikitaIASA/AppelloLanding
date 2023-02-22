document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs");
  const tabsBtn = document.querySelectorAll(".options__item");
  const tabsContent = document.querySelectorAll(".cards");

  if (tabs) {
    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("options__item")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsBtn.forEach((el) => {
      el.classList.remove("options__item--active");
    });
    document
      .querySelector(`[data-tabs-path="${path}"]`)
      .classList.add(`options__item--active`);

    tabsContent.forEach((el) => {
      el.classList.remove("cards--active");
    });
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add("cards--active");
  };
})
