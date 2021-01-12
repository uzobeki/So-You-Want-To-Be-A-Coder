//User presses button to start the quiz
var startQuiz = document.querySelector("#start-button")
//Once the game has started a timer begins counting and the first random question appears
var time = document.getElementById('timer')    
//As the user answers the questions the page changes to the next question
//If the answer was correct, score increases
//If the answer was incorrect, time decreases
//The quiz is over when the time has run out or all questions answered

//Score

//Time
startQuiz.addEventListener("click", function countdown(){
    var timeCount = 90;

    var timeInterval = setInterval(function () {
        time.innerHTML = timeCount;
        timeCount--;
        console.log(timeCount);

        if (timeCount == 0){
            clearInterval(timeInterval);
            time.innerHTML="";
        }
    },1000);

})
