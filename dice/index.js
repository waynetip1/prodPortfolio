var playerOneWin = 0;
var playerTwoWin = 0;

document.querySelector(".btn").addEventListener("click", function(){

  // create random die rolls
  var randomNumber1 = Math.floor((Math.random()*6))+1;
  var randomNumber2 = Math.floor((Math.random()*6))+1;

  // select the die image based on the roll
  var diceImg1 = "images/dice" + randomNumber1 + ".png";
  var diceImg2 = "images/dice" + randomNumber2 + ".png";

  // change the html img
  document.querySelector(".img1").setAttribute("src", diceImg1);
  document.querySelector(".img2").setAttribute("src", diceImg2);

  // determine the winner
  if (randomNumber1 > randomNumber2){
    playerOneWin ++;
    document.querySelector("h1").innerHTML = "Player 1 Wins";
    document.querySelector(".player-1").innerHTML = playerOneWin;

  }else if (randomNumber1 < randomNumber2) {
    playerTwoWin ++;
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    document.querySelector(".player-2").innerHTML = playerTwoWin;


  }else
  document.querySelector("h1").innerHTML = "Draw";


});
