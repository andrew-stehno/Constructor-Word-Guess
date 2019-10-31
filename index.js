const Word = require('./Word');
const inquirer = require('inquirer');

const optionsArray = ["hello", "goodbye", "spring", "summer", "autumn", "winter", "day", "month", "year", "decade"];
let count = 0;

function start() {
    count = 0;
    let i = Math.floor(Math.random() * optionsArray.length);
    var myWord = optionsArray[i];
    var ourWord = generateWord(myWord)
    ourWord.display();
    chooseLetter();


function chooseLetter() {
    inquirer.prompt([
        {
            type: "input",
            name: "letterGuessed",
            message: "PLease guess a letter:"
        }
    ]).then(function ({ letterGuessed }) {
        console.log(letterGuessed);
        ourWord.checkLetter(letterGuessed);
        ourWord.display();
        count++;

        if (ourWord.wordCompleted()) {
            console.log('\n' + 'You win!' + '\n');
            start();
        }
        else if (count === 10) {
            endGame();
        }
        else {
            chooseLetter();
        }

    }).catch(function (error) {
        console.log(error);
    })
}

function generateWord(word) {
    return new Word(word);
}

function endGame() {
    console.log("\n" + "You have ran out of guesses!" + "\n");
    start();
}

};
start();

