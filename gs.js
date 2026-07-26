
const questions = [
{
question:"भारत का संविधान कब लागू हुआ था?",
options:["26 जनवरी 1950","15 अगस्त 1947","26 नवंबर 1949","1 जनवरी 1950"],
answer:0
},
{
question:"भारतीय संविधान का 'मैग्ना कार्टा' किसे कहा जाता है?",
options:["मौलिक अधिकार","राज्य के नीति निर्देशक तत्व","प्रस्तावना","मौलिक कर्तव्य"],
answer:0
},
{
question:"'जय जवान, जय किसान' का नारा किसने दिया था?",
options:["महात्मा गांधी","लाल बहादुर शास्त्री","जवाहरलाल नेहरू","इंदिरा गांधी"],
answer:1
},
{
question:"भारत का सबसे बड़ा राज्य (क्षेत्रफल के आधार पर) कौन-सा है?",
options:["मध्य प्रदेश","राजस्थान","उत्तर प्रदेश","महाराष्ट्र"],
answer:1
},
{
question:"'लाल ग्रह' किसे कहा जाता है?",
options:["शुक्र","मंगल","बृहस्पति","शनि"],
answer:1
},
{
question:"भारत का राष्ट्रीय पशु कौन है?",
options:["शेर","बाघ","हाथी","तेंदुआ"],
answer:1
},
{
question:"'सत्यमेव जयते' किस उपनिषद से लिया गया है?",
options:["ईश","मुण्डक","कठ","छांदोग्य"],
answer:1
},
{
question:"भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन-सा है?",
options:["NH-44","NH-27","NH-48","NH-19"],
answer:0
},
{
question:"पंचायती राज सबसे पहले किस राज्य में लागू हुआ?",
options:["उत्तर प्रदेश","राजस्थान","बिहार","मध्य प्रदेश"],
answer:1
},
{
question:"भारत का राष्ट्रीय गान किसने लिखा?",
options:["बंकिम चंद्र","रवीन्द्रनाथ टैगोर","महात्मा गांधी","मुंशी प्रेमचंद"],
answer:1
},
  {
question:"मानव शरीर की सबसे बड़ी ग्रंथि कौन-सी है?",
options:["अग्न्याशय","यकृत","थायरॉइड","पिट्यूटरी"],
answer:1
},
{
question:"हरित क्रांति का संबंध किससे है?",
options:["दुग्ध उत्पादन","कृषि उत्पादन","मत्स्य पालन","वन संरक्षण"],
answer:1
},
{
question:"भारत का पहला उपग्रह कौन-सा था?",
options:["भास्कर","रोहिणी","आर्यभट्ट","इनसैट"],
answer:2
},
{
question:"भारतीय संविधान में कितनी अनुसूचियाँ हैं?",
options:["10","12","14","16"],
answer:1
},
{
question:"विश्व का सबसे बड़ा महासागर कौन-सा है?",
options:["हिन्द महासागर","अटलांटिक महासागर","प्रशांत महासागर","आर्कटिक महासागर"],
answer:2
},
{
question:"भारत का राष्ट्रीय जलचर कौन-सा है?",
options:["मगरमच्छ","गंगा डॉल्फिन","कछुआ","व्हेल"],
answer:1
},
{
question:"RBI की स्थापना किस वर्ष हुई थी?",
options:["1935","1947","1950","1969"],
answer:0
},
{
question:"संयुक्त राष्ट्र (UN) का मुख्यालय कहाँ है?",
options:["लंदन","पेरिस","न्यूयॉर्क","जिनेवा"],
answer:2
},
{
question:"भारत की सबसे लंबी नदी कौन-सी है?",
options:["यमुना","ब्रह्मपुत्र","गंगा","गोदावरी"],
answer:2
},
{
question:"'मिसाइल मैन ऑफ इंडिया' किसे कहा जाता है?",
options:["डॉ. ए.पी.जे. अब्दुल कलाम","होमी भाभा","विक्रम साराभाई","सी.वी. रमन"],
answer:0
},
  {
question:"सौरमंडल का सबसे बड़ा ग्रह कौन-सा है?",
options:["पृथ्वी","शनि","मंगल","बृहस्पति"],
answer:3
},
{
question:"भारतीय संविधान के निर्माण में कितना समय लगा?",
options:["1 वर्ष 6 माह","2 वर्ष 11 माह 18 दिन","3 वर्ष","4 वर्ष"],
answer:1
},
{
question:"भारत का राष्ट्रीय फल कौन-सा है?",
options:["केला","सेब","आम","अमरूद"],
answer:2
},
{
question:"विश्व पर्यावरण दिवस कब मनाया जाता है?",
options:["5 जून","22 अप्रैल","8 मार्च","16 सितम्बर"],
answer:0
},
{
question:"भारत की पहली महिला प्रधानमंत्री कौन थीं?",
options:["सरोजिनी नायडू","प्रतिभा पाटिल","इंदिरा गांधी","सुषमा स्वराज"],
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
