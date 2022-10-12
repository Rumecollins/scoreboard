let teamA = document.getElementById("team-a")
let teamB = document.getElementById("team-b")

let teamChoiceA = document.getElementById("team-choice-a")
let teamChoiceB = document.getElementById("team-choice-b")

teamChoiceA.addEventListener("click",function(){
    let selectTeam = prompt("enter team a:");
    if (selectTeam == undefined || selectTeam == "") {
        teamA.textContent = prompt("team not yet selected enter team b:");
    }else {
        teamA.textContent = selectTeam[0].toUpperCase() + selectTeam.slice(1);
    }
})

teamChoiceB.addEventListener("click",function(){
    let selectTeam = prompt("enter team b:");
    if (selectTeam == undefined || selectTeam == "") {
        teamB.textContent = prompt("team not yet selected enter team b:");
    }else {
        teamB.textContent= selectTeam[0].toUpperCase() + selectTeam.slice(1) ;

    }
})
