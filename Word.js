let letter = require("./Letter");

let Word = function(word) {
    this.letter = word.split("").map(function(char){
        return new letter(char);
    })
};

Word.prototype.display = function () {
    let displayString = "";

    return 
};