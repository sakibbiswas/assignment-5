
// Triangle js
document.getElementById('triangle-calc').addEventListener('click', function () {
   

    const baseField = getinputfieldById('base-field')
    const heightField = getinputfieldById('height-field')
    const newArea = 0.5 * baseField * heightField;
    const Element = getTextvalueById('total-Area')
    setElemenTextById('total-Area', newArea)
    
    // validation
    if ( baseField == 0 || heightField == 0) {
        alert('please type valid input')
        return;
    }
  

   
    
});


// Ractangle js
document.getElementById('rectangle-calc').addEventListener('click', function () {
    const widthfield = getinputfieldById('width-field')
    const lengthfield = getinputfieldById('length-field')
    const currentArea = widthfield * lengthfield;
    const rectangle = getTextvalueById('total-ractangle')
    setElemenTextById('total-ractangle', currentArea)

    // validation
    if (isNaN(widthfield)) {
        alert('please type valid input')
        return;
    }
});

// Parallelogram js
document.getElementById('Parallelogram-calc').addEventListener('click', function () {
    const ParallelogramArea = 10 * 12;
    const Parallelogram = getTextvalueById('total-Parallelogram')
    setElemenTextById('total-Parallelogram', ParallelogramArea)
});
// Rhombus js
document.getElementById('Rhombus-calc').addEventListener('click', function () {
    const RhombusArea = 0.5 * 16 * 8;
    const Rhombus = getTextvalueById('total-Rhombus')
    setElemenTextById('total-Rhombus', RhombusArea)
});

// Pentagon js
document.getElementById('Pentagon-calc').addEventListener('click', function () {
    const PentagonArea = 0.5 * 6 * 10;
    const Pentagon = getTextvalueById('total-Pentagon')
    setElemenTextById('total-Pentagon', PentagonArea)
});

// Ellipse js
document.getElementById('Ellipse-calc').addEventListener('click', function () {
    const EllipseArea = 3.1416 * 10 * 4;
    const Ellipsecount= EllipseArea.toFixed(2)
    const Ellipse = getTextvalueById('total-Ellipse')
    setElemenTextById('total-Ellipse', Ellipsecount)
});


