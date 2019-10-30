const Word = require('./Word');
const inquirer = require('inquirer');

const myWord = "goodbye";
var ourWord = generateWord(myWord)

function chooseLetter() {
    inquirer.prompt([
        {
            type: "input",
            name: "letterGuessed",
            message: "PLease guess a letter"
        }
    ]).then(function({letterGuessed}){
        console.log(letterGuessed);
        ourWord.checkLetter(letterGuessed);
        ourWord.display();

        if(ourWord.wordCompleted()){
            console.log('You win');
        }
        else {
            chooseLetter();
        }

    }).catch(function(error){
        console.log(error);
    })
};

function generateWord(word) {
    return new Word(word);
}




ourWord.display();
chooseLetter();

