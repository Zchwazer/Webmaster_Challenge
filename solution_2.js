//! Challenge question for Young Web Master Camp 17
//? Question : Create cardAt in get "n" as card list 
//# Sort by sign -> Clover , Diamond , Heart , Spade
//# Sort by number -> 2,3,4,5,6,7,8,9,10,J,Q,K,A
//* Example : cardAt(0) = 2C , cardAt(35) = JH , cardAt(51) = AS
//~ Last card number 13 , 26 , 39 , 52
//----------------------------------------------------------------------------------//
//-- Solution 2

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