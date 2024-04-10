/*Fucntion to generate a random number*/
function rollDice(){
    // Assigns variable randomNumber to a randomly generated number between 1-6
    var randomNumber = Math.floor(Math.random()*6)+1
    // Gets the image element bang to be used to generate the different outcomes
    var bangImage = document.getElementById("bang");
    bangImage.src = "bang" + randomNumber + ".jpg"
}