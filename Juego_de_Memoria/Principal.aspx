<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Principal.aspx.cs" Inherits="Juego_de_Memoria.Principal" %>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript"></script>
    <script src="./js/Memoria.js" type="text/javascript"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/board.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>Juego de Memoria</title>
</head>

<body>
    <%--<button id="myButton">Click me</button>--%>

    <div style="min-width: 100%; max-width: 100%; padding-left: 400px;">
        <table>
            <thead>
                <tr>
                    <th><h1>Correctas : &nbsp;&nbsp;</h1></th>
                    <th><span id="SpCorrectas" style="color: brown;" />0</th>
                    <th></th>
                </tr>
                <tr>
                    <th><h1>Intentos : &nbsp;&nbsp;</h1></th>
                    <th><span id="SpErradas" style="color: brown;" />0</th>
                    <th></th>
                </tr>
                <tr>
                    <th>    <input type="button" value="reiniciar" onclick="openpopup()"></th>
                </tr>
            </thead>
        </table>
    </div>

    <main class="board-game">

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img class="back" src="./images/back/5.jpg" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/back/7.jpg" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/back/8.jpg" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/back/9.jpg" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/back/5.jpg" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/back/8.jpg" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/back/7.jpg" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/back/9.jpg" alt="Back">
            </div>
        </figure>

    </main>

</body>

</html>
