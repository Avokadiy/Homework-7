// nav элементы
const start = document.querySelector('.item_start');
const first = document.querySelector('.item_01');
const second = document.querySelector('.item_02');
const third = document.querySelector('.item_03');
// блоки
const startPos = document.querySelector('.intro');
const firstPos = document.querySelector('.first_part');
const secondPos = document.querySelector('.second_part');
const thirdPos = document.querySelector('.third_part');

document.addEventListener('scroll', function () {
    const posStart = startPos.getBoundingClientRect().top;
    start.classList.toggle('visible', posStart + startPos.clientHeight <= window.innerHeight && posStart >= 0);
});

document.addEventListener('scroll', function () {
    const pos01 = firstPos.getBoundingClientRect().top;
    first.classList.toggle('visible', pos01 + first.clientHeight <= window.innerHeight && pos01 >= 0);
});

document.addEventListener('scroll', function () {
    const pos02 = secondPos.getBoundingClientRect().top;
    second.classList.toggle('visible', pos02 + second.clientHeight <= window.innerHeight && pos02 >= 0);
});

document.addEventListener('scroll', function () {
    const pos03 = thirdPos.getBoundingClientRect().top;
    third.classList.toggle('visible', pos03 + third.clientHeight <= window.innerHeight && pos03 >= 0);
});