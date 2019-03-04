import $ from 'jquery'
import css from '../css/template.scss'
import milligram from 'milligram'

$(() => {

   //Element Selectors
   let display = document.getElementById('calc-display')
   let btnNum1 = document.getElementById('btn-num1')
   let btnNum2 = document.getElementById('btn-num2')
   let btnNum3 = document.getElementById('btn-num3')
   let btnNum4 = document.getElementById('btn-num4')
   let btnNum5 = document.getElementById('btn-num5')
   let btnNum6 = document.getElementById('btn-num6')
   let btnNum7 = document.getElementById('btn-num7')
   let btnNum8 = document.getElementById('btn-num8')
   let btnNum9 = document.getElementById('btn-num9')
   let btnNum0 = document.getElementById('btn-num0')
   let btnDivide = document.getElementById('btn-divide')
   let btnMulitiply = document.getElementById('btn-multiply')
   let btnSubtract = document.getElementById('btn-subtract')
   let btnAdd = document.getElementById('btn-add')
   let btnPercent = document.getElementById('btn-percent')
   let btnEquals = document.getElementById('btn-equals')
   let btnDecimal = document.getElementById('btn-decimal')
   let btnPosNeg = document.getElementById('btn-pos-neg')
   let btnClear = document.getElementById('btn-clear')

  let stored = []
  let endOfLine = 0

  function divide (num1, num2) {
    return num1 / num2
  }
  function multiply (num1, num2) {
    return num1 * num2
  } 
  function subraction (num1, num2) {
    return num1 - num2
  }
  function add (num1, num2) {
    return num1 + num2
  }
  function percent (num1) {
    return num1 / 100
  }

  function numberChecker (number) {
    if (stored.length > 0) {
      let storedValue = stored[0]
      let currentDisplay = display.innerHTML
      if (storedValue.number.toString() === currentDisplay || currentDisplay === '') {
        display.innerHTML = number
      } else {
        display.innerHTML += number
      }
    } else {
      if (endOfLine === 1) {
        display.innerHTML = number
        endOfLine = 0
      } else {
        display.innerHTML += number
      }
    }
  }

  function operatorChecker (operator) {
    let currentDisplay = display.innerHTML
    display.innerHTML = ''
    if (stored.length > 0) {
      let storedValue = stored.pop()
      let total = eval(`${storedValue.number}${storedValue.operator}${currentDisplay}`)
      stored.push(
        {'number': total, 'operator': operator}
      )
      display.innerHTML = total
    } else {
      stored.push(
        {'number': currentDisplay, 'operator': operator}
      )
    }
  }

  //Event Listeners
  btnNum1.addEventListener('click', function(){
    numberChecker(1)
  })
  btnNum2.addEventListener('click', function(){
    numberChecker(2)
  })
  btnNum3.addEventListener('click', function(){
    numberChecker(3)
  })
  btnNum4.addEventListener('click', function(){
    numberChecker(4)
  })
  btnNum5.addEventListener('click', function(){
    numberChecker(5)
  })
  btnNum6.addEventListener('click', function(){
    numberChecker(6)
  })
  btnNum7.addEventListener('click', function(){
    numberChecker(7)
  })
  btnNum8.addEventListener('click', function(){
    numberChecker(8)
  })
  btnNum9.addEventListener('click', function(){
    numberChecker(9)
  })
  btnNum0.addEventListener('click', function(){
    numberChecker(0)
  })
  btnDecimal.addEventListener('click', function(){
    let currentDisplay = display.innerHTML.split('')
    if (!currentDisplay.includes('.')){
        display.innerHTML += "."
    }
  })
  btnClear.addEventListener('click', function(){
    display.innerHTML = ''
    stored.pop()
  })

  // Operator Buttons
  btnAdd.addEventListener('click', function () {
    operatorChecker('+')
  })
  btnSubtract.addEventListener('click', function () {
    operatorChecker('-')
  })
  btnMulitiply.addEventListener('click', function () {
    operatorChecker('*')
  })
  btnDivide.addEventListener('click', function () {
    operatorChecker('/')
  })
  btnPercent.addEventListener('click', function () {
    let currentDisplay = display.innerHTML
    if (!currentDisplay) {
      display.innerHTML = 'ERROR'
    } else {
      let percent = eval(`${currentDisplay} / 100`)
      display.innerHTML = percent
      endOfLine = 1
    }
  })
  btnEquals.addEventListener('click', function () {
    let storedValue = stored.pop()
    let currentDisplay = display.innerHTML
    let total = eval(`${storedValue.number}${storedValue.operator}${currentDisplay}`)
    display.innerHTML = total
    endOfLine = 1
  })
  btnPosNeg.addEventListener('click', function () {
    let currentDisplay = display.innerHTML
    let charArray = currentDisplay.split('')
    if (!charArray.includes('-')) {
      display.innerHTML = `-${currentDisplay}`
    } else {
      display.innerHTML = charArray.shift().join('')
    }
  })
})