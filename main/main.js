let winCounter = 0;
let wordsArray = ["котик", "арбуз", "чурка", "..."];
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

function check() {
    let myWord = document.getElementById("myWord").value;
    if (myWord === wordsArray[counter]) {
        console.log(myWord);
        counter++;
        let word = wordsArray[counter];
        let shuffleMyWord = shuffleWord(word);
        document.getElementById("word").innerHTML = shuffleMyWord;
        winCounter++;
        document.getElementById("win").innerHTML = winCounter;
    } else if (wordsArray[counter] === "...") {
        alert("Игра закончна");
    }
}

