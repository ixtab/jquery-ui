$(document).ready(function() {

    $(".elemento_color").draggable({
        revert: true,

    });
    $(".elemento_color").resizable({
        aspectRatio: true,
        minHeight: 40,
        maxWidth: 276,
        resize: function() {
            var elemento_cambiado = $(this);
            preparar_div_color(elemento_cambiado);
        }
    })

    $("#piscina").droppable({
        drop: function(event, ui) {
            var div_movido = ui.draggable;
            var color_pizarra = $(this).css("background-color").slice(4, -1).split(",");
            var color_div_movido = div_movido.css("background-color").slice(4, -1).split(",");
            var color_rgb = calcular_fondo_pizarra(color_pizarra, color_div_movido);
            $(this).css("background-color", color_rgb);

            div_movido.effect("size", {
                to: {
                    width: 148,
                    height: 148
                }
            }, 1000); // Efecto UI. Si se quiere ocultar/mostrar es .toggle("size"), {}..., en vez de .effect
            if (div_movido.attr("id") == "rojo") {
                div_movido.css("background", "#f00");
            } else if (div_movido.attr("id") == "verde") {
                div_movido.css("background", "#0f0");
            } else {
                div_movido.css("background", "#00f");
            }
        }
    });

});

function preparar_div_color(esto) {

    if (esto.attr("id") == "rojo") {
        cambiar_rojo(esto);
    } else if (esto.attr("id") == "verde") {
        cambiar_verde(esto);
    } else {
        cambiar_azul(esto);
    }

}

function cambiar_rojo(esto) {

    var size = esto.css("width").split("p")[0];
    var resultado;
    var color_rgb;

    if (size < 148) {
        resultado = (size - 40) * 2;
        color_rgb = "rgb(" + resultado + ",0,0)";
        esto.css("background-color", color_rgb);
    } else if (size > 148) {
        resultado = ((size - 148) * 2) - 1;
        color_rgb = "rgb(255, " + resultado + "," + resultado + ")";
        esto.css("background-color", color_rgb);
    } else {
        esto.css("background-color", "rgb(255,0,0)");
    }
}

function cambiar_verde(esto) {

    var size = esto.css("width").split("p")[0];
    var resultado;
    var color_rgb;

    if (size < 148) {
        resultado = (size - 40) * 2;
        color_rgb = "rgb(0," + resultado + ",0)";
        esto.css("background-color", color_rgb);
    } else if (size > 148) {
        resultado = ((size - 148) * 2) - 1;
        color_rgb = "rgb(" + resultado + ",255," + resultado + ")";
        esto.css("background-color", color_rgb);
    } else {
        esto.css("background-color", "rgb(0,255,0)");
    }
}

function cambiar_azul(esto) {

    var size = esto.css("width").split("p")[0];
    var resultado;
    var color_rgb;

    if (size < 148) {
        resultado = (size - 40) * 2;
        color_rgb = "rgb(0,0," + resultado + ")";
        esto.css("background-color", color_rgb);
    } else if (size > 148) {
        resultado = ((size - 148) * 2) - 1;
        color_rgb = "rgb(" + resultado + "," + resultado + ",255)";
        esto.css("background-color", color_rgb);
    } else {
        esto.css("background-color", "rgb(0,0,255)");
    }
}

function calcular_fondo_pizarra(fondo_pizarra, fondo_div) {
    var valor_rgb;
    var resultado = [];
    for (var i = 0; i <= 2; i++) {
        if (fondo_div[i] > 0) {
            if (Math.round((parseInt(fondo_div[i])) / 4) + parseInt(fondo_pizarra[i]) >= 255) {
                resultado[i] = 255;
            } else {
                resultado[i] = Math.round((parseInt(fondo_div[i])) / 4) + parseInt(fondo_pizarra[i]);
            }
        } else if (fondo_div[i] == 0) {
            resultado[i] = parseInt(fondo_pizarra[i] / 3);
        }
    }

    valor_rgb =
        "rgb(" +
        resultado[0] +
        "," +
        resultado[1] +
        "," +
        resultado[2] +
        ")";
    console.log(valor_rgb);

    return valor_rgb;

}