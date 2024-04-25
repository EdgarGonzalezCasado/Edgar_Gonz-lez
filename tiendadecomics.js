//Funcionalidad para el menú de navegación

function activarSeccion(seccion){
    document.querySelectorAll('section').forEach((sec)=> {
        sec.style.display='none';
    });
    document.querySelector(seccion).style.display='block';
}


//cabecera en movimiento
const gallery=document.querySelector('.gallery');

gallery.addEventListener('mouseover', () => {
    const images = gallery.querySelectorAll('li');
    images.forEach( image => {
        image.style.animationPlayState = 'paused';
    });
});

gallery.addEventListener('mouseout', () => {
    const images = gallery.querySelectorAll('li');
    images.forEach (image => {
        image.style.animationPlayState = 'running';
    });
});

const images = document.querySelectorAll ('.gallery li');
images.forEach (image => {
    image.addEventListener('click', () => {
        const imageUrl = image.querySelector('img').src;
        window.open (imageUrl, '_blank');
    });
});

//hasta aquí la cabecera en movimiento

document.addEventListener('DOMContentLoaded', function(){
    //mostrar solo la sección de novedades al cargar la página
    activarSeccion('#novedades');
    //eventos para los botones del menú

    document.querySelectorAll('nav ul li a').forEach((link)=>{
        link.addEventListener('click', function(e) {
            e.preventDefault();
            activarSeccion(this.getAttribute('href'));
        });
    });
});

//Funcionalidad para el formulario de registro
document.querySelector('#registro').addEventListener('submit', function(e){
    e.preventDefault();

    //aquí puedes añadir la lógica para manejar el registro

    alert('!Mensaje privado¡');
});

//Obtén todas las imágenes de la galería

const galleryImages= document.querySelectorAll('.imagen1');

//Agrega un evento de clic a cada imagen de la galería
galleryImages.forEach(image=> {
    image.addEventListener('click',()=> {

        //Agrega la clase CSS para aplicar el efecto de zoom
image.classList.add('zoomed');

        //Agrega la clase CSS para aplicar el efecto zoom
        setTimeout(() => {
            //Quita la clase CSS para restablecer el tamaño original
            image.classList.remove('zoomed');
        }, 1000); //Ajusta eñ tiempo según la duración de la animación de zoom
    });
});

//generar un mensaje de bienvenida aleatorio

const mensajesDivertidos = [
    "¿¡Bienvenido a la tienda de comics mas increíble del universo!",
    "¡Prepárate para sumergirte en el mundo de los comics",
    "¿Listo para encontrar los cómics mas épicos y coleccionables del mundo?",
    "¡Explora nuestro catálogo y descubre un nuevo universo de emociones!",
];
const mensajeAleatorio = mensajesDivertidos[Math.floor(Math.random() * mensajesDivertidos.length)];
alert (mensajeAleatorio);