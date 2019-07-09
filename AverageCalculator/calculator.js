numAvg = guess1, guess2;

var display = alert ("Give Me 2 Numbers and I Will Find The Average of the 2 Numbers");

var guess1 = prompt ("Give Me a Number!");
guess1 = Number(guess1);

var guess2 = prompt ("Give Me Another Number!");
guess2 = Number(guess2);
calNumber(guess1, guess2);

function calNumber (guess1, guess2) {

    numAvg = (guess1 + guess2) /2;
    var display = alert ("The Average Out of the 2 Numbers is: " + numAvg);

}