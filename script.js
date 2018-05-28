$(document).ready(function() {

    console.log("script.js is running");

    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $(".regular").on('click', function() {


        $(".regular").slick('slickPlay');
        console.log("restart autoplay");

    });


});