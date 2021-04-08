var slideIndex = 0;
var background;
var images = ["img/bg_header.jpg", "img/universe.jpg", "img/eclipse.jpg"]


function move(n) {
    slideIndex += n;
    if (slideIndex > (images.length-1)) {
        slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = images.length - 1;
        }
        showSlides(slideIndex);
 };


function showSlides(slideIndex) {
            background = document.querySelector(".main-header");
            background.style.backgroundImage = "url("+ images[slideIndex]+ ")";
}