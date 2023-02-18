// function getinputfieldById(feildid) {
//     const iputField = document.getElementById(feildid)
//     const inputFieldvalueString = iputField.value;
//     const inputFieldvalue = parseFloat(inputFieldvalueString)
//     return inputFieldvalue;
// }
// function getTextvalueById(TextId) {
//     const TextElement = document.getElementById(TextId)
//     const TextElementvaluestring = TextElement.innerText
//     const TextElementvalue = parseFloat(TextElementvaluestring)
//     return TextElementvalue;
    
// }

// function setElemenTextById(elementId, newvalue) {
//     const element = document.getElementById(elementId);
//     element.innerText = newvalue;
// }

// Triangle js
document.getElementById('triangle-calc').addEventListener('click', function () {
   

    const baseField = getinputfieldById('base-field')
    const heightField = getinputfieldById('height-field')
    // const newArea = 0.5 * baseFieldvalue * heightFieldvalue
    const newArea = 0.5 * baseField * heightField;
    const Element = getTextvalueById('total-Area')
    setElemenTextById('total-Area', newArea)
})
// Ractangle js
document.getElementById('rectangle-calc').addEventListener('click', function () {
    const widthfield=getinputfieldById('width-field')
    const lengthfield = getinputfieldById('length-field')
    const currentArea = widthfield * lengthfield;
    const rectangle = getTextvalueById('total-ractangle')
    setElemenTextById('total-ractangle',currentArea)
})

// Parallelogram js
document.getElementById('Parallelogram-calc').addEventListener('click', function () {
    const ParallelogramArea = 10 * 12;
    const Parallelogram = getTextvalueById('total-Parallelogram')
    setElemenTextById('total-Parallelogram', ParallelogramArea)
});
// Rhombus js
document.getElementById('Rhombus-calc').addEventListener('click',function () {
    const RhombusArea = 0.5 * 16 * 8;
    const Rhombus = getTextvalueById('total-Rhombus')
    setElemenTextById('total-Rhombus',RhombusArea)
})

// Pentagon js
// document.getElementById('Pentagon-calc').addEventListener('click', function () {
//     const PentagonArea = 0.5 * 6 * 10;
//     const Pentagon = getTextvalueById('total-Pentagon')
//     setElemenTextById('total-Pentagon', PentagonArea)

// Ellipse js
// document.getElementById('Ellipse-calc'.addEventListener('click', function () {
//     const EllipseArea = 3.1416 * 10 * 4;
//     const Ellipse = getTextvalueById('total-Ellipse')
//     setElemenTextById('total-Ellipse')
// }))


