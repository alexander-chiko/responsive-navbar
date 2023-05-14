const menuToggle = document.querySelector('.list input');
const nav = document.querySelector('nav ul');
const li = document.querySelector('.li1');
const li2 = document.querySelector('.li2');
const li3 = document.querySelector('.li3');
const li4 = document.querySelector('.li4');
const li5 = document.querySelector('.li5');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

menuToggle.addEventListener('click', function() {
    li.classList.toggle('geser1');
    li2.classList.toggle('geser1');
    li3.classList.toggle('geser1');
    li4.classList.toggle('geser1');
    li5.classList.toggle('geser1');
    
});