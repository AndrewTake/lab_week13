
// step one, define the variables that will be used in the function
const originalContainer = document.querySelector('.original-container').querySelectorAll('div');
const copyContainer = document.querySelector('.copy-container');

originalContainer.forEach(function(element) {
    // for each = for each element in list
    element.addEventListener('click', event => {
        if (event.target = 'div.original-container') {
            copyContainer.insertAdjacentHTML("beforeend", event.target.innerHTML + ' ')
            // insertAdjacentHTML(position, text), represents the position relative to the element
            // innerHTML sets the HTML markup within an element, in this case, its being copied
        }
    })
});
const clearTheCopies = document.querySelector('button');

clearTheCopies.addEventListener('click', event => {
    copyContainer.innerHTML = ''
}
)
// CODE FOR ORIGINAL FUNCTION, REFERENCE
// THE NEW FUNCTION FIXES A PROBLEM WHERE BOTH BUTTONS COULD BE CLICKED AT THE SAME TIME

// const containerOne = Array.from(document.querySelectorAll('div'))
//     .find(element => element.textContent === 'one')
// const containerTwo = Array.from(document.querySelectorAll('div'))
//     .find(element => element.textContent === 'two')

// step two, build the function
// containerOne.addEventListener('click', event => {
//     if (event.target = 'div.original-container') {
//         copyContainer.insertAdjacentHTML("beforeend", event.target.innerHTML + ' ')
//         // insertAdjacentHTML(position, text), represents the position relative to the element
//         // innerHTML sets the HTML markup within an element, in this case, its being copied
//     }
// }
// )
// ;
