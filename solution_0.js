//! Challenge question for Young Web Master Camp 17
//? Question : Create cardAt in get "n" as card list 
//# Sort by sign -> Clover , Diamond , Heart , Spade
//# Sort by number -> 2,3,4,5,6,7,8,9,10,J,Q,K,A
//* Example : cardAt(0) = 2C , cardAt(35) = JH , cardAt(51) = AS
//~ Last card number 13 , 26 , 39 , 52
//----------------------------------------------------------------------------------//
//-- Solution 0

function faceOfCard(x) {
    for (var count = 0; count <= x; count++) {
        if (x / 12 <= 1) {
            cardFace = 'Clover';
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
    switch (y) {
        case y == 0:
            break;
        case y == 1:
            break;
        case y == 2:
            break;
        case y == 3:
            break;
        case y == 4:
            break;
        case y == 5:
            break;
        case y == 6:
            break;
        case y == 7:
            break;
        case y == 8:
            break;
        case y == 9:
            break;
        case y == 10:
            break;
        case y == 11:
            break;
        case y == 12:
            break;
        case y == 13:
            break;
        case y == 14:
            break;
        case y == 15:
            break;
        case y == 16:
            break;
        case y == 17:
            break;
        case y == 18:
            break;
        case y == 19:
            break;
        case y == 20:
            break;
        case y == 21:
            break;
        case y == 22:
            break;
        case y == 23:
            break;
        case y == 24:
            break;
        case y == 25:
            break;
        case y == 26:
            break;
        case y == 27:
            break;
        case y == 28:
            break;
        case y == 29:
            break;
        case y == 3:
            break;
        case y == 4:
            break;
        case y == 5:
            break;
        case y == 6:
            break;
        case y == 7:
            break;
        case y == 8:
            break;
        case y == 9:
            break;
        case y == 10:
            break;
        case y == 11:
            break;
        case y == 12:
            break;
        case y == 13:
            break;
        case y == 14:
            break;
        case y == 15:
            break;
        case y == 16:
            break;
        case y == 17:
            break;
        case y == 18:
            break;
        case y == 19:
            break;
        case y == 20:
            break;
        case y == 21:
            break;
        case y == 22:
            break;
        case y == 23:
            break;
        case y == 24:
            break;
        case y == 25:
            break;
        case y == 26:
            break;
    }
}