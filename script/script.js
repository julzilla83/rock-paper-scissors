//the-odin-project assignment
//author: Jpalon
let pc_Selection;
let player_Selection;
const num_rounds = 5;
let player_score;
let pc_score;

//game("",num_rounds);

//randomize computer hand signal
function computerPlay(){
    const hand_signals = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * hand_signals.length);
    return hand_signals[index];
}

//execute game - parameters are for future iteration
function game(player_select, rounds){
    player_score=0;
    pc_score=0;
    for (let i=1; i<=rounds; i++){
        player_select = prompt("Please enter your choice: [ Rock | Paper | Scissors ]");
        if (player_select === null) break;
        player_select = player_select.toLowerCase(); 

        //ensure that only any of 3 options is entered. case insensitive.
        while (player_select !== "rock" && player_select !== "paper" && player_select !== "scissors")
            {
                console.log("Please enter any of the valid options: [ Rock | Paper | Scissors ]")
                player_select = prompt("Please select only from these options: [ Rock | Paper | Scissors ]");
                player_select = player_select.toLowerCase();
                //console.log(player_select);
            }

        pc_Selection = computerPlay();
        console.log(`Round ${i} of ${rounds}`);
        switch(player_select){
            case ("rock"):
                if (pc_Selection==="Paper"){
                    console.log("You lost this round!");
                    pc_score++;
                } else if (pc_Selection==="Scissors"){
                    console.log("You won this round!");
                    player_score++; 
                } else {
                    console.log("It's a draw!");
                }
                console.log(`You: Rock | PC: ${pc_Selection}`);
                break;
            case ("paper"):
                if (pc_Selection==="Scissors"){
                    console.log("You lost this round!");
                    pc_score++;
                } else if (pc_Selection==="Rock"){
                    console.log("You won this round!");
                    player_score++; 
                } else {
                    console.log("It's a draw!");
                }
                console.log(`You: Paper | PC: ${pc_Selection}`);
                break;
            case ("scissors"):
                if (pc_Selection==="Rock"){
                    console.log("You lost this round!");
                    pc_score++;
                } else if (pc_Selection==="Paper"){
                    console.log("You won this round!");
                    player_score++; 
                } else {
                    console.log("It's a draw!");
                }
                console.log(`You: Scissors | PC: ${pc_Selection}`);
                break;
            default:
                console.log("Invalid entry!")
                break;
        }
        console.log(`Current Score: You - ${player_score} | PC - ${pc_score}`);
        console.log("=============================================");
    }

    if (player_select !== null){
        if (player_score > pc_score) {
            console.log("You won this set! Congratulations.")
        } else if (player_score < pc_score){
            console.log("You lost this set! Better luck next time. " + "Your score: " + player_score + ".")
        } else {
            console.log("You're tied with the computer!")
        }
        console.log(`Final Score: You - ${player_score} | PC - ${pc_score}`);
    } else {
        console.log(">>>>>> Game has been terminated! <<<<<<")
    }
}
