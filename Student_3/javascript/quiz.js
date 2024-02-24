//Begining of timer
let interval;

function stopwatch() {    
    //Setitng the time duration as 3 minutes
    const timeDuration = 181;

    const timer = document.getElementById("timer");

    //getting the minutes and seconds from the time duration
    let minutes = Math.floor(timeDuration / 60);
    let seconds = timeDuration % 60;

    interval = setInterval(() => {
        seconds--;

        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }

        //displaying the time in the format of minutes:seconds
        const displayTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        timer.textContent = displayTime;

        //if the time is up, stop the timer and run the checkMark function
        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            checkMark();
            document.getElementById("time-judge").innerHTML = "Time's up!";
        }
    }, 1000);
}

stopwatch();
//End of timer

//Checking the answers
function checkMark() {
    var score = 0;
    for (var i = 1; i <= 10; i++) {
        if (document.getElementById("answer" + i).checked) {
            score++;
            document.getElementById("question" + i).style.backgroundColor = "rgba(132, 220, 198, 0.2)";
            //If the answer is correct, the score is increased by one and the background color of the question is changed to green

        } else {
            document.getElementById("question" + i).style.backgroundColor = "rgba(255, 77, 109, 0.2)";
            //If the answer is incorrect, the background color of the question is changed to red
        }
   }

   //Displaying the final score
   document.getElementById("finalScore").innerHTML = "Your score is " + score + "/10";
    
   //Pausing the timer
   clearInterval(interval);

   document.getElementById("finalScore").style.backgroundColor = "#09203E";
//    document.getElementById("time-judge").innerHTML = "Well done!";
}

//Clearing the answers
function clearAnswers() {
    for(var i=1; i <= 10; i++) {
        //Resetting the background color of the questions
        document.getElementById("question" + i).style.backgroundColor = "#FFF";
    }

    document.getElementById("finalScore").innerHTML = " ";
    clearInterval(interval);
    document.getElementById("time-judge").innerHTML = " ";
    stopwatch();
    document.getElementById("finalScore").style.backgroundColor = "#FFF";
}

//Adding event listeners to the buttons
document.getElementById("submitB").addEventListener("click",checkMark);
document.getElementById("clearQuiz").addEventListener("click",clearAnswers);
