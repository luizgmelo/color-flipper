const body = document.querySelector("body")
const color = document.querySelector("#color")

function changeColor() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = '#' + randomColor
  color.textContent = '#' + randomColor
}


const btClick = document.querySelector("#btClickMe")
btClick.addEventListener("click", changeColor)
