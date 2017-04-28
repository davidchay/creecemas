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


})(jQuery);


var onSubmit = function(token) {
    var url = "./contacto.php";
    var nombre=$("#nombre").val();
    var html='<div class="alert alert-success alert-dismissible fade show" role="alert">';
    html+='<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
    html+='<span aria-hidden="true">&times;</span></button>';
    html+='<h5><i class="fa fa-smile-o" aria-hidden="true"></i> En hora buena, tu mensaje se ha enviado.</h5><span style="text-transform:capitalize;">'+nombre+'</span>. Gracias por escribirnos, nostros te responderemos a la brevedad posible.</div>';

    var error='<div class="alert alert-danger alert-dismissible fade show" role="alert">';
    error+='<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
    error+='<span aria-hidden="true">&times;</span></button>';
    error+='<h5><i class="fa fa-frown-o" aria-hidden="true"></i> Ha ocurrido un problema. </h5> <span style="text-transform:capitalize;">'+nombre+'</span>. Nos apena decirte que tu mensaje no pudo ser enviado, por favor comunicate con nosotros por teléfono o por otro medio. Gracias por tu comprensión.</div>';
    $.ajax({
          type: "POST",
          url: url,
          data: $("#form-contact").serialize(), // Adjuntar los campos del formulario enviado.
          success: function(data)
          {
            $('.response').html(html).fadeIn('slow');
          },
          error:function(){
            $('.response').html(error).fadeIn('slow');
          }

    });
 };

 $('#form-contact').validate({
   messages: {
     nombre: {
       required: "Ingrese su nombre por favor",
     },
     email:{
       email: "Ingrese email valido"
     },
     tel:{
       required:"Ingrese su numero de telefono donde lo podamos contactar"
     },
     asunto:{
       required:"Por favor ingrese el motivo por el cual nos contacta"
     },
     mensaje:{
       required:"Por favor escriba sus dudas o comentarios, será un placer ayudarle"
     }
   },
   submitHandler: function() {
     grecaptcha.execute();
   }
 });



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
