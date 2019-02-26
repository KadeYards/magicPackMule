import $ from 'jquery'
import css from '../css/template.scss'
import milligram from 'milligram'

$(() => {
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

  //Event Listeners
  btnNum1.addEventListener('click', function(){
    display.innerHTML += 1
  })
  btnNum2.addEventListener('click', function(){
    display.innerHTML += 2
  })
  btnNum3.addEventListener('click', function(){
    display.innerHTML += 3
  })
  btnNum4.addEventListener('click', function(){
    display.innerHTML += 4
  })
  btnNum5.addEventListener('click', function(){
    display.innerHTML += 5
  })
  btnNum6.addEventListener('click', function(){
    display.innerHTML += 6
  })
  btnNum7.addEventListener('click', function(){
    display.innerHTML += 7
  })
  btnNum8.addEventListener('click', function(){
    display.innerHTML += 8
  })
  btnNum9.addEventListener('click', function(){
    display.innerHTML += 9
  })
  btnNum0.addEventListener('click', function(){
    display.innerHTML += 0
  })
  btnDecimal.addEventListener('click', function(){
    let currentDisplay = display.innerHTML.split('')
    if (!currentDisplay.includes('.')){
        display.innerHTML += "."
    }
  })
  btnClear.addEventListener('click', function(){
    display.innerHTML = ''
  })

  
})
