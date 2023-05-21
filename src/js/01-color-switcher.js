

const getRandomHexColor = () =>{
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const changeBackgroungColor = () => {
    document.body.style.backgroundColor = getRandomHexColor();
}

let intervalId;
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
stop.disabled = true;

//agregamos el evento click sobre el botton start
start.addEventListener('click', function() {
    start.disabled = true;
    stop.disabled = false;
    intervalId = setInterval(changeBackgroungColor, 1000);
});

//agregamos el evento click sobre el botton stop
stop.addEventListener('click', function() {
    start.disabled = false ;
    stop.disabled = true;
    clearInterval(intervalId);
});