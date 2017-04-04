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
  var $spy = $(this).scrollspy('refresh')
})

    //Text rotate

    $(".text-rotate").Morphext({
        animation: "fadeIn", // Overrides default "bounceIn"
        separator: ",", // Overrides default ","
        speed: 3000, // Overrides default 2000
    });

    $('#mapa').hover(
      //$(this).toggleClass('mapa-contacto');
      function () {
        $(this).find('.mapa-contacto').fadeOut('slow');
      },
      function () {
        $(this).find('.mapa-contacto').fadeIn('slow');
      }
    );

})(jQuery);





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




 //custom slider javascript
$(function() {
  var tiempo= $('#tiempo');
  tiempo.slider({
    min:4,
    max:48,
    step:4
  });
  $('#tiempoValue').text(tiempo.val());


 tiempo.change(function(){
   $('#tiempoValue').text($(this).val());
 });



  var cantidad= $('#cantidad');
  cantidad.slider({
    min:1000000,
    max:10000000,
    step:1000000
  });

  $('#cantidadValue').text(cantidad.val());
  $('#cantidadValue').priceFormat({
    prefix: '$ ',
    centsSeparator: '.',
    thousandsSeparator: ','
  });

 $(cantidad).change(function(){
   $('#cantidadValue').text($(this).val()).priceFormat({prefix: '$ '});
 });

 $('#radioTiempo').text($('input[name=tiempo]:checked').val());
 $('#idRadioTiempo').text($('input[name=tiempo]:checked').attr("data-id"));

 $('input[type=radio][name=tiempo]').change(function() {
   $('#radioTiempo').text($(this).val());
   $('#idRadioTiempo').text($(this).attr("data-id"));
 });

});
