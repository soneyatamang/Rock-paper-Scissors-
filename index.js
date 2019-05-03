let wins = 0;
let losses = 0;
let ties = 0;

// this function
// 1. returns "rocks"/"paper"/"scissor" based on a random integer
function computersMove () {
    let randomInteger = Math.floor(Math.random()*3) // generate between 0,1,2
    if (randomInteger === 0){
        return "rock";
    }
    if (randomInteger === 1){
        return "paper";
    }
    if (randomInteger === 2){
        return "scissor";
    }
}
function updateScore(result){
// result one of the "won" or "tied" or "lost"
if (result === "won"){
    wins = wins + 1;
    document.getElementById("wins").innerHTML = wins;
}
if (result === "tied"){
    ties = ties + 1;
    document.getElementById("ties").innerHTML = ties;
}
if (result === "lost"){
    losses = losses + 1;
    document.getElementById("losses").innerHTML = losses;
}
}

function onClickrock() {
    let cm = computersMove();
    if (cm === "rock"){
        // tied
        updateScore("tied");
        alert("The computer picked rock. That means you tied!");
    }
    if (cm === "paper"){
        // tied
        updateScore("lost");
        alert("The computer picked paper. That means you lost!");
    }
    if (cm === "scissor"){
        // tied
        updateScore("won");
        alert("The computer picked scissor. That means you won!");
    }
}
function onClickpaper() {
    let cm = computersMove();
    if (cm === "rock"){
        // tied
        updateScore("won");
        alert("The computer picked rock. That means you won!");
    }
    if (cm === "paper"){
        // tied
        updateScore("tied");
        alert("The computer picked paper. That means you tied!");
    }
    if (cm === "scissor"){
        // tied
        updateScore("lost");
        alert("The computer picked scissor. That means you lost!");
    }
}
function onClickscissor() {
    let cm = computersMove();
    if (cm === "rock"){
        // tied
        updateScore("lost");
        alert("The computer picked rock. That means you lost!");
    }
    if (cm === "paper"){
        // tied
        updateScore("won");
        alert("The computer picked paper. That means you won!");
    }
    if (cm === "scissor"){
        // tied
        updateScore("tied");
        alert("The computer picked scissor. That means you tied!");
    }
}

document.getElementById("rock").onclick = onClickrock;
document.getElementById("paper").onclick = onClickpaper;
document.getElementById("scissor").onclick = onClickscissor;