import '../css/styles.css'

import addHomeElement from './home.js'
import handleButtonClick from './navInteraction.js'

const navbar = document.querySelector('.nav-bar') 

addHomeElement()
// addAboutElement()
// addMenuElement()
navbar.addEventListener('click', handleButtonClick)






    



