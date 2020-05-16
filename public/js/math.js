//
// Required Functions
// -> Validator for
// -> Adding and
// -> Multiplying
const validator = () => {
    let $num1 = document.querySelector('#num1').value
    let $num2 = document.querySelector('#num2').value
    const ansTxt = document.querySelector('#num')    
    if ($num1 === "" || $num2 === "") {
    ansTxt.innerText = 'You must provide a number!'
    return false;} else if (isNaN($num1) || isNaN($num2)) {
    ansTxt.innerText = 'The numbers are not a number!'
    return false;} else {return true;}
}

// Main Validator
const mainValidator = () => {
    validator()
    const $mathSelect = document.querySelector('#math__select').value
    const ansTxt = document.querySelector('#num')                    
    if ($mathSelect.value === 'selected') {
        ansTxt.innerText = 'You have to select an operation!'
        return false
    } else {
        return true;
    }
}

//
// Functions
// -> Add
const addNumbers = () => { 
    var proceed = validator()
    if (!proceed) return;
    let $num1 = document.querySelector('#num1').value
    let $num2 = document.querySelector('#num2').value
    const ansTxt = document.querySelector('#num')
    const ans = parseInt($num1) + parseInt($num2)
    ansTxt.innerText = `The answer is ${parseInt(ans)}!`
    console.log(ans)
}

//
// Functions
// -> Subtract
const subtractNumbers = () => {
    var proceed = validator()
    if (!proceed) return;
    let $num1 = document.querySelector('#num1').value
    let $num2 = document.querySelector('#num2').value
    const ansTxt = document.querySelector('#num')
    const ans = parseInt($num1) - parseInt($num2)
    ansTxt.innerText = `The answer is ${parseInt(ans)}`
    console.log(ans)
}

//
// Functions
// -> Multiply
const multiplyNumbers = () => { 
    var proceed = validator()
    if (!proceed) return;
    let $num1 = document.querySelector('#num1').value
    let $num2 = document.querySelector('#num2').value
    const ansTxt = document.querySelector('#num')
    const ans = parseInt($num1) * parseInt($num2)
    ansTxt.innerText = `The answer is ${parseInt(ans)}!`
    console.log(ans)
}

//
// Functions
// -> Divide
const divideNumbers = () => { 
    var proceed = validator()
    if (!proceed) return;
    let $num1 = document.querySelector('#num1').value
    let $num2 = document.querySelector('#num2').value
    const ansTxt = document.querySelector('#num')
    const ans = parseInt($num1) / parseInt($num2)
    ansTxt.innerText = `The answer is ${parseInt(ans)}!`
    console.log(ans)
}

//
// Main
// -> Choose
const operation = () => {
    const $mathSelect = document.querySelector('#math__select').value
    const ansTxt = document.querySelector('#num')
    const proceed = mainValidator()
    if (!proceed) return;
    const math = $mathSelect
    // Main if
    if (math === 'add') {
    return addNumbers()
    } else if (math === 'sub') {
    return subtractNumbers()
    } else if (math === 'mul') {
    return multiplyNumbers()
    } else if (math === 'div') {
    return divideNumbers()
    } else {
    ansTxt.innerText = 'There is an error!'
    }
}