// "See More" click event
$("#button").click(function(){
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
  });