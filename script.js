let current = document.querySelector('#current')
let buttons = document.querySelectorAll('.button')
let inputs = []
let result

buttons.forEach((button) =>
  button.addEventListener('click', (event) => {
    let input = event.target.innerText
    if (input === 'AC' || input === '+/-' || input === '%') {
      if (input === '+/-') {
        current.innerText = -current.innerText
        inputs[inputs.length - 1] = current.innerText
      } else if (input === '%') {
        current.innerText = current.innerText / 100
        resetButtonStyles()
        inputs = []
        inputs.push(current.innerText)
      } else if (input === 'AC') {
        current.innerText = 0
        resetButtonStyles()
        inputs = []
      }
    } else {
      inputs.push(input)
      console.log(inputs)

      if (/^[0-9]$/.test(input)) {
        current.innerText = inputs.join('')
        resetButtonStyles()
      } else {
        button.style.backgroundColor = 'white'
        button.style.color = 'rgb(255, 179, 38)'
      }
      if (input === '=') {
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i] === '/') {
            let num1 = parseFloat(inputs.slice(0, i).join(''))
            let num2 = parseFloat(inputs.slice(i + 1).join(''))
            console.log(num1)
            console.log(num2)
            result = num1 / num2
          } else if (inputs[i] === 'x') {
            let num1 = parseFloat(inputs.slice(0, i).join(''))
            let num2 = parseFloat(inputs.slice(i + 1).join(''))
            console.log(num1)
            console.log(num2)
            result = num1 * num2
          } else if (inputs[i] === '-') {
            let num1 = parseFloat(inputs.slice(0, i).join(''))
            let num2 = parseFloat(inputs.slice(i + 1).join(''))
            console.log(num1)
            console.log(num2)
            result = num1 - num2
          } else if (inputs[i] === '+') {
            let num1 = parseFloat(inputs.slice(0, i).join(''))
            let num2 = parseFloat(inputs.slice(i + 1).join(''))
            console.log(num1)
            console.log(num2)
            result = num1 + num2
          }
        }
        current.innerText = result
        inputs = []

        inputs.push(result)
        resetButtonStyles()
        console.log(inputs)
      }
    }
  })
)

function resetButtonStyles() {
  buttons.forEach((button) => {
    button.style.backgroundColor = ''
    button.style.color = ''
  })
}
