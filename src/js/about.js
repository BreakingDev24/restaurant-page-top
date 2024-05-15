import createElement from "./createElement"
//function createElement(tag, className, container)
import pizzapic from '../img/aboutMainPic.jpg'
import winepic from '../img/aboutSecondaryPic.jpg'

export default function addAboutElement(){
    const content = document.getElementById('content')
    // about section
    const about = createElement('section', 'about', content)
    about.id = 'about'
    // about title container
    const aboutTitleContainer = createElement('div', 'about-title-container', about)
    // about title
    const aboutTitle = createElement('h2', 'about-title', aboutTitleContainer)
    aboutTitle.textContent = 'Our Philosophy';
    // info
    const aboutInfo = createElement('div', 'about-info', about)
    // pic
    const aboutPicContainer = createElement('div', 'about-pic-container', aboutInfo)

    const picContainer = createElement('div', 'pic-container', aboutPicContainer)

    const aboutMainPic = createElement('img', 'about-main-pic', picContainer)
    aboutMainPic.src = pizzapic

    const secondaryPic = createElement('img', 'secondary-pic', picContainer)
    secondaryPic.src = winepic
    // story section
    const aboutStoryContainer = createElement('div', 'about-story-container', aboutInfo)

    const aboutStoryTitle = createElement('h2', undefined, aboutStoryContainer )
    aboutStoryTitle.textContent = 'Our Story'

    const aboutStoryText = createElement('p', undefined, aboutStoryContainer)
    aboutStoryText.textContent = `At Pizzanapoli, we believe thath great food should be an experience that ignites all the senses. That's why we use only the freshest ingredients, imported directly from Italy, and bake our pizzas in a wood-fired oven that infuses them with a smoky flavor and a crispy crust. Our story began in Tokyo in 2000, with a passion for pizza and a dream of creating a dining experience that celebrates the art of pizza making.`

    return about
}