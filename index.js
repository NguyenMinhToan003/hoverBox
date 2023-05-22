const body = document.querySelector("body");
const container = document.querySelector(".container");
let squares;
for (let i = 0; i < 209; i++) {
  let randomCl = randomColor();
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  square.addEventListener("mouseenter", (e) => {
    e.target.style.background = `${randomCl}`;
    e.target.style.boxShadow = `0 0 10px 0   ${randomCl}, 0 0 50px ${randomCl}, 0 0 5px ${randomCl}`;
  });
  square.addEventListener("mouseleave", (e) => {
    e.target.style.background = "#1d1d1d";
    e.target.style.boxShadow = "0 0 3px black";
  });
}
function randomColor() {
  const colorString = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorString[Math.floor(Math.random() * colorString.length)];
  }
  return color;
}

body.addEventListener("mouseenter", (e) => {
  squares = [...document.querySelectorAll(".square")];
  let i = 0;
  setInterval(function () {
    if (i >= squares.length) i = 0;
    else {
      let randomCl = randomColor();
      squares[i].style.background = `${randomCl}`;
      squares[
        i
      ].style.boxShadow = `0 0 10px 0   ${randomCl}, 0 0 50px ${randomCl}, 0 0 5px ${randomCl}`;
      i++;
    }
    if (i >= 7) {
      squares[i - 7].style.background = "#1d1d1d";
      squares[i - 7].style.boxShadow = "0 0 3px black";
    }
  }, 100);
});
