var correctas = 0;
var erradas = 0;

$(document).ready(function () {

    canPlay = false;

    card1 = null;
    card2 = null;

    availableImages = [7, 9, 8, 5];
    orderForThisRound = [];
    cards = Array.from(document.querySelectorAll(".board-game figure"));

    maxPairNumber = availableImages.length;

    startGame();
});

function startGame() {
    foundPairs = 0;
    setNewOrder();
    setImagesInCards();
    openCards();
}

function setNewOrder() {
    
    orderForThisRound = availableImages.concat(availableImages);
    orderForThisRound.sort(() => Math.random() - 0.5);
}

function setImagesInCards() {
    
    for (const key in cards) {

        const card = cards[key];
        const image = orderForThisRound[key];
        const imgLabel = card.children[1].children[0];

        card.dataset.image = image;
        /*imgLabel.src = `https://randomfox.ca/images/${image}.jpg`;*/
        imgLabel.src = `./images/${image}.jpg`;
        /*imgLabel.src = './images/back/${image}.jpg';*/

    }

}

function openCards() {

    cards.forEach(card => card.classList.add("opened"));

    setTimeout(() => {
        
        closeCards();
    }, 2000);

}

function closeCards() {

    cards.forEach(card => card.classList.remove("opened"));
    addClickEvents();
    canPlay = true;

}

function addClickEvents() {

    cards.forEach(_this => _this.addEventListener("click", flipCard.bind(this)));

}

function removeClickEvents() {

    cards.forEach(_this => _this.removeEventListener("click", flipCard));

}

function flipCard(e) {

    const clickedCard = e.target;

    if (canPlay && !clickedCard.classList.contains("opened")) {

        clickedCard.classList.add("opened");
        checkPair(clickedCard.dataset.image);

    }

}

function checkPair(image) {

    if (!card1) card1 = image;
    else card2 = image;

    if (card1 && card2) {

        if (card1 == card2) {

            canPlay = false;
            setTimeout(checkIfWon.bind(this), 300)
            correctas = correctas + 1;
            erradas = erradas + 1;
        }
        else {
            erradas = erradas + 1;
            canPlay = false;
            setTimeout(resetOpenedCards.bind(this), 800)

        }

    } else {
        erradas = erradas + 1;
    }
    $("#SpCorrectas").html(correctas);
    $("#SpErradas").html(erradas);
    Estado(correctas, erradas);
}

function resetOpenedCards() {

    const firstOpened = document.querySelector(`.board-game figure.opened[data-image='${card1}']`);
    const secondOpened = document.querySelector(`.board-game figure.opened[data-image='${card2}']`);

    firstOpened.classList.remove("opened");
    secondOpened.classList.remove("opened");

    card1 = null;
    card2 = null;

    canPlay = true;

}

function checkIfWon() {
    debugger
    foundPairs++;

    card1 = null;
    card2 = null;
    canPlay = true;

    if (maxPairNumber == foundPairs) {

        alert("¡Ganaste!");
        setNewGame();

    }

}

function setNewGame() {

    removeClickEvents();
    cards.forEach(card => card.classList.remove("opened"));

    setTimeout(startGame.bind(this), 500);
    correctas = 0;
    erradas = 0;
    $("#SpCorrectas").html(correctas);
    $("#SpErradas").html(erradas);
}

function Estado(correctas, erradas ) {

    $.ajax(
        {
            url: "Principal.aspx/GetEstado",
            data: '{"Intentos":"' + erradas +
                '","Correctas":"' + correctas +
                '"}',

            dataType: "json",
            type: "post",
            contentType: "application/json; charset=utf-8",
            complete: function (jsondata, stat) {
                
                if (stat == "success") {
                    
                    var ss = JSON.parse(jsondata.responseText).d;
                    //if (ss.sortOrder.indexOf("File") > -1) {
                        
                    //    var ruta = ss.sortOrder.replace("~/", "../../");
                    //    window.open(ruta);
                    //}
                    //else
                    //    jQuery("#list")[0].addJSONData(ss);
                    
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
}
function openpopup() {
    debugger
    foundPairs++;

    card1 = null;
    card2 = null;
    canPlay = true;


        setNewGame();

    
}