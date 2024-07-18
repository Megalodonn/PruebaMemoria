$(document).ready(function () {
    $('#myButton').click(function () {
        alert('Button clicked!');
    });

    $.ajax(
        {
            url: "Prueba.aspx/GetEstado",
            data: '{"Intentos":"' + "" +
                '","Correctas":"' + "" +
                '"}',

            dataType: "json",
            type: "post",
            contentType: "application/json; charset=utf-8",
            complete: function (jsondata, stat) {
                debugger
                if (stat == "success") {

                    var ss = JSON.parse(jsondata.responseText).d;

                }
                else {

                    alert(JSON.parse(jsondata.responseText).Message);
                }
            },
            error: function (xhr, status, error) {
                trataErro(xhr);
            }
        }
    );

    //canPlay = false;

    //card1 = null;
    //card2 = null;

    //availableImages = [7, 9, 8, 5];
    //orderForThisRound = [];
    //cards = Array.from(document.querySelectorAll(".board-game figure"));

    //maxPairNumber = availableImages.length;

    //startGame();

});