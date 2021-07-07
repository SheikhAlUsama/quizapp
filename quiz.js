let questionArray = [{
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    option: [
        "Hyperlinks and Text Markup Language",
        "Hyper Text Markup Language",
        "Hyper Text Making Language",
        "Hyper Text Mark Language",
    ]
},
{
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    option: [
        "Colorful StyleSheet",
        "Creative Style Sheet",
        "Cascading Style Sheet",
        "Computer Style Sheet",
    ]
},
{
    question: "Which is the correct CSS syntax?",
    answer:  "body{color:black}",
    option: [
        "body{color:black}",
        "{body{color:black}",
        "body={color:black}",
        "body:color{black}",
    ]
},
{
    question: "How do you insert a comment in a CSS file?",
    answer: "/*This is Comment*/",
    option: [
        "/*This is Comment*/",
        "//This Is Comment",
        "<!--- This Is Comment --->",
        "//This Is Comment//",
    ]
},
{
    question: "How do you insert a comment in a HTML file?",
    answer: "<!--- This Is Comment --->",
    option: [
        "/*This is Comment*/",
        "//This Is Comment",
        "<!--- This Is Comment --->",
        "//This Is Comment//",
    ]
},
{
    question: "Which property is used to change the background color?",
    answer: "background",
    option: [
        "backgroundColor",
        "BgColor",
        "Color-Background",
        "background",
    ]
}, {
    question: "How to write an IF statement in JavaScript?",
    answer:  "if(i==5)",
    option: [
        "if i==5",
        "if(i==5)",
        "if(i==5)then",
        "if i==5 then",
    ]
},

{
    question: "How does a WHILE loop start?",
    answer: "while(i <= 0)",
    option: [
        "while(i <= 0)",
        "while(i <= 0 i++)",
        "while  i <= 0 ",
     "while (i++ i <= 0)",
    ]
}];

function showQuestion(e) {
    var questionElement = document.getElementById("questionElement");
    questionElement.innerHTML = questionArray[e].question;


    var options = document.getElementsByClassName("options");
    for (var i = 0; i < options.length; i++) {
        options[i].innerHTML = questionArray[e].option[i]

    }
}
var questionCount = 0;
var score = 0
function nextQuestion(){
    var nextBtn = document.getElementById("nextBtn")
    questionCount ++;
    validate(questionCount)
    showQuestion(questionCount)
    removeActive()

}

function putActive(e){
    removeActive()
    e.classList.add("active");

    
}

function removeActive() {
    var active =document.getElementsByClassName("active");
    for (var i = 0; i<active.length; i++){
        active[i].classList.remove("active")
    }
}

function validate (e){
    var active = document.getElementsByClassName("active")
    if(active[0].innerHTML == questionArray[e].answer){
        score += 10
        console.log(score)
    }
}
