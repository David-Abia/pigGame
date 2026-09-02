const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const img = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');

const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
let currentScore;
let activePlayer;
let score;
img.classList.toggle('hidden');
let playing;

const restartGame = () => {
    score0El.textContent = 0;
score1El.textContent = 0;

score = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
img.classList.add('hidden');


player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
player0.classList.add('player--active');
player1.classList.remove('player--active');

}

const switchPlayer = () => {
            activePlayer = activePlayer === 0 ? 1 : 0;
            player1.classList.toggle('player--active');
            player0.classList.toggle('player--active');
            currentScore = 0;
            current0El.textContent = 0;
            current1El.textContent = 0;
            // img.classList.add('hidden');
            
}


restartGame();

    rollDice.addEventListener('click', () => {

        if(playing) { 
        const dice = Math.trunc(Math.random() * 6) + 1;
        img.classList.remove('hidden');

        img.src = `dice-${dice}.png`;



        if (dice !== 1) {
             currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

          //switch player
        } else {
            switchPlayer();
            
        }
        }
         
    })

  

    hold.addEventListener('click', () => {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =  score[activePlayer];
        

if (score[activePlayer] >= 100) {
//    score[activePlayer] = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    
    img.classList.add('hidden');
    // current0El.textContent = 0;
    // current1El.textContent = 0;
    player1.classList.remove('player--active');
    player0.classList.remove('player--active');
    document.getElementById(`score--${activePlayer}`).textContent = 100;
    current0El.textContent = 0;
            current1El.textContent = 0;
     
    playing = false;
    
    //  player1.classList.remove('player--active');
    //         player0.classList.remove('player--active');

       //player switch
} else {
 switchPlayer();
 

//  player1.classList.remove('player--active');
//     player0.classList.remove('player--active');


};


    })

//restart button that restarts the game
    newGame.addEventListener('click', () => {
        
restartGame();
    })







