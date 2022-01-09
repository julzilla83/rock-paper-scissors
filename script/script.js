//the-odin-project assignment
//author: Jpalon
// let pc_Selection;
// let player_Selection;
// const num_rounds = 5;
// let player_score;
// let pc_score;

// //game("",num_rounds);

// //randomize computer hand signal
// function computerPlay(){
//     const hand_signals = ["Rock", "Paper", "Scissors"];
//     const index = Math.floor(Math.random() * hand_signals.length);
//     return hand_signals[index];
// }

// //execute game - parameters are for future iteration
// function game(player_select, rounds){
//     player_score=0;
//     pc_score=0;
//     for (let i=1; i<=rounds; i++){
//         player_select = prompt("Please enter your choice: [ Rock | Paper | Scissors ]");
//         if (player_select === null) break;
//         player_select = player_select.toLowerCase(); 

//         //ensure that only any of 3 options is entered. case insensitive.
//         while (player_select !== "rock" && player_select !== "paper" && player_select !== "scissors")
//             {
//                 console.log("Please enter any of the valid options: [ Rock | Paper | Scissors ]")
//                 player_select = prompt("Please select only from these options: [ Rock | Paper | Scissors ]");
//                 player_select = player_select.toLowerCase();
//                 //console.log(player_select);
//             }

//         pc_Selection = computerPlay();
//         console.log(`Round ${i} of ${rounds}`);
//         switch(player_select){
//             case ("rock"):
//                 if (pc_Selection==="Paper"){
//                     console.log("You lost this round!");
//                     pc_score++;
//                 } else if (pc_Selection==="Scissors"){
//                     console.log("You won this round!");
//                     player_score++; 
//                 } else {
//                     console.log("It's a draw!");
//                 }
//                 console.log(`You: Rock | PC: ${pc_Selection}`);
//                 break;
//             case ("paper"):
//                 if (pc_Selection==="Scissors"){
//                     console.log("You lost this round!");
//                     pc_score++;
//                 } else if (pc_Selection==="Rock"){
//                     console.log("You won this round!");
//                     player_score++; 
//                 } else {
//                     console.log("It's a draw!");
//                 }
//                 console.log(`You: Paper | PC: ${pc_Selection}`);
//                 break;
//             case ("scissors"):
//                 if (pc_Selection==="Rock"){
//                     console.log("You lost this round!");
//                     pc_score++;
//                 } else if (pc_Selection==="Paper"){
//                     console.log("You won this round!");
//                     player_score++; 
//                 } else {
//                     console.log("It's a draw!");
//                 }
//                 console.log(`You: Scissors | PC: ${pc_Selection}`);
//                 break;
//             default:
//                 console.log("Invalid entry!")
//                 break;
//         }
//         console.log(`Current Score: You - ${player_score} | PC - ${pc_score}`);
//         console.log("=============================================");
//     }

//     if (player_select !== null){
//         if (player_score > pc_score) {
//             console.log("You won this set! Congratulations.")
//         } else if (player_score < pc_score){
//             console.log("You lost this set! Better luck next time. " + "Your score: " + player_score + ".")
//         } else {
//             console.log("You're tied with the computer!")
//         }
//         console.log(`Final Score: You - ${player_score} | PC - ${pc_score}`);
//     } else {
//         console.log(">>>>>> Game has been terminated! <<<<<<")
//     }
// }

        //assign user's choice based on which button was clicked
        const btn_choices = document.getElementsByClassName('btn');
        const choices = Array.from(btn_choices);
        const race_to = 5;
        let player_score = 0;
        let computer_score = 0;

        let user_hand = document.querySelector('.choices .user').firstChild
        let pc_hand = document.querySelector('.choices .pc').firstChild
        let user_score = document.querySelector('.result .user').firstChild
        let pc_score = document.querySelector('.result .pc').firstChild
        let rounds = document.querySelector('.rounds').firstElementChild
        rounds.textContent = 'Race to: ' + race_to;
        //console.log(pc_hand);

        //add mouseup event on each button
        for (let choice of choices){
            choice.addEventListener('mouseup', event =>{
                //get the class name
                //console.log(event.target.classList[1]);
                if (player_score ===5 || computer_score ===5){
                    alert('Previous match is done. Let\'s start a new one.')
                    startNew();
                } else {
                    playGame(event.target.classList[1]);
                }
            });
        }

        function playGame(player_choice){
            const pc_choice = computerPlay();
           
            switch (player_choice){
                case ('Rock'):
                    if (pc_choice === "Paper") {
                        computer_score++;
                        rounds.textContent = "You lost!";
                    } else if (pc_choice === "Scissors") {
                        player_score++;
                        rounds.textContent = "You won!";
                    } else {
                        rounds.textContent = "It's a draw.";
                    }
                    break;

                case ('Paper'):
                    if (pc_choice === "Scissors") {
                        computer_score++;
                        rounds.textContent = "You lost!";
                    } else if (pc_choice === "Rock"){
                        player_score++;
                        rounds.textContent = "You won!";
                    } else {
                        rounds.textContent = "It's a draw.";
                    }
                    break;

                case ('Scissors'):
                    if (pc_choice === "Paper") {
                        computer_score++;
                        rounds.textContent = "You lost!";
                    } else if (pc_choice === "Rock") {
                        player_score++;
                        rounds.textContent = "You won!";
                    } else {
                        rounds.textContent = "It's a draw.";
                    }
                    break;
            }

            //update the DOM elements
            user_hand.textContent = player_choice;
            pc_hand.textContent = pc_choice;
            user_score.textContent = player_score;
            pc_score.textContent = computer_score;
        
            if (player_score ===5 || computer_score ===5){
                if (player_score === 5) {
                    rounds.textContent = 'You won the match!'
                    let yes_no = confirm('You won the game! Would you like to play again?');
                    if (yes_no) {
                        startNew();
                        rounds.textContent = 'Race to: ' + race_to;
                    }
                } else {
                    rounds.textContent = 'You lost the match! Better luck next time.'
                    let yes_no = confirm('You lost the game! Would you like try again?');
                    if (yes_no) {
                        startNew();
                    }
                }
            }

        }
        
        //reset to 0 for a new game
        function startNew(){
            player_score = 0;
            computer_score = 0;
            user_hand.textContent = '---';
            pc_hand.textContent = '---';
            user_score.textContent = player_score;
            pc_score.textContent = computer_score;
        }

        //get computer's random response
        function computerPlay(){
            const hand_signals = ["Rock", "Paper", "Scissors"];
            const index = Math.floor(Math.random() * hand_signals.length);
            return hand_signals[index];
        }