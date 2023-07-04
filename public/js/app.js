console.log("algo")


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  const input = document.querySelector('input')
  const location = document.querySelector('.location')
  const forecast = document.querySelector('.forecast')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const address = input.value
    fetch(`http://localhost:3000/weather?address=${address}`).then( response => {
      response.json().then( data => {
        if(data.error) {
          location.textContent = data.error
        } else {
          console.log(data)
          location.textContent = data.data.location
          forecast.textContent =       
          `It's currently ${data.data.temperature} degrees out. There is ${data.data.rain}% chance to rain`;
        }
      })
    })
  })
})
