let index = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[index].classList.remove('active');

    index += direction;

    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

// Para iniciar com a primeira imagem visível
document.querySelector('.slides').style.transform = `translateX(0)`;

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}