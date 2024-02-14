// function play(){
//     // hide the home screen
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// // show the playground
// const playGroundSection =document.getElementById('play-ground')
// playGroundSection.classList.remove('hidden')

// }

function handaleKeyboardKeyUpEvent(event){
const playerPressed = event.key;
console.log('btn press',playerPressed);
if(playerPressed === 'Escape'){
    gameOver();
}
// stop the game if pressed esc


// get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLocaleLowerCase()
console.log(currentAlphabet, playerPressed);

// cheak matched or not
if(playerPressed === expectedAlphabet){

    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);





    // ........................
    // console.log('you get a point');
// update score 
// 1. get the current score
// const currentScoreElement = document.getElementById('current-score');
// const currentScoreText = currentScoreElement.innerText;
// const currentScore = parseInt(currentScoreText);

// // console.log(currentScore);
// //2. increase the score by 1
// const newScore = currentScore + 1;

// // show the update score
// currentScoreElement.innerText = newScore;



    removeBackgroundColorByID(expectedAlphabet)
    continueGame();
}
else{
    console.log('you missed.you lost a life');

    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

// game over 
if(updatedLife === 0){
    gameOver()
}



    // ................
    // step - 1: get the current life number
// const currentLifeElement = document.getElementById('current-life');
// const currentLifeText = currentLifeElement.innerText;
// const currentLife = parseInt(currentLifeText);


//     // 2: reduce the life count

// const newLife = currentLife - 1;


//     // step 3: display the updated life count
//     currentLifeElement.innerText = newLife;

}
}

// capture keyboard key press
document.addEventListener('keyup', handaleKeyboardKeyUpEvent)


function continueGame(){
    // step -1: genarate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
    // srt random genarate alphabet
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

// set background color
setBakgroundColorById(alphabet);


}

// shortcut system
function play(){
    // hide everything show only playground
    hideElementById('home-screen');
hideElementById('final-score')
    showElementById('play-ground');
    // reset score and life
setTextElementValueById('current-life', 5)
setTextElementValueById('current-score', 0)

    continueGame()
}

function gameOver(){
hideElementById('play-ground');
showElementById('final-score');

// update final score
// 1. get the final score
const lastScore = getTextElementValueById('current-score');
setTextElementValueById('last-score', lastScore);

// clear the last alphabet highlight
const currentAlphabet = getElementTextById('current-alphabet');

removeBackgroundColorByID(currentAlphabet)


}
