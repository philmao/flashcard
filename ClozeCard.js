
var ClozeCard = function(fullText, cloze) {
	if(fullText.indexOf(cloze) < 0) {
		console.log("Error: cloze not part of full text!");
	}
	else {
		this.fullText = fullText;
		this.partial = fullText.replace(cloze, "...");
		this.cloze = cloze;
	}
}
module.exports = ClozeCard;