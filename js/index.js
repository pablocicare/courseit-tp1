const btnToggle = document.querySelector('.toggle-btn');
const btnActive = document.querySelector('.li-btn');

btnToggle.addEventListener('click', function() {
    document.querySelector('.menu-mobile').classList.toggle('active');
});

btnActive.addEventListener('click', function() {
    document.querySelector('.menu-mobile').classList.remove('active');
    console.log("click")
});