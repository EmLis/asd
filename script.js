var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log(double);

const mapArray = array.map((num) => num * 2);

console.log(mapArray);

const filter = array.filter((num) => {
  return num > 5;
});

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
