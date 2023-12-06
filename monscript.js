
function hoverCard(card) {
    card.querySelector('.card__header').style.height = '4rem';
    card.querySelector('.card__header img').style.transform = 'scale(5)';
    card.querySelector('.card__footer').style.height = '16.6rem';

    var lis = card.querySelectorAll('.card__footer ul li');
    lis.forEach(function (li, index) {
        li.style.transform = 'translate(0)';
        li.style.transitionDelay = (index * 0.2) + 's';
    });
}

function resetCard(card) {
    card.querySelector('.card__header').style.height = '17rem';
    card.querySelector('.card__header img').style.transform = 'scale(1)';
    card.querySelector('.card__footer').style.height = '36px';

    var lis = card.querySelectorAll('.card__footer ul li');
    lis.forEach(function (li, index) {
        li.style.transform = 'translateX(-100%)';
        li.style.transitionDelay = '0.3s';
    });
}
