$(document).ready(function() {

    var elemento = $(".elemento");
    elemento.draggable(); // Mueve un elemento por la pág.
    elemento.resizable(); // Deja cambiar el tamaño

    $( document ).tooltip();

    $(".selectable").selectable();

    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(event, ui) {
            console.log(event, ui);
            console.log(ui.draggable[0].id)
            $(this).css("background", "lightcyan");
            $("#elemento-movido").hide();
        },
        accept: "#elemento-movido"
    });

    $(".lista").sortable({
        update: function(event, ui) {
            console.log("ha cambiado la lista.\n", event, "\n", ui);
            var aciertos = 0;
            $(".lista li").each(function(i) {
                if (i == $(this).attr("id")) {
                    aciertos++
                    if (aciertos == 10) {
                        desapareceJuego();
                    }
                }
            });
        }
    });

    $("li").mouseover(function() {
            $(this).css("background", "#ddf")
                .css("cursor", "grab");
        })
        .mousedown(function() {
            $(this).css("cursor", "grabbing");
        })
        .mouseout(function() {
            $(this).css("background", "inherit");
        });
});

function desapareceJuego() {
    alert("Biennnn!!!\nLo has conseguido!!!");
    $(".lista li").each(function(i) {
        if (i % 2 == 0) {
            $(this).animate({
                border: "0",
                marginLeft: "2000px",
                height: "0"
            }, 2000);
        } else {
            $(this).animate({
                border: "0",
                marginLeft: "-2000px",
                height: "0"
            }, 2000);
        }
    });
    $("#juego").animate({ height: "0" }, 4000).hide(4000);
}