(function( $ ) {
    "use strict"; // Start of use strict
    $('#main-slider.carousel').carousel({
        interval: 8000
    });
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh');
    });

    //Text rotate
    if($('.text-rotate').length){
      $(".text-rotate").Morphext({
          animation: "fadeIn", // Overrides default "bounceIn"
          separator: ",", // Overrides default ","
          speed: 3000, // Overrides default 2000
      });
    }
    if($('#mapa').length){
      $('#mapa').hover(
        function () {
          $(this).find('.mapa-contacto').fadeOut('slow');
        },
        function () {
          $(this).find('.mapa-contacto').fadeIn('slow');
        }
      );
    }


    function contactar(){
      console.log("Ejecuta contactar");
      console.log(token);
      $("#form-contact").submit();
      alert("Se hizo contacto");
    }
    




})(jQuery);

$( document ).ready(function() {
    $("#contactarSubmit").on('click', function (event) {
      console.log('Entra a validatre');
      event.preventDefault();
      if (!document.getElementById('nombre').value) {
        alert("You must add text to the required field");
      } else {
        grecaptcha.execute();
      }
    });
});

 $(function () { $("input,select,textarea").not("[type=button]").jqBootstrapValidation(); } );

var map;
var contentMap="<h5>Cree Ce Más, S.A. de C.V.</h5>";
contentMap+="<p>23 calle oriente no. 91, colonia Centro, Tapachula, Chiapas.</p>";
contentMap+="<p>TEL: (962) 1180560; CEL: 962 695 6131</p>";
$(document).ready(function(){
  //prettyPrint();
  map = new GMaps({
    div: 'map',
    lat: 14.915300,
    lng: -92.251479,
    scrollwheel: false,
    scroll:{x:$(window).scrollLeft(),y:$(window).scrollTop()},
    zoom: 16,
  });

  map.addMarker({
    lat: 14.915300,
    lng: -92.251479,
    title: 'Cree Ce Más, S.A. de C.V.',
    infoWindow: {
      content: contentMap
    }
  });
});

//ID KEY
//AIzaSyDsvPx6JrySQxAm9Q94aWXmAMXugaRXyMY
//AIzaSyDsvPx6JrySQxAm9Q94aWXmAMXugaRXyMY
