const questions = [

{
question:"40 का 25% कितना होगा?",
options:["8","10","12","15"],
answer:1
},

{
question:"यदि किसी वस्तु का क्रय मूल्य ₹500 और विक्रय मूल्य ₹550 है, तो लाभ प्रतिशत कितना होगा?",
options:["5%","8%","10%","12%"],
answer:2
},

{
question:"यदि A एक कार्य 10 दिनों में करता है, तो 1 दिन में कितना कार्य करेगा?",
options:["1/5","1/10","1/15","1/20"],
answer:1
},

{
question:"एक ट्रेन 60 km/h की गति से 2 घंटे चलती है। कुल दूरी कितनी होगी?",
options:["100 km","110 km","120 km","130 km"],
answer:2
},

{
question:"20, 25, 30, 35, 40 का औसत कितना है?",
options:["28","30","32","35"],
answer:1
},

{
question:"यदि 3 : 5 = x : 20, तो x का मान क्या होगा?",
options:["10","12","15","18"],
answer:1
},

{
question:"₹1000 पर 10% वार्षिक साधारण ब्याज की दर से 2 वर्ष का ब्याज कितना होगा?",
options:["₹100","₹150","₹200","₹250"],
answer:2
},

{
question:"12 × 15 = ?",
options:["160","170","180","190"],
answer:2
},

{
question:"√144 का मान क्या है?",
options:["10","11","12","13"],
answer:2
},

{
question:"यदि किसी संख्या का 20% = 40 है, तो संख्या क्या होगी?",
options:["160","180","200","220"],
answer:2
},
  {
question:"यदि 18 का 50% कितना होगा?",
options:["6","8","9","10"],
answer:2
},

{
question:"15² का मान क्या है?",
options:["215","220","225","230"],
answer:2
},

{
question:"यदि किसी वस्तु का अंकित मूल्य ₹800 है और 10% की छूट दी जाती है, तो विक्रय मूल्य कितना होगा?",
options:["₹700","₹720","₹740","₹760"],
answer:1
},

{
question:"45 ÷ 5 = ?",
options:["7","8","9","10"],
answer:2
},

{
question:"यदि किसी संख्या का 25% = 50 है, तो संख्या क्या होगी?",
options:["150","175","200","225"],
answer:2
},

{
question:"7 × 8 = ?",
options:["54","56","58","60"],
answer:1
},

{
question:"1000 का 15% कितना होगा?",
options:["₹120","₹130","₹140","₹150"],
answer:3
},

{
question:"यदि एक वस्तु ₹600 में खरीदी और ₹660 में बेची गई, तो लाभ कितना हुआ?",
options:["₹40","₹50","₹60","₹70"],
answer:2
},

{
question:"एक व्यक्ति 5 घंटे में 300 km चलता है। उसकी चाल कितनी है?",
options:["50 km/h","55 km/h","60 km/h","65 km/h"],
answer:2
},

{
question:"यदि 9 : 12 = x : 24, तो x का मान क्या होगा?",
options:["16","18","20","22"],
answer:1
},
  {
question:"यदि किसी आयत की लंबाई 12 cm और चौड़ाई 8 cm है, तो उसका क्षेत्रफल कितना होगा?",
options:["80 cm²","90 cm²","96 cm²","100 cm²"],
answer:2
},

{
question:"यदि किसी वर्ग की भुजा 9 cm है, तो उसका क्षेत्रफल कितना होगा?",
options:["72 cm²","81 cm²","90 cm²","99 cm²"],
answer:1
},

{
question:"3/4 + 1/4 = ?",
options:["1/2","1","3/2","2"],
answer:1
},

{
question:"यदि किसी संख्या का 40% = 80 है, तो वह संख्या क्या होगी?",
options:["180","190","200","220"],
answer:2
},

{
question:"144 ÷ 12 = ?",
options:["10","11","12","13"],
answer:2
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
