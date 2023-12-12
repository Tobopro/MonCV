function isAboveMediumScreen() {
    return window.innerWidth >= 770; // Ajustez la valeur du seuil selon vos besoins
}


function hoverCard(card) {
    if (isAboveMediumScreen()) {
        card.querySelector('.card__header').style.height = '4rem';
        card.querySelector('.card__header img').style.transform = 'scale(5)';
        card.querySelector('.card__footer').style.height = '20rem';

        var lis = card.querySelectorAll('.card__footer ul li');
        lis.forEach(function (li, index) {
            li.style.transform = 'translate(0)';
            li.style.transitionDelay = (index * 0.3) + 's';
        });
    }

}
function resetCard(card) {
    if (isAboveMediumScreen()) {
        card.querySelector('.card__header').style.height = '17rem';
        card.querySelector('.card__header img').style.transform = 'scale(1)';
        card.querySelector('.card__footer').style.height = '36px';

        var lis = card.querySelectorAll('.card__footer ul li');
        lis.forEach(function (li, index) {
            li.style.transform = 'translateX(-100%)';
            li.style.transitionDelay = '0.3s';
        });
    }
}

function isBelowMediumScreen() {
    return window.innerWidth < 770; // Ajustez la valeur du seuil selon vos besoins
}

// Fonction pour vérifier si un élément est dans la vue
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) / 1.5) &&
        rect.right <= ((window.innerWidth || document.documentElement.clientWidth))
    );
}

// Fonction pour gérer l'effet au survol de la carte
function handleCardEffect(card) {
    if (isInViewport(card) && isBelowMediumScreen()) {
        card.querySelector('.card__header').style.height = '4rem';
        card.querySelector('.card__header img').style.transform = 'scale(5)';
        card.querySelector('.card__footer').style.height = '20rem';

        var lis = card.querySelectorAll('.card__footer ul li');
        lis.forEach(function (li, index) {
            li.style.transform = 'translate(0)';
            li.style.transitionDelay = (index * 0.3) + 's';
        });
    } else {
        card.querySelector('.card__header').style.height = '17rem';
        card.querySelector('.card__header img').style.transform = 'scale(1)';
        card.querySelector('.card__footer').style.height = '36px';

        var lis = card.querySelectorAll('.card__footer ul li');
        lis.forEach(function (li, index) {
            li.style.transform = 'translateX(-100%)';
            li.style.transitionDelay = '0.3s';
        });
    }
}

// Fonction pour gérer les effets pour toutes les cartes
function handleScrollEffects() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        handleCardEffect(card);
    });
}

// Écoute de l'événement scroll
window.addEventListener('scroll', handleScrollEffects);

// Appeler la fonction une fois au chargement de la page pour gérer les cartes initialement visibles
document.addEventListener('DOMContentLoaded', handleScrollEffects);


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

    var buttons = document.querySelectorAll('.nav-journey a i');
    if (buttons) {
        buttons.forEach(function (button) {
            button.classList.remove('active-journey-icon');
            button.classList.add('inactive-journey-icon');
        });

    }

    var button = document.querySelector('.nav-journey a[onclick="showSection(\'' + sectionId + '\')"] i');
    if (button) {
        button.classList.remove('inactive-journey-icon');
        button.classList.add('active-journey-icon');
    }



}


function unblur() {
    var section = document.getElementById('my-interests');

    if (section.classList.contains('my-unblur')) {
        section.classList.remove('my-unblur');
        section.classList.add('my-blur');
    }
    else {
        section.classList.remove('my-blur');
        section.classList.add('my-unblur');
    }

    var buttons = document.querySelectorAll('.button-blur');
    buttons.forEach(function (button) {
        button.classList.toggle('d-none');
    });


}

function handleClick(element) {

    var links = document.querySelectorAll('.nav-journey a');
    links.forEach(link => link.classList.remove('clicked'));


    element.classList.add('clicked');
}

function extendsText() {
    var firstText = document.getElementById('text-origin');
    firstText.classList.add('d-none');

    var extendedText = document.getElementById('my-interests');
    extendedText.classList.remove('d-none');



}

function decreaseText() {

    var extendedText = document.getElementById('my-interests');
    extendedText.classList.add('d-none');

    var firstText = document.getElementById('text-origin');
    firstText.classList.remove('d-none');




}


