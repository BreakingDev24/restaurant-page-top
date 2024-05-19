import addHomeElement from './home.js'
import addAboutElement from './about.js'
import addMenuElement from './menu.js'



console.log("Hello World!");


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





