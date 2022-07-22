// To get values of buttons
const buttonElements = document.querySelectorAll('button');
// Below word need to be guess
const newWord = 'shout';
// To get values of rows 
const wordElements = document.querySelectorAll('.word-row');
let gameOver = false;
let correctAnswer = false;
let row = 0;
let letter = 0;

// Funtion to pass clicked button value to keypress()
buttonElements.forEach((element) => {
    element.addEventListener('click', function() {
        // Pass each button value to keypress()
        keypress(element.attributes["data-key"].value)
    });
});

// Function to check word is correct or not
function checkWord() {
    // For get whole word value
    const wholeWord = wordElements[row].querySelectorAll('.word');
    let noOfCorrectAlphabets = 0;
    wholeWord.forEach((element, index) => {
        // Check each index of guessing word
        const letterInNewWord = newWord.toLocaleLowerCase().indexOf(element.innerText.toLowerCase()); 
        if (letterInNewWord === index) {
            noOfCorrectAlphabets += 1;
            element.classList.add('word-green');
        } else if (letterInNewWord > 0) {
            element.classList.add('word-yellow');
        } else {
            element.classList.add('word-grey');
        }
    });
    // For game over 
    if (noOfCorrectAlphabets === 5) {
        gameOver = true;
        correctAnswer = true;
        alert('Congratulations! You are the winner for today’s game. Keep learning new word everyday.');
    } else if (row === 5) {
        gameOver = true;
        alert('Better luck next time. The word was: ' + newWord);
    }
}

// Use function for performing action after pressing enter button
function enterWord() {
    if (letter < 5) {
        alert('Not enough letters');
    } else {
        checkWord();
        row += 1;
        letter = 0;
    }
}

// Function to create word
function populateWord(key) {
    if (letter < 5) {
        wordElements[row].querySelectorAll('.word')[letter].innerText = key;
        letter += 1;
    }
}

// Use function after pressing delete button for deleting letters.
function deleteLetter() {
    const wholeWord = wordElements[row].querySelectorAll('.word');
    for (let index = wholeWord.length - 1; index >= 0; index--) {
        const element = wholeWord[index];
        if(element.innerText !== '') {
            element.innerText = '';
            letter -= 1;
            break;
        }
    }
}

// Function to perform action according to key value
function keypress(key) {
    if (!gameOver) {
        if (key.toLowerCase() === 'enter') {
            enterWord();
        } else if (key.toLowerCase() === 'del') {
            deleteLetter();
        } else {
            populateWord(key);
        }
    } else {
        alert('Game over!');
    }    
}


