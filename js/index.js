const btnToggle = document.querySelector('.toggle-btn');
const btnActive = document.querySelector('.li-btn');

btnToggle.addEventListener('click', function() {
    document.querySelector('.menu-mobile').classList.toggle('active');
    document.querySelector('.toggle-btn').classList.toggle('active');
    console.log("clicked");
});
