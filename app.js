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
    const options = document.querySelectorAll('.fingerBtn')
    const playerHand = document.querySelector('#player-image')
    const computerHand = document.querySelector('#computer-image')

 
    const computerOptions = ["thumb", "index","middle","ring","pinky"];  


    options.forEach(option =>{
        option.addEventListener('click', function(){
        // Random fingers for computer
            const computerNum = Math.floor(Math.random()*5);
            const computerFinger = computerOptions[computerNum];
        // Updating finger images            
            playerHand.src = `./images/${this.name}.png`;            
            computerHand.src = `./images/${computerFinger}.png`;
            
        })
    })
    
    
}
playGame()