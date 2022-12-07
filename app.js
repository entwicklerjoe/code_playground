// JavaScript playground

/* I coding a deck(52). Counter and shuffler function.  */

/* const forms = ["spades", "hearts", "diamonds", "clubs"];

const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const decks = 52; */

const deck = {
    "spades": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    "hearts": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    "diamonds": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    "clubs": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
}

const aces = [deck.clubs[0], deck.hearts[0], deck.diamonds[0], deck.spades[0]];
const kings = [deck.clubs[12], deck.hearts[12], deck.diamonds[12], deck.spades[12]];
const queens = [deck.clubs[11], deck.hearts[11], deck.diamonds[11], deck.spades[11]];
const jacks = [deck.clubs[10], deck.hearts[10], deck.diamonds[10], deck.spades[10]];

let rndNum = Math.floor(Math.random() * 13);

let rndForm = Math.floor(Math.random() *4);

/* let deckSize = Object.keys(deck).length; */




document.write(rndForm);