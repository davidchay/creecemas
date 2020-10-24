(function( $ ) {
    "use strict"; // Start of use strict
  
    /*Helper*/ 
    Handlebars.registerHelper("currentDate", function() {
        var d = new Date();
       return d.getFullYear();
       
    });

    /*LOAD Templates Handlebars*/ 
    
    if($('#header-contact').length)
    {
        $.getJSON("../data/datosEmpresa.json", function(datosEmpresa){
        var source = datosEmpresa;
        $.ajax('./templates/header-contact.hbs').done(function(data) 
        {
            var footer = Handlebars.compile(data);
            var html_data = footer(source);
            $("#header-contact").append(html_data);
            $("#header-contact").show();  
        });
        });
    }

    if($('#navigation').length)
    {
        $.getJSON("../data/datosEmpresa.json", function(datosEmpresa){
            var source = datosEmpresa;
            $.ajax('./templates/navigation.hbs').done(function(data) 
            {
                var footer = Handlebars.compile(data);
                var html_data = footer(source);
                $("#navigation").append(html_data);
                $("#navigation").show();  
            });
        });
    }

    if($('#section-footer').length)
    {
        $.getJSON("../data/datosEmpresa.json", function(datosEmpresa){
            var source = datosEmpresa;
            $.ajax('./templates/section-footer.hbs').done(function(data) 
            {
                var footer = Handlebars.compile(data);
                var html_data = footer(source);
                $("#section-footer").append(html_data);
                $("#section-footer").show();  
            });
        });
    }

    if($('#cta-footer').length)
    {
        $.getJSON("../data/datosEmpresa.json", function(datosEmpresa){
            var source = datosEmpresa;
            $.ajax('./templates/cta-footer.hbs').done(function(data) 
            {
                var footer = Handlebars.compile(data);
                var html_data = footer(source);
                $("#cta-footer").append(html_data);
                $("#cta-footer").show();  
            });
        });
    }

    if($('#contacto-info').length)
    {
        $.getJSON("../data/datosEmpresa.json", function(datosEmpresa){
            var source = datosEmpresa;
            $.ajax('./templates/contacto-info.hbs').done(function(data) 
            {
                var footer = Handlebars.compile(data);
                var html_data = footer(source);
                $("#contacto-info").append(html_data);
                $("#contacto-info").show();  
            });
        });
    }

    if($('#ubicacion').length)
    {
        $.getJSON("../data/datosEmpresa.json", function(datosEmpresa){
            var source = datosEmpresa;
            $.ajax('./templates/ubicacion-map.hbs').done(function(data) 
            {
                var footer = Handlebars.compile(data);
                var html_data = footer(source);
                $("#ubicacion").append(html_data);
                $("#ubicacion").show();  
            });
        });
    }


    //Funcion menu active item
    Handlebars.registerHelper('isMenuActive', function (value) {
    if(typeof value === "object") {
      var active=false;
      $.each(value, function(index, itemValue) {
        if(itemValue.route === window.location.pathname){
          return active = true;
        } 
      }); 
      return (active) ? "active" : '';  
    } else {
      return (value === window.location.pathname) ? "active" : '';  
    }
  });


})(jQuery);