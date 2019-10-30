const {Letter} = require("./Letter");

const Word = function(word) {

    this.letters = word.split("").map(function(char){
        return new Letter(char);
    })
};

Word.prototype.display = function () {
    // let displayString = "";
    // for (let i = 0; i < this.letters.length; i++) {
    //     const letter = this.letters[i];
    //     displayString += letter.getCurrentValue() + " ";
        
    // }

    // return displayString;
     console.log(this.getLetterValuesArray().join(' '));
};

Word.prototype.getLetterValuesArray = function(letter){
    return this.letters.map(letterObj => letterObj.getCurrentValue());
}

Word.prototype.checkLetter = function(letter){
    this.letters.map(function(letterObj){
        letterObj.checkLetter(letter);
    })
}

Word.prototype.wordCompleted = function(letter){
    var currentLetters = this.getLetterValuesArray();
    var doUnderscoresExist =  currentLetters.every(function(letter){
        return letter !== '_'
    });

    return doUnderscoresExist;
}

module.exports = Word;