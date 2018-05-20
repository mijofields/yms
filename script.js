$(document).ready(function(){

    console.log("script.js running");
    
    $('#carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
  });