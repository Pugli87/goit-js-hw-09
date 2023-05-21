

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

  
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
stop.disabled = true;

start.addEventListener('click', function() {
    console.log('click en Start');
    document.body.style.backgroundColor = getRandomHexColor();
    start.disabled = true;
    stop.disabled = false;

});

stop.addEventListener('click', function() {
    console.log('click en Stop');
    start.disabled = false ;
    stop.disabled = true;
    document.body.style.backgroundColor = 'white';
});