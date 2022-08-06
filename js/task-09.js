function andogetRmHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const color = document.querySelector('.color')
const button = document.querySelector('.change-color')

button.addEventListener('click', onButtonClick)

function onButtonClick(evt) {
  const newColor = andogetRmHexColor()
  body.style.backgroundColor = newColor
  color.textContent = newColor

}
