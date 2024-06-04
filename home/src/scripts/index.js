// //Menú hamburguesa

// document.addEventListener('DOMContentLoaded', function() {
//   var menuIcon = document.getElementById('Headermenu');
//   var sidebar = document.getElementById('Headersidebar');
//   var overlay = document.getElementById('Header-overlay');

//   menuIcon.addEventListener('click', function() {
//       sidebar.classList.toggle('active');
//       overlay.classList.toggle('active');
//   });

//   overlay.addEventListener('click', function() {
//       sidebar.classList.remove('active');
//       overlay.classList.remove('active');
//   });
// });

// Función del carrusel

let AGUAinterval = false;
// Funciones para avanzar, retroceder o reproducir sliders
// Parámetro el: id del slider
// Parámetro cl: clase de los slides
// Parámetro val: valida si el slider tiene puntos (dots) o no
// Parámetro num: número del slide sobre el que se realiza la acción
// Parámetro but: id del botón relacionado a la acción
// Parámetro time: tiempo para la ejecución de la acción 

const AGUAnextSlide = (el, cl) => {
  //Calcula número de slides
    let numberOfSlides = document.getElementsByClassName(cl).length;
    let container = document.getElementById(el);
  // Mide cuántos elementos se muestran 
    let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
    let position = parseInt(container.getAttribute('data-position'));
    let percentageToMove = position*(100/numberOfSlides);
    if(position >= (numberOfSlides - maxPosition)){
    position = 0;
    percentageToMove = 0;
    }
    container.setAttribute('data-position', (position + 1));
    container.style.transform = 'translateX(-' + percentageToMove + '%)';
    console.log('Hola que hace')
    AGUAactiveDot(el, (position + 1));
};

const AGUAprevSlide = (el, cl) => {
    let numberOfSlides = document.getElementsByClassName(cl).length;
    let container = document.getElementById(el);
    let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
    let position = parseInt(container.getAttribute('data-position'));
  let percentageToMove = (position - 2) *(100/numberOfSlides);
    if(position <= 1){
    position = (numberOfSlides - maxPosition) + 1;
    percentageToMove = ((numberOfSlides - maxPosition) - 1) *(100/numberOfSlides);
    }
    container.setAttribute('data-position', (position - 1));
    container.style.transform = 'translateX(-' + percentageToMove + '%)';
    AGUAactiveDot(el, (position - 1));
};

const AGUAgotoSlide = (el, cl, num) => {
  let numberOfSlides = document.getElementsByClassName(cl).length;
  let container = document.getElementById(el);
  let position = num;
  let percentageToMove = (position - 1) *(100/numberOfSlides);
  container.setAttribute('data-position', position);
  container.style.transform = 'translateX(-' + percentageToMove + '%)';
  AGUAactiveDot(el, num);
};

//Activa el punto del slider
function AGUAactiveDot(el, num){
  let dots = document.getElementsByClassName(el + '-dot');
  if(dots.length > 0){
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    dots[num - 1].classList.add('active');
  }
}

AGUAinterval = window.setInterval(function(){
			AGUAnextSlide('AGUAsliderHome', 'AGUASlider-principal-element');
		}, 5500);

// Función del acordeon

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.Faq-acordion-item-question');

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "+";
    } else {
        content.style.display = "block";
        icon.textContent = "-";
    }
}


// Función de la línea de tiempo

let TIEMPOinterval = false;
// Funciones para avanzar, retroceder o reproducir sliders
// Parámetro el: id del slider
// Parámetro cl: clase de los slides
// Parámetro val: valida si el slider tiene puntos (dots) o no
// Parámetro num: número del slide sobre el que se realiza la acción
// Parámetro but: id del botón relacionado a la acción
// Parámetro time: tiempo para la ejecución de la acción 

const TIEMPOnextSlide = (el, cl) => {
  //Calcula número de slides
    let numberOfSlides = document.getElementsByClassName(cl).length;
    let container = document.getElementById(el);
  // Mide cuántos elementos se muestran 
    let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
    let position = parseInt(container.getAttribute('data-position'));
    let percentageToMove = position*(100/numberOfSlides);
    if(position >= (numberOfSlides - maxPosition)){
    position = 0;
    percentageToMove = 0;
    }
    container.setAttribute('data-position', (position + 1));
    container.style.transform = 'translateX(-' + percentageToMove + '%)';
    TIEMPOactiveDot(el, (position + 1));
};

