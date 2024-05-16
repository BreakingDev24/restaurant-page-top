import menuList from "./menuList";
import createElement from "./createElement";
//createElement(tag, className, container) 
export default function addMenuElement(){
    const menu = menuList()
    const content = document.getElementById('content')
    const menuSection = createElement('section', undefined, content)
    menuSection.id = 'menu';

    const menuContainer = createElement('div', 'menu-container', menuSection)

    for (let key in menu) {
        if (menu.hasOwnProperty(key)) {
            const platesType = createElement('div', 'plates-type', menuContainer )
            const platesTypeName = createElement('h2', 'plates-type-name', platesType);
            platesTypeName.textContent = key;

            menu[key].map(item => {
                const {nome, prezzo, ingredienti} = item

                const plate = createElement('div', 'plate', platesType);
                const plateNameContainer = createElement('div', 'plate-name-container', plate);
                const plateName = createElement('p', 'plate-name', plateNameContainer)
                plateName.textContent = nome

                const platePrice = createElement('p', 'price', plateNameContainer);
                platePrice.textContent = prezzo

                const ingredients = createElement('p', 'plate-description', plate);
                ingredients.textContent = ingredienti.join(", ")
                console.log(nome)
            })

            
        }
    }
}
