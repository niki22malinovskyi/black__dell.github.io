const dropdown = document.querySelectorAll(".language");

dropdown.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
});

const clickMenu = document.querySelector(".menu-btn");
const menuList = document.querySelector(".header__menu");

clickMenu.addEventListener("click", () => {
  clickMenu.classList.toggle("active");
  menuList.classList.toggle("active");
  document.body.classList.toggle("fix");
});

const page_preloader = document.querySelector(".preloader");
setTimeout(function () {
  page_preloader.style.zIndex = "-1";
  page_preloader.style.opacity = "0";
}, 2500);

const bublleAnim = document.querySelectorAll(".bublle");

window.addEventListener("scroll", translateBublle);

function translateBublle() {
  bublleAnim.forEach((bublle) => {
    const scrollWindow = window.scrollY;
    const dy = -scrollWindow;
    const dx = 0;
    const windowHeight = window.innerHeight;
    const animItemHeight = bublle.offsetHeight;
    const animItemOffset = offset(bublle).top;
    const dz = bublle.getAttribute('data-distance');

    if (
      scrollWindow + windowHeight >
      (animItemOffset - animItemHeight) / animItemHeight
    ) {
      bublle.style.transform = 'translate(' + dx + 'px, ' + dy/dz + 'px)';
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  });
}

translateBublle();




let arr = [1,2,3,4,5,6,7,8,9,10];



