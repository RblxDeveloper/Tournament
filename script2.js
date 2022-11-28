const modal1 = document.querySelector('.modal1');
const hideIcon1 = document.querySelector('.modal1 #hideIcon1');
const hideButton1 = document.querySelector('.modal1 #hideButton1');
const btn1 = document.querySelector('#btn1');

hideIcon1.addEventListener('click', hideModal);
hideButton1.addEventListener('click', hideModal);
btn1.addEventListener('click', showModal);

function hideModal() {
    modal1.id = 'hide';
}

function showModal() {
    modal1.id = 'show';
}