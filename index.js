var randomNumber1=Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png" ;

var randomImageSrc="images/" + randomDiceImage ;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc);

var randomNumber2=Math.floor(Math.random()*6) + 1;

var randomImageSrc2="images/dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins !" ;
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins !" ;
}else{
    document.querySelector("h1").innerHTML="Draw !"
}
