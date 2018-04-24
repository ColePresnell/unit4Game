// Define variables





//create target number ranging from 19-120


var crystals = $("#crystals");

var counter = 0;
var targetNumber;

var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;

var crystalValue = 0;
var wins = 0;
var losses = 0;

$("#counterTotal").text(crystalValue);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

//create crystals with values ranging from 1-12, assigned randomly

// var numberOptions = Math.ceil((Math.random() * 11) + 1);


//For each random number chosen, we will create an imageCrystal

// "New Game" button

$(document).on("click", ".numButton", function () {
    targetNumber = Math.floor((Math.random() * 100) + 19);
    // takes the random number and prints it to the html
    $("#numberToGuess").text(targetNumber);
    $("#one").removeClass("newCrystalOne");
    $("#one").addClass("classOne");
    $("#two").removeClass("newCrystalTwo");
    $("#two").addClass("classTwo");
    $("#three").removeClass("newCrystalThree");
    $("#three").addClass("classThree");
    $("#four").removeClass("newCrystalFour");
    $("#four").addClass("classFour");
    crystalValue = 0;

});


// Here we are taking a click on the first crystal and assigning it a random number between 1-12. We are taking the random number and assigning it to a separate variable. Next, we are removing the class that allows us to generate a random number - we want this crystal to only produce the same number until the end of the game. Finally, we are adding the integer result to the running total of the total crystalValue. 
$(document).on("click", ".classOne", function () {
    var numberOptions = Math.ceil((Math.random() * 11) + 1);
    crystalOne = numberOptions;
    $("#one").removeClass("classOne");
    $("#one").addClass("newCrystalOne");
    crystalValue += crystalOne;
    console.log(crystalOne);

    // Conditional that identifies whether the user has hit the target number and wins, or goes over the target number and loses

    if (crystalValue == targetNumber) {
        alert("You win!!");
        wins++;
        console.log(wins);
    } else if (crystalValue > targetNumber) {
        alert("You lose!!!");
        losses++;
        console.log(losses);
    };
    $("#counterTotal").text(crystalValue);
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

});

// We have removed the ability to generate a random number on crystal one, but we still want to be able to click on it so that we can add the assigned value of the crystal to the running total.
$(document).on("click", ".newCrystalOne", function () {
    crystalValue += crystalOne;
    console.log(crystalOne);
    console.log(crystalValue);

    if (crystalValue == targetNumber) {
        alert("You win!!");
        wins++;
        console.log(wins);
    } else if (crystalValue > targetNumber) {
        alert("You lose!!!");
        losses++;
        console.log(losses);
    };
    $("#counterTotal").text(crystalValue);
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
});

//Doing the same random number function for crystal two that we did for the first crystal
$(document).on("click", ".classTwo", function () {
    var numberOptions = Math.ceil((Math.random() * 11) + 1);
    crystalTwo = numberOptions;
    $("#two").removeClass("classTwo");
    $("#two").addClass("newCrystalTwo");
    crystalValue += crystalTwo;
    console.log(crystalTwo);
    console.log(crystalValue);

    if (crystalValue == targetNumber) {
        alert("You win!!");
        wins++;
        console.log(wins);
    } else if (crystalValue > targetNumber) {
        alert("You lose!!!");
        losses++;
        console.log(losses);
    };
    $("#counterTotal").text(crystalValue);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

});

// Allowing crystal two to add to the running total by adding the same number after the first click.
$(document).on("click", ".newCrystalTwo", function () {
    crystalValue += crystalTwo;
    console.log(crystalTwo);
    console.log(crystalValue);

    if (crystalValue == targetNumber) {
        alert("You win!!");
        wins++;
        console.log(wins);
    } else if (crystalValue > targetNumber) {
        alert("You lose!!!");
        losses++;
        console.log(losses);
    };
    $("#counterTotal").text(crystalValue);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);
});

//Doing the same random number function for crystal three that we did for the others
$(document).on("click", ".classThree", function () {
    var numberOptions = Math.ceil((Math.random() * 11) + 1);
    crystalThree = numberOptions;
    $("#three").removeClass("classThree");
    $("#three").addClass("newCrystalThree");
    crystalValue += crystalThree;
    console.log(crystalThree);
    console.log(crystalValue);

    if (crystalValue == targetNumber) {
        alert("You win!!");
        wins++;
        console.log(wins);
    } else if (crystalValue > targetNumber) {
        alert("You lose!!!");
        losses++;
        console.log(losses);
    };
    $("#counterTotal").text(crystalValue);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

});

// Allowing crystal three to add to the running total by adding the same number after the first click.
$(document).on("click", ".newCrystalThree", function () {
    crystalValue += crystalThree;
    console.log(crystalThree);
    console.log(crystalValue);

    if (crystalValue == targetNumber) {
        alert("You win!!");
        wins++;
        console.log(wins);
    } else if (crystalValue > targetNumber) {
        alert("You lose!!!");
        losses++;
        console.log(losses);
    };
    $("#counterTotal").text(crystalValue);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);
});

//Doing the same random number function for crystal four that we did for the other
$(document).on("click", ".classFour", function () {
    var numberOptions = Math.ceil((Math.random() * 11) + 1);
    crystalFour = numberOptions;
    $("#four").removeClass("classFour");
    $("#four").addClass("newCrystalFour");
    crystalValue += crystalFour;
    console.log(crystalFour);
    console.log(crystalValue);

    if (crystalValue == targetNumber) {
        alert("You win!!");
        wins++;
        console.log(wins);
    } else if (crystalValue > targetNumber) {
        alert("You lose!!!");
        losses++;
        console.log(losses);
    };
    $("#counterTotal").text(crystalValue);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);
});

// Allowing crystal four to add to the running total by adding the same number after the first click.
$(document).on("click", ".newCrystalFour", function () {
    crystalValue += crystalFour;
    console.log(crystalFour);
    console.log(crystalValue);

    if (crystalValue == targetNumber) {
        alert("You win!!");
        wins++;
        console.log(wins);
    } else if (crystalValue > targetNumber) {
        alert("You lose!!!");
        losses++;
        console.log(losses);
    };
    $("#counterTotal").text(crystalValue);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);
});