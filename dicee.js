var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomImage1src = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
console.log(image1);
image1.setAttribute("src",randomImage1src);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2src = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2src);

if(randomNumber1 > randomNumber2){
  document.querySelectorAll("h1").innerHTML = "PLAYER 1 WINS";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}

else{
  document.querySelector("h1").innerHTML = "DRAW";
}
