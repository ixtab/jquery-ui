$(document).ready(function () {
    
    $("#tooltip").tooltip({ // hay que poner el parent como selector.
        show: { effect: "blind", duration: 800 }, // efectos opcionales.
        position: { my: "left+15 center", at: "right center" },
        hide: { effect: "explode", duration: 1000 },
        content: "BOOOM" // Si no se pone content pone el title.
    });
    $(document).tooltip();  // Aqui funciona en default para todos los elementos que tienen title
                            
                            /*En el texto que lo recoge queda mal porque al estar centrado se pone
                            al principio del div contenedor  
                            Página para tooltips con un montón de plugins ya hechos:
                            http://iamceege.github.io/tooltipster/
                            */

    $("#popup").mouseover(function(){ // También en el parent.
        $(this).dialog({
                dialogClass: "no-close",
                hide: { effect: "explode", duration: 1000 },
                buttons: [{
                      text: "Ok",
                      icon: "ui-icon-heart",
                      click: function() {
                        $( this ).dialog( "close" );
                      }
                }]
            }
        );
    });



});