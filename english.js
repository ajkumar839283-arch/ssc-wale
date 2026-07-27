const questions = [

{
question:"Choose the correctly spelled word.",
options:[
"Accomodation",
"Accommodation",
"Acomodation",
"Accommadation"
],
answer:1
},

{
question:"Choose the synonym of 'Brave'.",
options:[
"Coward",
"Bold",
"Weak",
"Lazy"
],
answer:1
},

{
question:"Choose the antonym of 'Ancient'.",
options:[
"Old",
"Modern",
"Historic",
"Traditional"
],
answer:1
},

{
question:"Fill in the blank: She ____ to school every day.",
options:[
"go",
"goes",
"going",
"gone"
],
answer:1
},

{
question:"Choose the correctly punctuated sentence.",
options:[
"What is your name.",
"What is your name?",
"What is your name!",
"What is your name,"
],
answer:1
},

{
question:"Choose the synonym of 'Rapid'.",
options:[
"Slow",
"Fast",
"Weak",
"Late"
],
answer:1
},

{
question:"Choose the antonym of 'Victory'.",
options:[
"Success",
"Defeat",
"Win",
"Triumph"
],
answer:1
},

{
question:"Fill in the blank: I have been waiting ____ two hours.",
options:[
"since",
"for",
"from",
"by"
],
answer:1
},

{
question:"Choose the correctly spelled word.",
options:[
"Separate",
"Seperate",
"Separete",
"Seperete"
],
answer:0
},

{
question:"Choose the one-word substitution for 'A person who cannot read or write'.",
options:[
"Literate",
"Scholar",
"Illiterate",
"Teacher"
],
answer:2
},
  {
question:"Choose the correctly spelled word.",
options:[
"Recieve",
"Receive",
"Receeve",
"Receve"
],
answer:1
},

{
question:"Choose the antonym of 'Expand'.",
options:[
"Increase",
"Reduce",
"Contract",
"Develop"
],
answer:2
},

{
question:"Choose the synonym of 'Honest'.",
options:[
"Truthful",
"False",
"Clever",
"Rude"
],
answer:0
},

{
question:"Fill in the blank: They ____ playing football now.",
options:[
"is",
"are",
"was",
"be"
],
answer:1
},

{
question:"Choose the correctly spelled word.",
options:[
"Beautiful",
"Beutiful",
"Beautifull",
"Beautifal"
],
answer:0
},

{
question:"Choose the one-word substitution for 'A person who writes poems'.",
options:[
"Author",
"Poet",
"Novelist",
"Editor"
],
answer:1
},

{
question:"Choose the antonym of 'Permanent'.",
options:[
"Fixed",
"Temporary",
"Stable",
"Constant"
],
answer:1
},

{
question:"Fill in the blank: The sun ____ in the east.",
options:[
"rise",
"rises",
"rising",
"rose"
],
answer:1
},

{
question:"Choose the synonym of 'Wealthy'.",
options:[
"Rich",
"Poor",
"Weak",
"Lazy"
],
answer:0
},

{
question:"Choose the correctly spelled word.",
options:[
"Knowledge",
"Knowlege",
"Knowlidge",
"Knowledg"
],
answer:0
},
  {
question:"Choose the correctly punctuated sentence.",
options:[
"I like tea coffee and milk.",
"I like tea, coffee and milk.",
"I like tea coffee, and milk.",
"I like tea; coffee and milk."
],
answer:1
},

{
question:"Choose the synonym of 'Intelligent'.",
options:[
"Wise",
"Foolish",
"Lazy",
"Weak"
],
answer:0
},

{
question:"Fill in the blank: He ____ his homework before dinner.",
options:[
"finish",
"finished",
"finishing",
"finishes"
],
answer:1
},

{
question:"Choose the antonym of 'Accept'.",
options:[
"Agree",
"Receive",
"Reject",
"Take"
],
answer:2
},

{
question:"Choose the correctly spelled word.",
options:[
"Environment",
"Enviroment",
"Envirenment",
"Environmant"
],
answer:0
}

];

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const currentQuestionEl = document.getElementById("currentQuestion");
const timer = document.getElementById("timer");
function loadQuestion() {

    const q = questions[currentQuestion];

    currentQuestionEl.innerText = currentQuestion + 1;
    questionEl.innerText = q.question;

    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {

        const label = document.createElement("label");

        label.className = "option";

        label.innerHTML = `
        <input type="radio" name="answer" value="${index}"
        ${userAnswers[currentQuestion] === index ? "checked" : ""}>
        ${option}
        `;

        label.onclick = function () {
            userAnswers[currentQuestion] = index;
        };

        optionsEl.appendChild(label);

    });

}

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

}

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}
function submitQuiz() {

    score = 0;
    let reviewHTML = "<h2>Quiz Result</h2>";

    for (let i = 0; i < questions.length; i++) {

        if (userAnswers[i] === questions[i].answer) {

            score++;

            reviewHTML += `
            <p style="color:green;">
            <b>Q${i + 1}.</b> ${questions[i].question}<br>
            ✔ Correct
            </p>
            `;

        } else {

            reviewHTML += `
            <p style="color:red;">
            <b>Q${i + 1}.</b> ${questions[i].question}<br>
            ✘ Wrong<br>
            Correct Answer: ${questions[i].options[questions[i].answer]}
            </p>
            `;

        }

    }

    document.querySelector(".question-box").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML = `
    <h2>Quiz Completed</h2>
    <h3>Your Score: ${score}/${questions.length}</h3>
    <hr>
    ${reviewHTML}
    `;

}

let timeLeft = 25 * 60;

const countdown = setInterval(function () {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timer.innerHTML =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    if (timeLeft <= 0) {
        clearInterval(countdown);
        submitQuiz();
    }

    timeLeft--;

}, 1000);

loadQuestion();
