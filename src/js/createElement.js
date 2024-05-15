export default function createElement(tag, className, container) {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    if (container) {
        container.appendChild(element);
    }
    return element;
}