var playerTurn, moves, isGameOver, span, restartButtton;
playerTurn = "X";
moves = 0;
isGameOver = false;
span = document.getElementsByTagName("Span");
restartButtton='<button'

function play(y){
    if(y.dataset.player == "none" &&
    window.isGameOver == false){
        y.innerHTML = playerTurn;
        y.dataset.player = playerTurn;
        moves++;
        if(playerTurn =="X"){
            playerTurn = "O";
        }else if (playerTurn == "O")
        playerTurn ="X";
    }
}
/*Win Types */
checkWinner(1, 2, 3);
checkWinner(4, 5, 6);
checkWinner(7, 8, 9);
checkWinner(2, 5, 8);
checkWinner(3, 5, 7);
checkWinner(1, 5, 9);
/* No Winner */
if(moves==9&& isGameOver==false){
    draw();
}
function checkWinner(a,b,c){
    a--;
    b--;
    c--;
    if((spam[a].dataset.player === span[b].dataset.player)&&
    (spam[b].dataset.player === span[c].dataset.player)&&
    (spam[a].dataset.player === span[c].dataset.player)&&
    (spam[c].dataset.player === span[a].dataset.player)&&
    (spam[a].dataset.player === "X")|| (spam[a].dataset.player === "O")&& isGameOver == false)
    {
        span[a].parentNode.className +="activeBox";
        span[b].parentNode.className +="activeBox";
        span[c].parentNode.className +="activeBox";
        isGameOver(a);
    }
}
function playAgain(){
    document.getElementsByClassName("alert")
    [0].parentNode.removeChild(document.getElementsByClassName("alert")[0]);
    restartGame();
    window.isGameOver = false;
    for(var k = 0;k<span.length; k++){
        span[k].parentNode.className.replace("activeBox","");
    }
}
function restartGame(){
    for(i=0;i<span.length;i++)
    {
        span[i].dataset.player=" none";
        span[i].innerHTML ="&nbps";
    }
    playerTurn= "X";
}
function gameOver(){
    var gameOverAlertElement ="<b> Game Over</b><br><br>Player"+
    span[a].dataset.player.toUpperCase()+'Win !!!<br><br>'+restartButtton;
    var div =document.createElement("div");
    div.className ="alert";
    div.innerHTML =gameOverAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.isGameOver =true;
    moves =0;
}
function draw(){
    var drawAlertElement='<b>DRAW!!!</b> <br><br></br>'+restartButtton;
    var div = document.createElement("div");
    div.className="alert";
    div.innerHTML = drawAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.isGameOver = true;
    moves =0;
}