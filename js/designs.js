// const clicks = document.querySelector(".information__data__moves");

// let moves = clicks.textContent;

// const card = document.querySelectorAll('.card');


// // card.addEventListener('click', function() {
// //     clicks.textContent = '1';
// // });

// console.log(card);
function main() {
    const $moves = $('.information__data__moves'); //selects moves

    let $num = 0;

    $('.card').on('click', function() {
        $num += 1;
        $moves.text(num);
    });
};

$(document).ready(main);