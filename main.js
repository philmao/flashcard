var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");



var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

BasicCard.prototype.printFront = function printFront() {
	console.log(this.front);
}
BasicCard.prototype.printBack = function printBack() {
	console.log("\nThe answer is: ", this.back);
}


ClozeCard.prototype.printFront = function printFront() {
	console.log("Please fill in the blanks: \n");
	console.log(this.partial);
}
ClozeCard.prototype.printBack = function printBack() {
	console.log("\nThe answer is: ", this.cloze);
	console.log(this.fullText);
}
firstPresident.printFront();
firstPresident.printBack();

firstPresidentCloze.printFront();
firstPresidentCloze.printBack();