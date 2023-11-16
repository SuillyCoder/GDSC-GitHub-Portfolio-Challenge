function downForOne() {
    var sectionTwo = document.getElementById('section2');
    var twoPosition = sectionTwo.offsetTop;

    window.scrollTo({
        top: twoPosition,
        behavior: 'smooth'
    });
}

function downForTwo() {
    var sectionThree = document.getElementById('section3');
    var threePosition = sectionThree.offsetTop;

    window.scrollTo({
        top: threePosition,
        behavior: 'smooth'
    });
}

function downForThree() {
    var sectionFour = document.getElementById('section4');
    var fourPosition = sectionFour.offsetTop;

    window.scrollTo({
        top: fourPosition,
        behavior: 'smooth'
    });
}

function downForFour() {
    var sectionFive = document.getElementById('section5');
    var fivePosition = sectionFive.offsetTop;

    window.scrollTo({
        top: fivePosition,
        behavior: 'smooth'
    });
}

function changeButtonColor(button) {
    button.style.backgroundColor = '#93C4d1';
}

function resetButtonColor(button) {
    button.style.backgroundColor = '#5f97aa';
}

function openGitHub() {
    window.open('https://github.com/SuillyCoder');
}

function resumeAccess() {
    window.open('https://drive.google.com/file/d/1xGwCERsnDw2kHrQasJgRqeZlRnhhrbbd/view?usp=sharing');
}

function ResuChangeColor(button) {
    button.style.backgroundColor = '#5f97aa';
    button.style.color = '#18363e'
}

function ResuResetColor(button) {
    button.style.backgroundColor = '#18363e';
    button.style.color = '#5f97aa'
}

function GitColor(button) {
    button.style.backgroundColor = '#18363e';
    button.style.color = '#5f97aa'
}

function GitReset(button) {
    button.style.backgroundColor = '#5f97aa';
    button.style.color = '#18363e'
}

