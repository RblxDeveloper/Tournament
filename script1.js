const modals = document.querySelector('.modals');
const hideIcons = document.querySelector('.modals #hideIcons');
const hideButtons = document.querySelector('.modals #hideButtons');
const allButtons = document.querySelector('#allButtons');

hideIcons.addEventListener('click', hideModal);
hideButtons.addEventListener('click', hideModal);
allButtons.addEventListener('click', showModal);

function hideModal() {
    modals.id = 'hide';
}

function showModal() {
    modals.id = 'show';
}