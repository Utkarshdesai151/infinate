var $circle = $('.circle');

function moveCircle(e) {
	TweenLite.to($circle, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}
$(window).on('mousemove', moveCircle);
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
function followCursor(event, button) {
  const rect = button.getBoundingClientRect();
  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2; 
  const diffX = event.clientX - buttonX;
  const diffY = event.clientY - buttonY;
  const moveX = diffX * 0.2;
  const moveY = diffY * 0.2;
  button.style.transform = `translate(${moveX}px, ${moveY}px)`;
}
btn1.addEventListener("mousemove", (event) => followCursor(event, btn1));
btn1.addEventListener("mouseleave", () => {
  btn1.style.transform = "translate(0, 0)"; 
});
btn2.addEventListener("mousemove", (event) => followCursor(event, btn2));
btn2.addEventListener("mouseleave", () => {
  btn2.style.transform = "translate(0, 0)"; 
});

//accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(button => {
      button.addEventListener("click", function () {
          const target = document.querySelector(this.getAttribute("data-target"));

          const allCollapses = document.querySelectorAll(".accordion-collapse");
          allCollapses.forEach(collapse => {
              if (collapse !== target) {
                  collapse.classList.remove("show");
              }
          });

         
          target.classList.toggle("show");

         
          this.classList.toggle("collapsed");
      });
  });
});

corsole

const list = document.querySelector('.list');
let isDown = false;
let startX;
let scrollLeft;

list.addEventListener('mousedown', (e) => {
  isDown = true;
  list.classList.add('active');
  startX = e.pageX - list.offsetLeft;
  scrollLeft = list.scrollLeft;
});

list.addEventListener('mouseleave', () => {
  isDown = false;
  list.classList.remove('active');
});

list.addEventListener('mouseup', () => {
  isDown = false;
  list.classList.remove('active');
});

list.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - list.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  list.scrollLeft = scrollLeft - walk;
});
