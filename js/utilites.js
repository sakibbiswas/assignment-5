

// function common
function getinputfieldById(feildid) {
    const iputField = document.getElementById(feildid)
    const inputFieldvalueString = iputField.value;
    const inputFieldvalue = parseFloat(inputFieldvalueString)
    iputField.value = '';
    return inputFieldvalue;
}

function getTextvalueById(TextId) {
    const TextElement = document.getElementById(TextId)
    const TextElementvaluestring = TextElement.innerText
    const TextElementvalue = parseFloat(TextElementvaluestring)
    return TextElementvalue;
    
}

function setElemenTextById(elementId, newvalue) {
    const element = document.getElementById(elementId);
    element.innerText = newvalue;
}

// card effect
const background = document.getElementById("background");
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};
const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};
const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  background.style.color = randomColor;
};
setBackgroundColor();
setInterval(() => {
  setBackgroundColor();
}, 1500);
