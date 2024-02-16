//set up multiple choice questions
const questions=[
    {
        question:"Quotation marks enclose _ ",
        choices: [
            "strings",
            "objects",
            "numbers",
            "arrays",
            
        ], correctAnswerIndex:0,
    },

    {
        question:"What does HTML stand for?",
        choices: [
            "Helpful Text Maker Language",
            "Hyper Text Markup Language",
            "Hotmail",
            "Hotmail Type Markup Language",
            
        ], correctAnswerIndex:1,
    },

    {
        question:"An array is enclosed in _?",
        choices: [
            "curly brackets",
            "square brackets",
            "parentheses",
            "quotes",
            
        ], correctAnswerIndex: 1,
    },

    {
        question:"What static command prints a message to the console?",
        choices: [
            "print solution",
            "preview solution",
            "console.log()",
            "console.preview",
            
        ], correctAnswerIndex:2,
    },

    {
        question:"How do you start an HTML document?",
        choices: [
            "<HTML>",
            "title",
            "<!DOCTYPE html>",
            "introdution",
            
        ], correctAnswerIndex: 0,
    },

    {
        question:"What does CSS stand for?",
        choices: [
            "cascading style sheets",
            "html styling",
            "core styling sheet",
            "code style supply",
            
        ], correctAnswerIndex:0,
    },

    {
        question:"Curly braces enclose which type(s) of data?",
        choices: [
            "arrays",
            "null values",
            "booleans",
            "objects",
            
        ], correctAnswerIndex: 3,
    }
 ]


 //declare variables to keep track of the quiz's progess
 //how much total time (60seconds or one minute)
 //starting score
let currentQuestionIndex=0;
timeLeft=60; 
let score= 0;


//declare DOM 
const startButton= document.getElementById("startButton");
const questionsContainer= document.getElementById("questionsContainer");
const questionsText= document.getElementById("questionsText");
const choicesList= document.getElementById("choicesList");
const resultsContainer= document.getElementById("resultsContainer");
const resultsText= document.getElementById("resultsText");
const scoresContainer= document.getElementById("scoresContainer");
const scoresElement= document.getElementById("scoresElement");
const initialsInput= document.getElementById("initialsInput");
const saveButton= document.getElementById("saveButton");

//Add the event listeners for buttons
startButton.addEventListener("click", startQuiz);
choicesList.addEventListener("click", answerSelection);
saveButton.addEventListener("click", saveScore);

//function to begin!
function begin(){
    startTimer();
    displayQuestion();
    startButton.classList.add("hide");
    questionsContainer.classList.remove("hide");
}

//show questions //one at a time with answer selection
function showQuestion(){
resultsText.textContent= ";"
}

const currentQuestions= questions[currentQuestionIndex];
questionsText.textContent=currentQuestions.question;
choicesList.innerHTML= "";
currentQuestions.choices.forEach((choice=>{
    
    const choiceElement=document.createElement("li");
    choiceElement.textContent=choice;
    choicesList.appendChild(choiceElement);
})
)

//manage the answers selected
function answerSelection(event){
    const selectedAnswer=event.target;
    const selectedAnswerIndex= Array.from(choicesList.children).indexOf(selectedAnswer);
    const currentQuestion=questions[currentQuestionIndex];
    if (selectedAnswerIndex===currentQuestion.correctAnswerIndex){
        resultsText.textContent = "Correct!";
        score ++;
    }else{
        resultsText.textContent= "Wrong!" //remove time from timer if answer is wrong
        timeLeft -=10;
    }


}

resultsContainer.classList.remove("hide");
setTimeout(()=>{
    resultsContainer.classList.add("hide")
currentQuestionIndex ++;
if (currentQuestionIndex<questions.length){
    displayQuestion();
}else{
    endQuiz();
}
},1000);


//function to start the timer
//keep track of timer depending on answers selected and update
function startTimer(){
    const timerInterval =setInterval((=>{
        timeLeft --;
        if (timeLeft <=0){
            clearInterval(timerInterval);
            endQuiz();
        }
    },
}, 1000);
}

//function to finish    //stop the timer  //clear questions //show score
function endQuiz(){
    clearInterval(timer);

    questionsContainer.classList.add("hide");
    scoresContainer.classList.remove("hide");

    //check if time has ended and if so, display a message then display user's final score
    if (timeLeft ===0){
        resultsText.textContent= "Time is up!";
    }else{
        resultsText.textContent= `You final score is ${score}`;
     }
    }

//add event listeners
startButton.addEventListener("click",begin);
choicesList.addEventListener("click",answerSelection);
saveButton.addEventListener("click", saveScore);

//function to begin
function startQuiz(){
    startTimer();
    displayQuestion();
    startButton.classList.add("hide");
    questionsContainer.classList.remove("hide");

}
//Display a question and answer choices
function displayQuestion(){
    resultsText.textContent=" ";

    const currentQuestion=questions[currentQuestionIndex];
    questionsText.textContent=currentQuestion.question;
    choicesList.innerHTML=" ";
    
    currentQuestion.choices.forEach((choice)=>{
        const choiceElement=document.createElement("li");
        choiceElement.textContent=choice;
        choicesListappendChild(choiceElement);
    });
}
//Manage answers
function answerSelection(event){
    const selectedChoice =event.target;
    const selectedAnswerIndex=Array.from(choicesList.children).indexOf(selectedChoice);
    const currentQuestion=questions[currentQuestionIndex];

    if (selectedAnswerIndex===currentQuestion.correctAnswerIndex){
        resultsText.textContent="Correct!";
        score++;
    }else{
        resultsText.textContent="Wrong!"; //user loses 10 seconds from timer
        timeLeft= -10;
}
resultsContainer.classList.remove("hide");
setTimeout(()=>{
    resultsContainer.classList.add("hide");
    currentQuestionIndex ++;

    if (currentQuestionIndex<questions.length){
        displayQuestion();
    } else{
        endQuiz();
}
}, 1000);
}
// }
// )


