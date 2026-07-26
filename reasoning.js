const questions = [

{
question:"यदि DOG = FQI, तो CAT = ?",
options:["ECV","ECX","EDV","FCV"],
answer:0
},

{
question:"श्रृंखला पूरी करें: 2, 4, 8, 16, ?",
options:["20","24","30","32"],
answer:3
},

{
question:"यदि सभी गुलाब फूल हैं और कुछ फूल लाल हैं, तो कौन-सा कथन सही है?",
options:[
"सभी गुलाब लाल हैं",
"कुछ गुलाब लाल हो सकते हैं",
"कोई गुलाब लाल नहीं है",
"सभी लाल वस्तुएँ गुलाब हैं"
],
answer:1
},

{
question:"A, B का भाई है। B, C की बहन है। C, D का पिता है। D का A से क्या संबंध है?",
options:["भतीजा","पुत्र","भाई","चाचा"],
answer:0
},

{
question:"श्रृंखला पूरी करें: A, C, F, J, O, ?",
options:["S","T","U","V"],
answer:2
},

{
question:"यदि SOUTH को HTUOS लिखा जाए, तो NORTH कैसे लिखा जाएगा?",
options:["HTRON","NORTH","RONTH","HTNOR"],
answer:0
},

{
question:"विषम शब्द चुनिए।",
options:["आम","सेब","केला","गाजर"],
answer:3
},

{
question:"यदि MONDAY = 123456, तो DAY = ?",
options:["456","345","256","146"],
answer:0
},

{
question:"श्रृंखला पूरी करें: 5, 10, 20, 40, ?",
options:["60","70","80","90"],
answer:2
},

{
question:"यदि PEN का संबंध WRITE से है, तो KNIFE का संबंध किससे है?",
options:["CUT","EAT","COOK","DRAW"],
answer:0
},
  {
question:"यदि 3, 6, 11, 18, 27, ?",
options:["36","38","40","42"],
answer:1
},

{
question:"यदि सभी बिल्लियाँ जानवर हैं और कुछ जानवर काले हैं, तो सही कथन क्या है?",
options:[
"सभी बिल्लियाँ काली हैं",
"कुछ बिल्लियाँ काली हो सकती हैं",
"कोई बिल्ली काली नहीं है",
"सभी काले जानवर बिल्ली हैं"
],
answer:1
},

{
question:"यदि EAST = 1234 और WEST = 5674, तो WEST का पहला अंक क्या होगा?",
options:["1","5","6","7"],
answer:1
},

{
question:"श्रृंखला पूरी करें: Z, X, U, Q, ?",
options:["N","M","L","K"],
answer:2
},

{
question:"यदि RAM = 18113, तो MAN = ?",
options:["13114","1311","14113","11314"],
answer:0
},

{
question:"विषम शब्द चुनिए।",
options:["त्रिभुज","वृत्त","वर्ग","आयत"],
answer:1
},

{
question:"यदि PARENT : CHILD, तो TEACHER : ?",
options:["Student","School","Book","Class"],
answer:0
},

{
question:"श्रृंखला पूरी करें: 1, 4, 9, 16, 25, ?",
options:["30","35","36","49"],
answer:2
},

{
question:"यदि किसी दर्पण में LEFT लिखा जाए, तो सही प्रतिबिंब कौन-सा होगा?",
options:["TFEL","LEFT","LFET","TELF"],
answer:0
},

{
question:"A, B से लंबा है। B, C से छोटा है। सबसे लंबा कौन है?",
options:["A","B","C","निर्धारित नहीं किया जा सकता"],
answer:3
},
  {
question:"यदि किसी घड़ी में समय 3:00 बजे है, तो घंटे और मिनट की सुई के बीच का कोण कितना होगा?",
options:["60°","75°","90°","120°"],
answer:2
},

{
question:"श्रृंखला पूरी करें: B, E, H, K, ?",
options:["M","N","O","P"],
answer:1
},

{
question:"यदि COLD : HOT, तो DARK : ?",
options:["Night","Black","Light","Shadow"],
answer:2
},

{
question:"यदि 12 जनवरी सोमवार है, तो 19 जनवरी कौन-सा दिन होगा?",
options:["रविवार","सोमवार","मंगलवार","बुधवार"],
answer:1
},

{
question:"विषम संख्या चुनिए।",
options:["24","36","48","55"],
answer:3
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
