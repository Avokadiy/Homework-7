// nav элементы
const start = document.querySelector('.item_start');
const first = document.querySelector('.item_01');
const second = document.querySelector('.item_02');
const third = document.querySelector('.item_03');
// блоки
const startPos = document.querySelector('.background');
const firstPos = document.querySelector('.first_part');
const secondPos = document.querySelector('.second_part');
const thirdPos = document.querySelector('.third_part');

function scroller() {
    const posStart = startPos.getBoundingClientRect().top;
    const posHeight = startPos.getBoundingClientRect().height;
    start.classList.toggle('visible', posStart <= 0 && -1 * posStart <= posHeight - 700);

    const pos01 = firstPos.getBoundingClientRect().top;
    const pos01Height = firstPos.getBoundingClientRect().height;
    first.classList.toggle('visible', pos01 <= 220 && -1 * pos01 <= pos01Height / 2 - 20);

    const pos02 = secondPos.getBoundingClientRect().top;
    const pos02Height = secondPos.getBoundingClientRect().height;
    second.classList.toggle('visible', pos02 <= pos01Height / 2 && -1 * pos02 <= pos02Height / 2 - 20);

    const pos03 = thirdPos.getBoundingClientRect().top;
    const pos03Height = thirdPos.getBoundingClientRect().height;
    third.classList.toggle('visible', pos03 <= pos02Height / 2 && -1 * pos03 <= pos03Height / 2 - 20);
}

document.addEventListener('scroll', scroller);

document.querySelector('.menu_button').addEventListener('click', () => {
    document.querySelector('.menu_scroller').classList.add('active');
})

document.querySelector('.scroller_close').addEventListener('click', () => {
    document.querySelector('.menu_scroller').classList.remove('active');
})