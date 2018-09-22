$(document).ready(function() {

    $("#tooltip").tooltip({ // hay que poner el parent como selector.
        show: { effect: "blind", duration: 800 }, // efectos opcionales.
        position: { my: "left+15 center", at: "right center" },
        hide: { effect: "explode", duration: 1000 },
        content: "BOOOM" // Si no se pone content pone el title.
    });
    $(document).tooltip(); // Aqui funciona en default para todos los elementos que tienen title

    /*En el texto que lo recoge queda mal porque al estar centrado se pone
    al principio del div contenedor  
    Página para tooltips con un montón de plugins ya hechos:
    http://iamceege.github.io/tooltipster/
    */

    $("#popup").mouseover(function() { // También en el parent.
        $(this).dialog({
            dialogClass: "no-close",
            hide: { effect: "explode", duration: 1000 },
            buttons: [{
                text: "Ok",
                icon: "ui-icon-heart",
                click: function() {
                    $(this).dialog("close");
                }
            }]
        });
    });

    $("#calendario").datepicker();
    $.datepicker.setDefaults($.datepicker.regional["eu"]);
    $("#calendario2").datepicker({
        dateFormat: "dd/mm/yy DD",
        // dayNames: ["Domingo", "Lunes", "Martes", "Miercoleando", "Jueves", "Viernes", "Sabadete"],
        firstDay: 1, // Para que el lunes sea el primer día.
        //dayNamesMin: ["Do", "Lu", "Ma", "Mie", "Ju", "Vi", "Sa"],
        //monthNames: ["Enero", "Febrero", 3, 4, 5, 6, 7, 8, "Septiembre", 10, 11, 12],
        onSelect: (function() {
            var fecha = $(this).datepicker("getDate");
            console.log(fecha);
            $(this).html("<h2>" + fecha + "</h2>");

        })
    });
    $.datepicker.setDefaults($.datepicker.regional["eu"]);
    $('#inputDate').datepicker({
        format: 'm/d/yy',
        date: $('#inputDate').val(),
        current: $('#inputDate').val(),
        starts: 1,
        position: 'r',
        changeMonth: true,
        changeYear: true,
        onBeforeShow: function() {
            $('#inputDate').datepickerSetDate($('#inputDate').val(), true);
        }
    });

});