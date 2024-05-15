import createElement from "./createElement"
//function createElement(tag, className, container)

export default function addHomeElement(){
    const content = document.getElementById('content')

    //Create home section
    const home = createElement('section', 'home', content)
    home.id = 'home'

    //create home info
    const homeInfo = createElement('div', 'home-info', home)
    
    //create home info title
    const homeTitle = createElement('h2', 'home-title', homeInfo)
    homeTitle.textContent = 'Pizza Art Meets Japanese Hospitality';

    //create home info description
    const homeInfoDescriptionContainer = createElement('div', 'home-info-description-container', homeInfo)

    const homeInfoDescriptionText = createElement('p', 'home-info-description-text', homeInfoDescriptionContainer)
    homeInfoDescriptionText.textContent = 'Experience authentic Neapolitan pizza crafted using traditional techniques and baked in a wood-fired oven. At Pizzanpoli, we aim to bridge cultures by blending Italian pizza art with Japanese precision and hospitality. Come and enjoy our unique pizza sushi that fuses Italian and Japanese cuisine'

    //create discover more button
    const discoverMoreBtn = createElement('button', 'discover-more-btn', homeInfoDescriptionContainer)
    discoverMoreBtn.textContent = 'Discover More'
    
    //create home pic container
    const infoPic = createElement('div', 'info-pic', home)

    return home

}