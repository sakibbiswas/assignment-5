// function common
function getinputfieldById(feildid) {
    const iputField = document.getElementById(feildid)
    const inputFieldvalueString = iputField.value;
    const inputFieldvalue = parseFloat(inputFieldvalueString)
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