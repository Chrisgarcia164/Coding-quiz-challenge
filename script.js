var startBtn = document.querySelector("#startbutton");
var timeEl = document.querySelector(".time");
var intro = document.querySelector(".intro");
var choices = document.querySelector("#container");
var timeleft = 10000;
var answerBtn = document.querySelector('.answers')
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


startBtn.addEventListener("click", function(){
    intro.classList.add("hide");
    choices.classList.remove('hide');
    var quizTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(quizTimer);
          alert("Quiz failed, try again")
        }
        document.getElementById("time-left").innerHTML = timeleft;
        timeleft -= 1;
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
    choices.classList.add('hide');
    
}