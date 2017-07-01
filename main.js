var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");



var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log("BasicCard:")
// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log("\nClozeCard:")
// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

BasicCard.prototype.printFront = function printFront() {
	console.log("\nBasicCard: " + this.front);
}
BasicCard.prototype.printBack = function printBack() {
	console.log("\nThe answer is: ", this.back);
}


ClozeCard.prototype.printFront = function printFront() {
	console.log("\nClozeCard: please fill in the blanks: \n");
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

var thirdPresident = BasicCard(
	"Who was the third president of the United States?", "Thomas Jefferson");
var thirdPresidentCloze = ClozeCard(
	"Thomas Jefferson was the first president of the United States.", "Thomas Jefferson");

thirdPresident.printFront();
thirdPresident.printBack();

thirdPresidentCloze.printFront();
thirdPresidentCloze.printBack();