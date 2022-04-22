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
    const playerHand = document.querySelector('.playerHand')
    const computerHand = document.querySelector('.computerHand')

 
    const computerOptions = ["thumb", "index","middle","ring","pinky"];  


    options.forEach(option =>{
        option.addEventListener('click', function(){
            const computerNum = Math.floor(Math.random()*5);
            const computerFinger = computerOptions[computerNum];
            console.log(computerFinger)
        })
    })
    
}
playGame()