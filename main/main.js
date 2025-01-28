let winCounter = 0;
let wordsArray = ["котик", "арбуз", "расстрел", "петух", "Иерихон", "молоко", "гренка"];
let counter = 0;
let allWinCounter = wordsArray.length;

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
    } else {
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

let isDarkTheme = false;

function themeChange() {
    const body = document.body;

    if (isDarkTheme) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }

    isDarkTheme = !isDarkTheme;
}