
let intervalId; // Variable parael intervalo de tiempo
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
stop.disabled = true;// Ocultamos el boton stop

//Funcion para obtener un color aleatorio
const getRandomHexColor = () =>{
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Funcion para obtener un fondo aleatorio
const changeBackgroungColor = () => {
    document.body.style.backgroundColor = getRandomHexColor();
}

//Funcion para iniciar la ejecucion del intervalo
const onInterval = () =>{
    start.disabled = true;
    stop.disabled = false;
// Metodo interval para repeteir el codigo cada segundo
    intervalId = setInterval(changeBackgroungColor, 1000);
};

//Funcion para detener la ejecucion  del intervalo
const clearInterval = () => {
    start.disabled = false ;
    stop.disabled = true;
// Metodo para detener el intervalo de tiempo de start
    clearInterval(intervalId);
}

// Leemos los eventos en los botones
startButton.addEventListener('click', onInterval);
stopButton.addEventListener('click', clearInterval);