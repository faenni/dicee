var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageSrc1="./images/dice"+randomNumber1+".png";

document.querySelector("img.img1").setAttribute("src", imageSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSrc2="./images/dice"+randomNumber2+".png";

document.querySelector("img.img2").setAttribute("src", imageSrc2);

if (randomNumber2 < randomNumber1) {
   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
 document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
 document.querySelector("h1").innerHTML = "Draw!";
}
