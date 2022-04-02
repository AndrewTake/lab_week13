// step one, define the variables that will be used in the function
const originalContainer = document.querySelector('.original-container');
const copyContainer = document.querySelector('.copy-container');
// step two, build the function
originalContainer.addEventListener('click', (event) => {
    if (event.target = 'div.original-container') {
        copyContainer.insertAdjacentHTML("beforeend", event.target.innerHTML)
        // insertAdjacentHTML(position, text), represents the position relative to the element
        // innerHTML sets the HTML markup within an element, in thihs case, its being copied
    }
}
)
;
const clearTheCopies = document.querySelector('button');

clearTheCopies.addEventListener('click', (event) => {
    copyContainer.innerHTML = ''
}
)
