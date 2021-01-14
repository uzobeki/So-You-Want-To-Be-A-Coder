//User presses button to start the quiz
var startQuiz = document.querySelector("#start-button");
//Once the game has started a timer begins counting and the first random question appears
var time = document.getElementById('timer');
var timeCount = 90;   
//As the user answers the questions the page changes to the next question
var questionCard = document.querySelector("#question-card");
var ansOne = document.getElementById('ans1');
var ansTwo = document.getElementById('ans2');
var ansThree = document.getElementById('ans3');
var ansFour = document.getElementById('ans4');
var o = 0;
//If the answer was correct, score increases
var score = document.querySelector("#score");
var scoreCount = 0;
//If the answer was incorrect, time decreases. User alerted when answer is correct/incorrect
var msg = document.querySelector("#message")
//The quiz is over when the time has run out or all questions answered

document.getElementById('quest').hidden = true;

//Questions
var codeQuest = [
    {
        question: "Javascript is a _______ language.",
        answers: ["A. Markup","B. Foreign","C. Coding","D. Programming"],
        correctAns: "D. Programming",  
    },

    {
        question: "Which of the folllowing HTML tags is self closing?",
        answers: ["A. <img>","B. <div>","C. <p>","D. <h6>"] ,
        correctAns: "A. <img>",
    },

    {
        question: "Code written in CSS and JavaScript must end in a _____.",
        answers:["A. Period(.)","B. Semicolon(;)","C. Exclamation(!)","D. Comma(,)"],
        correctAns: "B. Semicolon(;)",
    },

    {
        question: "When coding, a group of words that are written in quotations is called _____.",
        answers: ["A. A sentence","B. An array","C. A quote","D. A string"],
        correctAns: "D. A string",
    }
]


function buildQuiz(){
    if (o === codeQuest.length) {
        return "";
    }
    else {
        questionCard.textContent = codeQuest[o].question;
        ansOne.textContent = codeQuest[o].answers[0];
        ansTwo.textContent = codeQuest[o].answers[1];
        ansThree.textContent = codeQuest[o].answers[2];
        ansFour.textContent = codeQuest[o].answers[3];
    }

}

// Code to end quiz

//Score
document.getElementById('ans1').addEventListener("click", function () {
    if (codeQuest[o].answers[0] === codeQuest[o].correctAns) {
        score.textContent = scoreCount;
        scoreCount += 10;
        msg.textContent = "Impressive! I see great promise in you!"
    }
    else {
        timeCount -= 10;
        scoreCount -= 5;
        msg.textContent = "This is most disappointing..."
    }
    o++;
    buildQuiz();
    console.log("Question #" + o);
    console.log("Score:" + scoreCount);
})

document.getElementById('ans2').addEventListener("click", function () {
    if (codeQuest[o].answers[1] === codeQuest[o].correctAns) {
        score.textContent = scoreCount;
        scoreCount += 10;
        msg.textContent = "Good! Your knowledge know no bounds!"
    }
    else {
        timeCount -= 10;
        scoreCount -= 5;
        msg.textContent = "I expected so much more. Maybe, you're not ready..."
    }
    o++;
    buildQuiz();
    console.log("Question #" + o);
    console.log("Score:" + scoreCount);
})

document.getElementById('ans3').addEventListener("click", function () {
    if (codeQuest[o].answers[2] === codeQuest[o].correctAns) {
        score.textContent = scoreCount;
        scoreCount += 10;
        msg.textContent = "Very nice, young coder!"
    }
    else {
        timeCount -= 10;
        scoreCount -= 5;
        msg.textContent = "Perhaps, this is too much for you....."
    }
    o++;
    buildQuiz();
    console.log("Question #" + o);
    console.log("Score:" + scoreCount);
})

document.getElementById('ans4').addEventListener("click", function () {
    if (codeQuest[o].answers[3] === codeQuest[o].correctAns) {
        score.textContent = scoreCount;
        scoreCount += 10;
        msg.textContent = "Correct!"
    }
    else {
        timeCount -= 10;
        scoreCount -= 5;
        msg.textContent = "Incorrect..."
    }
    o++;
    buildQuiz();
    console.log("Question #" + o);
    console.log("Score:" + scoreCount);
})
// Score End

//Time
startQuiz.addEventListener("click", function countdown(){    
    document.getElementById('quest').hidden = false;

    document.getElementById('start').hidden = true;


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
buildQuiz();