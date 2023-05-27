import Notiflix from "notiflix";

// Obtener referencia al formulario
const form = document.querySelector('.form');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', handleSubmit);

// Función para manejar el envío del formulario
function handleSubmit(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  // Función para crear una promesa
  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
  
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
  
  // Generar las promesas
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // Aquí puedes agregar código para mostrar notificaciones con notiflix
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        // Aquí puedes agregar código para mostrar notificaciones con notiflix
      });
  }
}
