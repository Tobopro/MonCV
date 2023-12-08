
function hoverCard(card) {
    card.querySelector('.card__header').style.height = '4rem';
    card.querySelector('.card__header img').style.transform = 'scale(5)';
    card.querySelector('.card__footer').style.height = '20rem';

    var lis = card.querySelectorAll('.card__footer ul li');
    lis.forEach(function (li, index) {
        li.style.transform = 'translate(0)';
        li.style.transitionDelay = (index * 0.3) + 's';
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
function showSection(sectionId, icon) {
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

    // Retirer la classe 'active' de tous les icônes
    var icons = document.querySelectorAll('.nav-journey a i');
    icons.forEach(function (icon) {
        icon.classList.remove('active');
    });

    // Ajouter la classe 'active' à l'icône cliqué
    icon.classList.add('active');
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
