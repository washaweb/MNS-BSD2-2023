// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// import de la librairie dayjs
import dayjs from 'dayjs'

let today = dayjs().format('DD/MM/YYYY HH:mm')

const app = document.querySelector('#app')
app.innerHTML= `
  <div class="container py-4 px-3 mx-auto">
    <h1>Hello, Bootstrap and Vite!</h1>
    <p>${today}</p>
    <button class="btn btn-primary">Primary button</button>
  </div>
`
// on teste si les librairies sont bien là
console.log(bootstrap, today)