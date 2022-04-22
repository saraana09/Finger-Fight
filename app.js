
const pScore = 0;
const cScore = 0;

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
            const computerNum = Math.floor(Math.random()*5);
            const computerFinger = computerOptions[computerNum];
            console.log(computerFinger)
            const playerFinger = this.name   
            console.log(playerFinger)         
        // Updating finger images            
            playerHand.src = `./images/${playerFinger}.png`;            
            computerHand.src = `./images/${computerFinger}.png`;
            
            
        })
    })
    
    
}
playGame()


const updateScore = () =>{
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById("computer-score");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }; 


const compareFingers = (computerFinger, playerFinger) => {
    if(playerFinger==="thumb"){
        if(computerFinger==="index"){
            alert("player win")
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="pinky"){
            alert("computer win")
            cScore++
            updateScore()
            return
        }else{
            alert("try again")
        }
    }
    if(playerFinger==="index"){
        if(computerFinger==="middle"){
            alert("player win")
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="thumb"){
            alert("computer win")
            cScore++
            updateScore()
            return
        }else{
            alert("try again")
        }
    }
    if(playerFinger==="middle"){
        if(computerFinger==="ring"){
            alert("player win")
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="index"){
            alert("computer win")
            cScore++
            updateScore()
            return
        }else{
            alert("try again")
        }
    }
    if(playerFinger==="ring"){
        if(computerFinger==="pinky"){
            alert("player win")
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="middle"){
            alert("computer win")
            cScore++
            updateScore()
            return
        }else{
            alert("try again")
        }
    }
    if(playerFinger==="pinky"){
        if(computerFinger==="thumb"){
            alert("player win")
            pScore++;
            updateScore();
            return
        }
        else if (compareFingers==="ring"){
            alert("computer win")
            cScore++
            updateScore()
            return
        }else{
            alert("try again")
        }
    }
}
compareFingers()
