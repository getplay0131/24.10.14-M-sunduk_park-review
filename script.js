document.addEventListener("DOMContentLoaded", () => {
  // dom 요소 참조
  const burger = document.querySelector("#burger");
  const xIcons = document.querySelector("#xIcon");
  const navEle = document.querySelector("nav");
  const navInA = document.querySelectorAll("nav ul a");
  const scroll = document.querySelector("#endText span");

  function toggleClass() {
    navEle.classList.toggle("active");
    if (navEle.classList.contains("active")) {
      burger.style.opacity = 0;
      xIcons.style.opacity = 1;
    } else {
      burger.style.opacity = 1;
      xIcons.style.opacity = 0;
    }
  }

  function navInAEvent() {
    navInA.forEach((el) => {
      el.addEventListener("click", () => {
        navEle.classList.remove("active");
        burger.style.opacity = 1;
        xIcons.style.opacity = 0;
      });
    });
  }

  //   이벤트 리스너 구역
  burger.addEventListener("click", toggleClass);
  xIcons.addEventListener("click", toggleClass);
  scroll.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  navInAEvent();
  // end ---------------------------
});
