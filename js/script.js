let upto = 90;
let counter = document.getElementById("counter");

let counts = setInterval(() => {
    upto++;
    counter.setAttribute("data-count", upto);
    counter.innerHTML = upto; 
    if (upto === 100) {
        clearInterval(counts);
    }
}, 10);


function increase() {
  // Change the variable to modify the speed of the number increasing from 0 to (ms)
  let SPEED = 40;
  // Retrieve the percentage value
  let limit = parseInt(document.getElementById("value1").innerHTML, 10);

  for(let i = 0; i <= limit; i++) {
      setTimeout(function () {
          document.getElementById("value1").innerHTML = i + "%";
      }, SPEED * i);
  }
}

increase();

