// function play()
// {
//     // step-1 : hide the home screen. to hide the screen, add the class hidden ro the home section
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // step-2 : show the play ground section
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

// 1
function continueGame()
{
    const alphabet =  getARandomAlphabet();
    // console.log(alphabet);

    // set the random alphabet in the screen
    const currentAlpha = document.getElementById('current-alpha');
    currentAlpha.innerText = alphabet;

    // set bg color of random alphabet
    const setBgOfAlpha = setBgColorById(alphabet);
}

// 2
function handleKeyupByKeyboard(event)
{
    const userPressed = event.key;

    if(userPressed === 'Escape')
    {
        gameOver();
    }
    
    const currentAlpha = document.getElementById('current-alpha');
    const currentAlphaText = currentAlpha.innerText.toLowerCase();

    if(userPressed === currentAlphaText)
    {
        // console.log('u got a point');
        const currentScore = getElementValueById('current-score');
        const updateScore = currentScore + 1;
        setNewValue('current-score', updateScore);


        continueGame();
        removeBgColorById(currentAlphaText);
    }
    else
    {
        const currentLife = getElementValueById('life');
        const updateLife = currentLife - 1;
        setNewValue('life', updateLife);

        // 
        if(updateLife === 0)
        {
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyupByKeyboard); // here handleKeyupByKeyboard is the call back function



function play()
{
    addClassById('home-section');
    removeClassById('play-ground');
    continueGame();
}

function gameOver()
{
    addClassById('play-ground');
    removeClassById('final-score');

    // update score-board
    const finalScore = getElementValueById('current-score');
    setNewValue('score-board', finalScore);
}

function playAgain()
{
    removeClassById('play-ground');
    addClassById('final-score');

    setNewValue('current-score', 0);
    setNewValue('life', 5);
}