// code your solution here

function superbowlWin(Array){
    let winner = Array.find(item => item.result === "W")
    if(winner){
        return winner.year
    }
}