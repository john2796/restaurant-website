const nav = document.querySelector('nav');
const navAtag = document.querySelectorAll('nav a');


let last_known_scroll_position = 0;
let isPassed = false;

function doSomething(scroll_pos) {
  if (scroll_pos.toFixed(2) > 741.11) {
    nav.classList.add('nav_class');
    navAtag.forEach((anchor) => {
      anchor.classList.add('anchor_class')
    })
  } else {
    nav.classList.remove('nav_class');
  }
}
window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;
  if (!isPassed) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      isPassed = false;
    });
    isPassed = true;
  }
});
