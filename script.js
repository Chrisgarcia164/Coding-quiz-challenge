var startBtn = document.querySelector("#startbutton");
var timeEl = document.querySelector(".time");
var intro = document.querySelector(".intro");
var choices = document.querySelector("#container");
var questions = ["what is 5 + 5?", 'what is the opposite of up?', 'what number comes before 25?', 'what ']


startBtn.addEventListener("click", function(){
    console.log('started game');
    intro.classList.add("hide");
    choices.classList.remove('hide');
    
});


