import addHomeElement from './home.js'
import addAboutElement from './about.js'
import addMenuElement from './menu.js'

addHomeElement()
// addAboutElement()
// addMenuElement()

console.log("Hello World!");

const navbar = document.querySelector('.nav-bar') 

let lastClickedButton = null
export default function handleButtonClick(e){
    let eventTarget = e.target;

    if(lastClickedButton){
        lastClickedButton.classList.remove('active')
    }

    eventTarget.classList.add('active')
    lastClickedButton = eventTarget

    const content = document.getElementById('content');
    content.innerHTML = '';
    
    switch(eventTarget.id){
        case 'home-btn':
            addHomeElement();
            break;
        case 'menu-btn':
            addMenuElement();
            break;
        case 'about-btn':
            addAboutElement();
            break
    }
}





