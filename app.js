let pScore = 0;
let cScore = 0;

const startGame = () =>{
    const playBtn = document.querySelector('.start');
    const menuScreen = document.querySelector('.menu');
    const gameScreen = document.querySelector('.game');
    playBtn.addEventListener('click',()=>{
        menuScreen.classList.add('fadeOut');
        gameScreen.classList.add('fadeIn')
    })
}
startGame();



const playGame = () => {
    const options = document.querySelectorAll('.fingerBtn');
    const playerHand = document.getElementById('player-image');
    const computerHand = document.getElementById('computer-image');

 
    const computerOptions = ["thumb", "index","middle","ring","pinky"];  


    options.forEach(option =>{
        option.addEventListener('click', function(){
        // Random fingers for computer
            let computerNum = Math.floor(Math.random()*5);
            let computerFinger = computerOptions[computerNum];
        
            
            
            let playerFinger = this.name
            console.log("playerFinger: " + playerFinger)

            
            // Updating finger images            
            playerHand.src = `./images/${playerFinger}.png`;            
            computerHand.src = `./images/${computerFinger}.png`;   
            
            compareFingers(playerFinger, computerFinger);   
           
            
        })        
    })   
    
}

const updateScore = () => {
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById("computer-score");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }; 

const compareFingers = (computerFinger, playerFinger) => {
    if(playerFinger==="thumb"){
        if(computerFinger==="index"){            
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="pinky"){            
            cScore++
            updateScore()
            return
        }else{
            return
        }
    }
    if(playerFinger==="index"){
        if(computerFinger==="middle"){            
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="thumb"){            
            cScore++
            updateScore()
            return
        }else{
            return
        }
    }
    if(playerFinger==="middle"){
        if(computerFinger==="ring"){            
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="index"){            
            cScore++
            updateScore()
            return
        }else{
            return
        }
    }
    if(playerFinger==="ring"){
        if(computerFinger==="pinky"){            
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="middle"){            
            cScore++
            updateScore()
            return
        }else{
            return
        }
    }
    if(playerFinger==="pinky"){
        if(computerFinger==="thumb"){           
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="ring"){            
            cScore++
            updateScore()
            return
        }else{
            return
        }
    }
}
playGame()
// const stopGame = (pScore, cScore) =>{
//     if(cScore == 2 || pScore == 2){
//         prompt("game over")
//         startGame()
//     }
//     else{
//        return
//     }

// }
