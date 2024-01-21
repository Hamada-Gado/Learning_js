export function clearEventListeners(element) {
    const clonedEl = element.cloneNode(true);
    element.replaceWith(clonedEl);
    return clonedEl;
}
export function moveElement(elId, newDestSelector) {
    const element = document.getElementById(elId);
    const destinationEl = document.querySelector(newDestSelector);
    destinationEl.append(element);
    element.scrollIntoView({ behavior: "smooth" });
}