const TIEMPOprevSlide = (el, cl) => {
    let numberOfSlides = document.getElementsByClassName(cl).length;
    let container = document.getElementById(el);
    let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
    let position = parseInt(container.getAttribute('data-position'));
  let percentageToMove = (position - 2) *(100/numberOfSlides);
    if(position <= 1){
    position = (numberOfSlides - maxPosition) + 1;
    percentageToMove = ((numberOfSlides - maxPosition) - 1) *(100/numberOfSlides);
    }
    container.setAttribute('data-position', (position - 1));
    container.style.transform = 'translateX(-' + percentageToMove + '%)';
    TIEMPOactiveDot(el, (position - 1));
};

const TIEMPOgotoSlide = (el, cl, num) => {
  let numberOfSlides = document.getElementsByClassName(cl).length;
  let container = document.getElementById(el);
  let position = num;
  let percentageToMove = (position - 1) *(100/numberOfSlides);
  container.setAttribute('data-position', position);
  container.style.transform = 'translateX(-' + percentageToMove + '%)';
  TIEMPOactiveDot(el, num);
};

//Activa el punto del slider
function TIEMPOactiveDot(el, num){
  let dots = document.getElementsByClassName(el + '-dot');
  if(dots.length > 0){
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    dots[num - 1].classList.add('active');
  }
}

// TIEMPOinterval = window.setInterval(function(){
//   TIEMPOnextSlide('TIEMPOsliderHome', 'TIEMPOSlider-principal-element');
// 		}, 5500);


// Función de las opiniones

let OPINIONinterval = false;
// Funciones para avanzar, retroceder o reproducir sliders
// Parámetro el: id del slider
// Parámetro cl: clase de los slides
// Parámetro val: valida si el slider tiene puntos (dots) o no
// Parámetro num: número del slide sobre el que se realiza la acción
// Parámetro but: id del botón relacionado a la acción
// Parámetro time: tiempo para la ejecución de la acción 

const OPINIONnextSlide = (el, cl) => {
  //Calcula número de slides
    let numberOfSlides = document.getElementsByClassName(cl).length;
    let container = document.getElementById(el);
  // Mide cuántos elementos se muestran 
    let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
    let position = parseInt(container.getAttribute('data-position'));
    let percentageToMove = position*(100/numberOfSlides);
    if(position >= (numberOfSlides - maxPosition)){
    position = 0;
    percentageToMove = 0;
    }
    container.setAttribute('data-position', (position + 1));
    container.style.transform = 'translateX(-' + percentageToMove + '%)';
    OPINIONactiveDot(el, (position + 1));
};

const OPINIONprevSlide = (el, cl) => {
    let numberOfSlides = document.getElementsByClassName(cl).length;
    let container = document.getElementById(el);
    let maxPosition = Math.round((container.parentElement.offsetWidth / document.getElementsByClassName(cl)[0].offsetWidth)) - 1;
    let position = parseInt(container.getAttribute('data-position'));
  let percentageToMove = (position - 2) *(100/numberOfSlides);
    if(position <= 1){
    position = (numberOfSlides - maxPosition) + 1;
    percentageToMove = ((numberOfSlides - maxPosition) - 1) *(100/numberOfSlides);
    }
    container.setAttribute('data-position', (position - 1));
    container.style.transform = 'translateX(-' + percentageToMove + '%)';
    OPINIONactiveDot(el, (position - 1));
};

const OPINIONgotoSlide = (el, cl, num) => {
  let numberOfSlides = document.getElementsByClassName(cl).length;
  let container = document.getElementById(el);
  let position = num;
  let percentageToMove = (position - 1) *(100/numberOfSlides);
  container.setAttribute('data-position', position);
  container.style.transform = 'translateX(-' + percentageToMove + '%)';
  OPINIONactiveDot(el, num);
};

//Activa el punto del slider
function OPINIONactiveDot(el, num){
  let dots = document.getElementsByClassName(el + '-dot');
  if(dots.length > 0){
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    dots[num - 1].classList.add('active');
  }
}

// OPINIONinterval = window.setInterval(function(){
//   OPINIONnextSlide('OPINIONsliderHome', 'OPINIONSlider-principal-element');
// 		}, 5500);