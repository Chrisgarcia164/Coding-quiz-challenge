var startBtn = document.querySelector("#startbutton");
var timeEl = document.querySelector(".time");
var intro = document.querySelector(".intro");
var choices = document.querySelector("#container");
var timeleft = 60;
var answerBtn = document.querySelector('.answers')
var finalEl = document.querySelector('#finale')
var nameEl = document.querySelector("#fname")
var submitBtn = document.querySelector("#submit-btn")
var leaderboard = document.querySelector('#leaderboards')
var leadorboardBtn = document.querySelector("#view-ldb")
leadorboardBtn.addEventListener('click', function(){
    intro.classList.add('hide')
    leaderboard.classList.remove('hide')
    var stat = document.createElement("h4")
    stat.classList.add('stat')
    var savedInfo = localStorage.getItem('timeStat')
    stat.innerText = savedInfo
    leaderboard.append(stat)
    
})
var question1 = {
    question: "What is 2+2?",
    answers: [
                { text: 'IDK', correct: false },
                { text: '12', correct: false },
                { text: 'yes', correct: false },
                { text: '4', correct: true }
              ]
}
var question2 = {
    question: "What is the opposite of up?",
    answers: [
                { text: 'left', correct: false },
                { text: 'down', correct: true },
                { text: 'yellow', correct: false },
                { text: 'back', correct: false },
    ]
}
var question3 = {
    question: "What is 5 * 5",
    answers: [
        { text: '10', correct: false },
        { text: '25', correct: true },
        { text: '100', correct: false },
        { text: '0', correct: false },
    ]
}
var question4 = {
    question: "What number comes before 25",
    answers: [
        { text: '24', correct: true },
        { text: '18', correct: false },
        { text: '26', correct: false },
        { text: '52', correct: false },
    ]
}


const questionEL = document.getElementById("question")
const answerBtnEl = document.getElementById("answer-choices")
var finishedQuiz = false

startBtn.addEventListener("click", function startGame(){
    intro.classList.add("hide");
    choices.classList.remove('hide');
    var quizTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(quizTimer);
          alert("Quiz failed, try again")
          choices.classList.add('hide')
          intro.classList.remove('hide')
          timeleft = 60;
        }
        // if (finishedQuiz = true){
        //     clearInterval(quizTimer);
        // }
        document.getElementById("time-left").innerHTML = timeleft;
        timeleft -= 1;
        if (finishedQuiz == true){
            clearInterval(quizTimer);
        }
      }, 1000);
    
    firstQuestion()
})

function firstQuestion() {
    questionEL.innerText = question1.question;
    for (var i = 0; i < question1.answers.length; i++) {
        var button = document.createElement("button")
        button.classList.add("answers")
        button.innerText = question1.answers[i].text;
        answerBtnEl.append(button); 
        button.value = question1.answers[i].correct;    
    }
    answerBtnEl.addEventListener('click', function(event){
        var selectedAnswer = event.target.value
        if (selectedAnswer === "true") {
            alert("you got the right answer");
        }
        else {
            alert("You are wrong");
            timeleft -=10;
        }
        setNextQuestions()
    })
    
}
function setNextQuestions() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
      }
    questionEL.innerText = question2.question;
    for (var i = 0; i < question2.answers.length; i++) {
        var button = document.createElement("button")
        button.classList.add("answers")
        button.innerText = question2.answers[i].text;
        answerBtnEl.append(button); 
        button.value = question2.answers[i].correct;    
    }
    answerBtnEl.addEventListener('click', function(event){
        var selectedAnswer = event.target.value
     if (selectedAnswer === "true") {
            // alert("you got the right answer");
            setNextQuestions2();
        }
        else {
            // alert("You are wrong");
            setNextQuestions2();
        }
    })
}
function setNextQuestions2() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
      }
    questionEL.innerText = question3.question;
    for (var i = 0; i < question3.answers.length; i++) {
        var button = document.createElement("button")
        button.classList.add("answers")
        button.innerText = question3.answers[i].text;
        answerBtnEl.append(button); 
        button.value = question3.answers[i].correct;    
    }
    answerBtnEl.addEventListener('click', function(event){
        var selectedAnswer = event.target.value
        if (selectedAnswer === "true") {

        }
        else {
           
        }
        setNextQuestions3()
    })
}
function setNextQuestions3() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
      }
    questionEL.innerText = question4.question;
    for (var i = 0; i < question4.answers.length; i++) {
        var button = document.createElement("button")
        button.classList.add("answers")
        button.innerText = question4.answers[i].text;
        answerBtnEl.append(button); 
        button.value = question4.answers[i].correct;    
    }
    answerBtnEl.addEventListener('click', function(event){
        var selectedAnswer = event.target.value
        if (selectedAnswer === "true") {
           
        }
        else {
        }
        finalScreen()
    })
}
function finalScreen(){
    finishedQuiz = true
    // document.getElementById("time-left").innerHTML = timeleft;
    // clearInterval(quizTimer);
    document.getElementById("final-timer").innerHTML = timeleft;
    localStorage.setItem('timeLeft', timeleft);
    choices.classList.add('hide');
    finalEl.classList.remove('hide');
    submitBtn.addEventListener('click', function(event){
        var nameSub = document.getElementById('fname').value
        var nameTime = " got a score of: "
        var timeStat = nameSub + nameTime + timeleft
        localStorage.setItem('timeStat', timeStat);
        finalEl.classList.add("hide")
        leaderboard.classList.remove('hide')
        var stat = document.createElement("h4")
        stat.classList.add('stat')
        var savedInfo = localStorage.getItem('timeStat')
        stat.innerText = savedInfo
        leaderboard.append(stat)

    })

}