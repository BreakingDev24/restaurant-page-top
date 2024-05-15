
export default function addHomeElement(){
    const content = document.getElementById('content')

    const home = document.createElement('section')
    home.id = 'home'

    content.appendChild(home)

    const homeInfo = document.createElement('div');
    homeInfo.classList.add('home-info')

    home.appendChild(homeInfo)

    const homeTitle = document.createElement('h2')
    homeTitle.classList.add('home-title')
    homeTitle.textContent = 'Pizza Art Meets Japanese Hospitality';
    homeInfo.appendChild(homeTitle)


    const homeInfoDescriptionContainer = document.createElement('div');
    homeInfoDescriptionContainer.classList.add('home-info-description-container')

    homeInfo.appendChild(homeInfoDescriptionContainer);

    const homeInfoDescriptionText = document.createElement('p');
    homeInfoDescriptionText.classList.add('home-info-decription-text');
    homeInfoDescriptionText.textContent = 'Experience authentic Neapolitan pizza crafted using traditional techniques and baked in a wood-fired oven. At Pizzanpoli, we aim to bridge cultures by blending Italian pizza art with Japanese precision and hospitality. Come and enjoy our unique pizza sushi that fuses Italian and Japanese cuisine'
    homeInfoDescriptionContainer.appendChild(homeInfoDescriptionText)

    const discoverMoreBtn = document.createElement('button');
    discoverMoreBtn.classList.add('discover-more-btn');
    discoverMoreBtn.textContent = 'Discover More'
    homeInfoDescriptionContainer.appendChild(discoverMoreBtn)

    const infoPic = document.createElement('div');
    infoPic.classList.add('info-pic')

    home.appendChild(infoPic)

    const mainPic = document.createElement('img')
    mainPic.classList.add('main-pic');
    infoPic.appendChild(mainPic)

    return home

}