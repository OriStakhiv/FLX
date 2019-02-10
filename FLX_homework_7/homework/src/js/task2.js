let startGame = confirm('Do you want to play a game?')
let range = 5
if (startGame === true){
    let prize = 0
    let i = 3
    let n = 1
    let maxPrize = 10
    let nextRound = false
    let playAgain = true 
    while (i>0 && playAgain === true){
    let randomNum = (Math.random()*range).toFixed()
    let userNum = prompt(`Enter a number from 0 to ${range}
Attempts left ${i}
Total prize: ${prize}
Possible prize on current attempt: ${maxPrize}`)
    if (randomNum === userNum){
        switch(i){
            case(3):
                prize += 10*n
                nextRound = confirm (`Congratulation! Your prize is:${prize} Do you want to continue?`)
                break;
            case(2):
                prize += 5*n
                nextRound = confirm (`Congratulation! Your prize is:${prize} Do you want to continue?`)
                
                break;
            case(1):  
                prize += 2*n
                nextRound = confirm (`Congratulation! Your prize is:${prize} Do you want to continue?`)
                break;  
            default:
                break;    
        }
        if (nextRound === true){
            i = 4
            n = 3   
            range *= 2 
            maxPrize = 20 * n + prize
        }else{
            alert (`Thank you for a game. Your prize is: ${prize}`)
        }
    }else{
        alert(`Thank you for a game. Your prize is:${prize}`)
        playAgain = confirm('Play again?')
    }
    maxPrize = (maxPrize / 2).toFixed() 
    i--
    }
}else{
    alert('You did not become a millionaire, but can.')
}