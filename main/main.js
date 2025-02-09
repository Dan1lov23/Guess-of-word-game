let winCounter = 0;
let wordsArray = [];
let counter = 0;
let youLevel = 0;
let allWinCounter = 0;

function shuffleWord(word) {
    let letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
}

function updateWordDisplay() {
    if (counter < allWinCounter) {
        let word = wordsArray[counter];
        let shuffledWord = shuffleWord(word);
        document.getElementById("word").innerHTML = shuffledWord;
    }
}

function levelOne() {
    resetGame();
    wordsArray = ["хол", "гренка", "кот"];
    allWinCounter = wordsArray.length;
    youLevel = 1;
    document.getElementById("youLevelTitle").innerText = `Уровень сложности - ${youLevel}`;
    updateWordDisplay();
}

function levelTwo() {
    resetGame();
    wordsArray = ["яблоко", "шалаш", "лак", "дом", "шаурма"];
    allWinCounter = wordsArray.length;
    youLevel = 2;
    document.getElementById("youLevelTitle").innerText = `Уровень сложности - ${youLevel}`;
    updateWordDisplay();
}

function levelThree() {
    resetGame();
    wordsArray = ["сублимация", "ходьба", "шашлык", "экраспариация", "калибри"];
    allWinCounter = wordsArray.length;
    youLevel = 3;
    document.getElementById("youLevelTitle").innerText = `Уровень сложности - ${youLevel}`;
    updateWordDisplay();
}

function resetGame() {
    winCounter = 0;
    counter = 0;
    document.getElementById('result').innerHTML = '';
}

function check() {
    let myWord = document.getElementById("myWord").value.trim();

    if (myWord === wordsArray[counter]) {
        winCounter++;
    }

    counter++;

    if (counter < allWinCounter) {
        updateWordDisplay();
    } else if (winCounter === allWinCounter) {
        document.getElementById("result").innerText = `Вы угадали все слова и победили!`;
        alert("Игра закончена");
    } else {
        document.getElementById('result').innerHTML = `Вы угадали ${winCounter} / ${allWinCounter} и не победили.`;
    }

    document.getElementById("win").innerHTML = `${winCounter} / ${allWinCounter}`;
    document.getElementById("myWord").value = '';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        check();
    }
});

let isDarkTheme = false;

function themeChange() {
    const body = document.body;
    const level = document.getElementById("levelTitle");

    if (isDarkTheme) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        document.getElementById("face").innerText = "🌚";
        Array.from(level.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'black';
        });
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        document.getElementById("face").innerText = "🌝";
        Array.from(level.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'white';
        });
    }

    isDarkTheme = !isDarkTheme;
}

const audio = document.getElementById('audioOne');
let musicCheck = 0;

function music() {
    if (musicCheck % 2 === 0) {
        audio.currentTime = 0;
        audio.play();
    } else {
        audio.pause();
    }
    musicCheck++;
}