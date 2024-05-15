export default function addAboutElement(){
    const content = document.getElementById('content')

    const about = document.createElement('section');
    about.id = 'about'
    content.appendChild(about);

    const aboutTitleContainer = document.createElement('div');
    aboutTitle.classList.add('about-title-container')

    about.appendChild(aboutTitleContainer);

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('about-title');
    aboutTitle.textContent = 'Our Philosophy';

    aboutTitleContainer.appendChild(aboutTitle);

    const aboutInfo = document.createElement('div')
    aboutInfo.classList.add('about-info');
    about.appendChild(aboutInfo)

    const aboutPicContainer = document.createElement('div');
    aboutPicContainer.classList.add('about-pic-container');
    aboutInfo.appendChild(aboutPicContainer);

    const picContainer = document.createElement('div');
    picContainer.classList.add('pic-container');
    aboutPicContainer.appendChild(picContainer)

    const aboutMainPic = document.createElement('img')
    aboutMainPic.classList.add('about-main-pic');
    aboutMainPic.src = '../img/aboutMainPic.jpg'

    const secondaryPic = document.createElement('img')
    secondaryPic.classList.add('secondary-pic');
    secondaryPic.src = '../img/aboutSecondaryPic.jpg'

    picContainer.appendChild(aboutMainPic);
    picContainer.appendChild(secondaryPic)

    const aboutStoryContainer = document.createElement('div');
    aboutStoryContainer.classList.add('about-story-container');

    about.appendChild(aboutStoryContainer)

    const aboutStoryTitle = document.createElement('h2');
    aboutStoryTitle.textContent = 'Our Story'

    aboutStoryContainer.appendChild(aboutStoryTitle);

    const aboutStoryText = document.createElement('p');
    aboutStoryText.textContent = `At Pizzanapoli, we believe thath great food should be an experience that ignites all the senses. That's why we use only the freshest ingredients, imported directly from Italy, and bake our pizzas in a wood-fired oven that infuses them with a smoky flavor and a crispy crust. Our story began in Tokyo in 2000, with a passion for pizza and a dream of creating a dining experience that celebrates the art of pizza making.`

    aboutStoryContainer.appendChild(aboutStoryText)

    return about

}