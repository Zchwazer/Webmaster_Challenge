//! Challenge question for Young Web Master Camp 17
//? Question : Create cardAt in get "n" as card list 
//# Sort by sign -> Clover , Diamond , Heart , Spade
//# Sort by number -> 2,3,4,5,6,7,8,9,10,J,Q,K,A
//* Example : cardAt(0) = 2C , cardAt(35) = JH , cardAt(51) = AS
//~ Last card number 13 , 26 , 39 , 52
//----------------------------------------------------------------------------------//
//-- Solution 1 

function faceOfCard(x) {
    for (var count = 0; count <= x; count++) {
        if (x / 12 <= 1) {
            cardFace = 'Club';
        } else if (x / 12 <= 2) {
            cardFace = 'Diamond';
        } else if (x / 12 <= 3) {
            cardFace = 'Heart';
        } else if (x / 12 <= 4) {
            cardFace = 'Spade';
        }
    }
    return cardFace;
}

function numberOfCard(y) {
    for (var num = 0; num <= y; num++) {
        //# Clover
        if (y <= 8) {
            cardNumber = num + 2;
        } else if ((y > 8) && (y <= 12)) {
            cardNumber = specifyOfCard(y);
        } 
        //# Diamond
        else if ((y > 12) && (y <= 21)) {
            cardNumber = num - 11;
        } else if ((y > 21) && (y <= 25)) {
            cardNumber = specifyOfCard(y);
        } 
        //# Heart
        else if ((y > 25) && (y <= 34)) {
            cardNumber = num - 24;
        } else if ((y > 34) && (y <= 38)) {
            cardNumber = specifyOfCard(y);
        } 
        //# Spade
        else if ((y > 38) && (y <= 47)) {
            cardNumber = num - 37;
        } else if ((y > 47) && (y <= 51)) {
            cardNumber = specifyOfCard(y);
        }
        //# Another
        else {
            cardNumber ="Joker";
        }
    }
    return cardNumber;
}

function specifyOfCard(z) {
    var cardNumber = "";
    if (z == 9 || z == 22 || z == 35 || z == 48) {
        cardNumber = "Jack";
    } else if (z == 10 || z == 23 || z == 36 || z == 49) {
        cardNumber = "Queen";
    } else if (z == 11 || z == 24 || z == 37 || z == 50) {
        cardNumber = "King";
    } else if (z == 12 || z == 25 || z == 38 || z == 51) {
        cardNumber = "Ace";
    }
    return cardNumber;
}

function cardAt(n) {
    var cardFace = faceOfCard(n);
    var cardNumber = numberOfCard(n);

    console.log(cardNumber + " " + cardFace);
}

cardAt(0);
console.log('-----------------');
cardAt(1);
console.log('-----------------');
cardAt(34);
console.log('-----------------');
cardAt(35);
console.log('-----------------');