let pScore = 0;
let cScore = 0;

const menuScreen = document.querySelector('.menu');
const gameScreen = document.querySelector('.game');

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById("computer-score");

const startGame = () =>{
    const playBtn = document.querySelector('.start');

    playBtn.addEventListener('click',()=>{
        // reset scores
        pScore = 0;
        cScore = 0;
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        
        menuScreen.classList.add('fadeOut');
        gameScreen.classList.add('fadeIn');
       
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
            stopGame(pScore, cScore)
           
            
        })        
    })   
    
}
playGame()


const updateScore = () => {

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }; 

const compareFingers = (playerFinger, computerFinger) => {
    if(playerFinger === "thumb"){
        if(computerFinger === "index"){            
            pScore++;
            updateScore();
            return
        }
        else if (computerFinger==="pinky"){            
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
        else if (computerFinger==="thumb"){            
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
        else if (computerFinger==="index"){            
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
        else if (computerFinger==="middle"){            
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
        else if (computerFinger==="ring"){            
            cScore++
            updateScore()
            return
        }else{
            return
        }
    }
}

const stopGame = (pScore, cScore) =>{
    
    if(cScore >= 2 || pScore >= 2){   
        let winner = document.getElementById('winner')          

        if(cScore >= 2){
            winner.textContent = "Computer win "
            console.log(winner)
            
        }
        else if(pScore >= 2){
            winner.textContent = "You win "
  
        }        
        else{
            return
        }
    menuScreen.classList.remove('fadeOut');
    gameScreen.classList.remove('fadeIn'); 
    
    }    
}
