    var AItie = 0
    var AIwin = 0
    var AIlose = 0

function RPSfunction() {
  alert("Time to play")
  var selection = prompt("Enter R, P or S")

    if (selection === "R"||selection ===  "P"||selection ===  "S") {

      const AI = ["R", "P", "S"]
      const random = Math.floor(Math.random() * AI.length);
      var AIchoice = AI[random]
      alert(AI[random]);
    }

     if (selection === AIchoice) {
      alert("its a tie")
      AItie++
      var resetTie = confirm(`Your Data\n Ties: ${AItie}\n Wins: ${AIwin}\n Loses: ${AIlose}`)

      if (resetTie == true) {
        RPSfunction();
      }

     }
     if (selection == "R" && AIchoice == "S"||selection == "P" && AIchoice == "R"||selection == "S" && AIchoice == "P") {
      alert("you win")
      AIwin++

      var resetWin = confirm(`Your Data\n Ties: ${AItie}\n Wins: ${AIwin}\n Loses: ${AIlose}`)

      if (resetWin == true) {
        RPSfunction();
      }

    }
     if (selection == "R" && AIchoice == "P"||selection == "P" && AIchoice == "S"||selection == "S" && AIchoice == "R") {
      alert("you lose")
      AIlose++

      var resetLose = confirm(`Your Data\n Ties: ${AItie}\n Wins: ${AIwin}\n Loses: ${AIlose}`)

      if (resetLose = true) {
        RPSfunction();
      }
     }
    }


