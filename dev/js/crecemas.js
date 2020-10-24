(function( $ ) {
    "use strict"; // Start of use strict
    $('#main-slider.carousel').carousel({
        interval: 8000
    });

    
    //Text rotate
    if($('.text-rotate').length){
      $(".text-rotate").Morphext({
          animation: "fadeIn", // Overrides default "bounceIn"
          separator: ",", // Overrides default ","
          speed: 3000, // Overrides default 2000
      });
    }
   
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh');
  });

   
})(jQuery);


$( document ).on('click','.page-scroll',function(){
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

var onSubmit = function(token) {
    var datos=$("#form-contact").serializeArray();
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
          type: "GET",
          url: "contacto.php",
          data: datos, // Adjuntar los campos del formulario enviado.
          dataType : "html",
          success: function(data)
          {
            $('.response').html(html).fadeIn('slow');
            $("#form-contact")[0].reset();
          },
          error:function(){
            $('.response').html(error).fadeIn('slow');
          }

    });

 };

 if($('#form-contact').length)
 {
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
 }