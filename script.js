$(document).ready(function() {

    console.log("script.js is running");

    $('.regular').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        centerMode: true
    });
});