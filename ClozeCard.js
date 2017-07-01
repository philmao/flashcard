
var ClozeCard = function(fullText, cloze) {
	if(fullText.indexOf(cloze) < 0) {
		console.log("\nError: cloze not part of full text!\n");
	}
	else {
		if(this instanceof ClozeCard) {
			this.fullText = fullText;
			this.partial = fullText.replace(cloze, "...");
			this.cloze = cloze;
		} else {
			return new ClozeCard(fullText, cloze);
		}

	}
}
module.exports = ClozeCard;