const btnAlert = document.getElementById('mybutton');

btnAlert.addEventListener('click', function(e) {
    alert('button clicked!')
});

const btnBackground = document.getElementById('mybutton2');
const body = document.querySelector('body');

btnBackground.addEventListener('click', function(toggleColor){
    body.classList.toggle('red-background')

});









