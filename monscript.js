
function hoverCard(card) {
    card.querySelector('.card__header').style.height = '4rem';
    card.querySelector('.card__header img').style.transform = 'scale(5)';
    card.querySelector('.card__footer').style.height = '20rem';

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
function showSection(sectionId) {
    // Masquer toutes les sections
    var sections = document.getElementsByClassName('journey-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Afficher la section spécifique
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}