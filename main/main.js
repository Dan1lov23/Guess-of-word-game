let winCounter = 0;
let wordsArray = ["."];
let counter = 0;

function shuffleWord(word) {
    let letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
}

let word = wordsArray[counter];
let shuffleMyWord = shuffleWord(word);
document.getElementById("word").innerHTML = shuffleMyWord;
let allWinCounter = 0;

function levelOne() {
    wordsArray = ["хол", "гренка", "мяу"];
    document.getElementById("word").innerHTML = wordsArray[0];
    allWinCounter = wordsArray.length;
}

function levelTwo() {
    wordsArray = ["яблоко", "шалаш", "лак", "абобус", "амогус"];
    document.getElementById("word").innerHTML = wordsArray[0];
    allWinCounter = wordsArray.length;
}

function levelThree() {
    wordsArray = ["расстрел", "подразвёрстка", "шашлык", "экраспариация", "очко"];
    document.getElementById("word").innerHTML = wordsArray[0];
    allWinCounter = wordsArray.length;
}

function check() {
    let myWord = document.getElementById("myWord").value;
    if (myWord === wordsArray[counter]) {
        winCounter++;
        counter++;
    }
    if (counter < allWinCounter) {
        let word = wordsArray[counter];
        let shuffleMyWord = shuffleWord(word);
        document.getElementById("word").innerHTML = shuffleMyWord;
    } else if (counter === allWinCounter) {
        document.getElementById("result").innerText = `Вы угадали все слова и победили`;
        alert("Игра закончена");
    }
    document.getElementById("win").innerHTML = `${winCounter} / ${allWinCounter}`;
    document.getElementById('myWord').value = '';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        check();
    }
});

// функция для смены темы

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

// функция для проигрывания музыки

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
