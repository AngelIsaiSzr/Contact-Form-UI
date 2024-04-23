// Función para iniciar el carrusel de imágenes
function startImageSlideshow() {
    const images = ["assets/img/slider-1.jpg", "assets/img/slider-2.jpg", "assets/img/slider-3.jpg"];
    let index = 0;

    // Función para mostrar la siguiente imagen en el carrusel
    function nextImage() {
        index = (index + 1) % images.length;
        document.body.style.backgroundImage = `url(${images[index]})`;
    }
    // Intervalo de tiempo para cambiar de imagen automáticamente
    setInterval(nextImage, 3000);
}

// Inicia el carrusel de imágenes
startImageSlideshow();

// Selecciona el formulario
const form = document.querySelector(".form");
// Selecciona el contenedor del modal
const modalContainer = document.querySelector(".modal-container");

// Evento de envío del formulario
form.addEventListener("submit", function (event) {
    // Evita que se envíe el formulario y se recargue la página
    event.preventDefault();

    // Obtiene los valores ingresados en los campos del formulario
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("input[type='text']:last-of-type").value;

    // Selecciona los elementos en los que se mostrarán los valores ingresados
    const nameValue = document.getElementById("name-value");
    const emailValue = document.getElementById("email-value");
    const messageValue = document.getElementById("message-value");

    // Asigna los valores ingresados a los elementos correspondientes
    nameValue.textContent = name;
    emailValue.textContent = email;
    messageValue.textContent = message;

    // Muestra el modal
    modalContainer.classList.add('show');

    // Limpia los campos del formulario
    form.reset();
});

// Selecciona el botón de cierre del modal
const closeButton = document.querySelector(".close");

// Evento de clic en el botón de cierre del modal
closeButton.addEventListener("click", function () {
    // Oculta el modal
    modalContainer.classList.remove('show');
});
