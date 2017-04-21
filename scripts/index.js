//Carousel

$(document).ready(function () {
    var index = 0;
    var slides = $('.slide');
    var numImages = slides.length;

    $(".slide").hide();
    $("#slideOne").show();

    function carousel() {
        $(slides[index]).hide();
        index = (index + 1) % numImages;
        $(slides[index]).show();
    }

    timer = setInterval(carousel, 3000);
});



 