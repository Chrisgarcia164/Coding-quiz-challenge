var startBtn = document.querySelector("#startbutton");
var timeEl = document.querySelector(".time");
var intro = document.querySelector(".intro");
var choices = document.querySelector("#container");
var timeleft = 10000;
var answerBtn = document.querySelector('.answers')
// const questions = [
//     {
//       question: 'What is 2 + 2?',
//       answers: [
//         { text: '16', correct: false },
//         { text: 'yes', correct: false },
//         { text: '1', correct: false },
//         { text: '4', correct: true }
//       ]
//     },
//     // {
//     //   question: 'What is the opposite of down?',
//     //   answers: [
//     //     { text: 'up', correct: true },
//     //     { text: 'left', correct: false },
//     //     { text: '3', correct: false },
//     //     { text: 'apples', correct: false }
//     //   ]
//     // },
//     // {
//     //   question: 'What number comes before 25?',
//     //   answers: [
//     //     { text: '26', correct: true },
//     //     { text: 'yellow', correct: false },
//     //     { text: '24', correct: false },
//     //     { text: 'no', correct: false }
//     //   ]
//     // },
//     // {
//     //   question: 'What is 25 * 1823',
//     //   answers: [
//     //     { text: 'I dont know!!!!', correct: true },
//     //     { text: '1', correct: false },
//     //     { text: '100', correct: false },
//     //     { text: '10,000', correct: false }
//     //   ]
//     // }
//   ]

var question1 = {
    question: "What is 2+2?",
    answers: ["2", "4", "6", "8"]
}
console.log(question1.answers.length)
// const questions = ["What is 2+2?", "What is", "what isn't"]
// const answers = [ "4", "5", "6", "7"]
const questionEL = document.getElementById("question")
const answerBtnEl = document.getElementById("answer-choices")
// var questionNum = questions.length
// console.log(questionNum)
// var answerBtn = document.querySelector(".answers")

startBtn.addEventListener("click", function(){
    console.log('started game');
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
    console.log(questionEL)
   
    }
    for (var i = 0; i < question1.answers.length; i++) {
        var button = document.createElement("button")
        button.classList.add("answers")
        button.innerText = question1.answers[i];
        console.log(button)
        answerBtnEl.append(button); 
    }
answerBtnEl.addEventListener("click", function(){
    console.log("hello world")
})
