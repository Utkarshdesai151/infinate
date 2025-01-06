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