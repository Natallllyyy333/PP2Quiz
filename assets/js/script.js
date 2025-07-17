const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const username = document.getElementById('username');
 const btnSaveName = document.querySelector('.btnSaveName');

  const saveYourName = document.querySelector('.saveYourName');
  let enterYourName = document.querySelector('.enterYourName');
  const quizChoice = document.querySelector('.quizChoice');
  
  const choiceTitle = document.querySelector('.choice_title');
  
  const quizTitle = document.getElementsByClassName('quizTitle');
  
let currentQuestions = [];
let quizTitleText = '';
const quizTitleElement = document.querySelector('.quizTitle');


const itBtn = document.getElementById('IT');


window.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
window.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });


document.addEventListener('keydown', (e) => {
  const navigationKeys = [
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'PageUp', 'PageDown', 'Home', 'End', 'Space'
  ];
  
  if (navigationKeys.includes(e.key)) {
    e.preventDefault();
    e.stopPropagation();
  }
});


document.getElementById('physics').addEventListener('click', function() {
  currentQuestions = questionsPhysics;

 quizTitleText = "Physics Quiz";
  updateQuizTitle();
quizChoice.innerHTML = `<h2 class = 'bigger'>Physics Quiz is ready for you!</h2>`;
  choiceTitle.innerHTML = '';
});

document.getElementById('IT').addEventListener('click', function() {
  currentQuestions = questionsIT; 
quizTitleText =  `Basics of IT`;
updateQuizTitle();
quizChoice.innerHTML = `<h2 class = 'bigger'>IT Quiz is ready for you!</h2>;`;
choiceTitle.innerHTML = '';
});
document.getElementById('psychology').addEventListener('click', function() {
  currentQuestions = questionsPsychology;

quizTitleText = "Psychology Quiz";
  updateQuizTitle();
quizTitle.innerHTML = `<h1>Psychology Quiz</h1>`;
quizChoice.innerHTML = `<h2 class = 'bigger'>Psychology Quiz is ready for you!</h2>`;
choiceTitle.innerHTML = '';
});

function updateQuizTitle() {
  quizTitleElement.textContent = quizTitleText;
}


btnSaveName.onclick = () => {
   
    if(username.value !== ''){
      saveYourName.innerHTML = `<h2 >Hi ${username.value}!</h2> <br>`;
       
    }
   else{
    
enterYourName.classList.add('red');
   
    
    }
};
startBtn.onclick = () => {
    
    if(username.value !== '' && saveYourName.innerHTML === `<h2>Hi ${username.value}!</h2> <br>` && choiceTitle.innerHTML === ''){
    popupInfo.classList.add('active');
    main.classList.add('active');
    }
    else{
      choiceTitle.classList.add('violet_large');
      enterYourName.classList.add('red_large');
    }
    
       

     };
    

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
     main.classList.remove('active');
};

continueBtn.onclick = () => {
   quizSection.classList.add('active');
    popupInfo.classList.remove('active');
     main.classList.remove('active');
     quizBox.classList.add('active');

     showQuestions(0);
     questionCounter(1);
     headerScore();
};

tryAgainBtn.onclick = () => {
        quizBox.classList.add('active');
        nextBtn.classList.remove('active');
        resultBox.classList.remove('active');

 questionCount = 0;
 questionNumb = 1;
 userScore = 0;
 showQuestions(questionCount);
questionCounter(questionNumb);
headerScore();

};

goHomeBtn.onclick = () => {
        quizSection.classList.remove('active');
        nextBtn.classList.remove('active');
        resultBox.classList.remove('active');

 questionCount = 0;
 questionNumb = 1;
 userScore = 0;
 showQuestions(questionCount);
questionCounter(questionNumb);
headerScore();
location.reload(); 

};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;



const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if(questionCount < currentQuestions.length - 1){
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    questionCounter(questionNumb);

     nextBtn.classList.remove('active');
    }
 else{
   
    showResultBox();
 }
};



const optionList = document.querySelector('.option-list');

function showQuestions(index) {
    const questionText = document.querySelector(".question-text");
    
    questionText.textContent = `${currentQuestions[index].numb}. ${currentQuestions[index].question}`;

    let optionTag = 
    `<div class="option"><span>${currentQuestions[index].options[0]}</span></div>
    <div class="option"><span>${currentQuestions[index].options[1]}</span></div>
    <div class="option"><span>${currentQuestions[index].options[2]}</span></div>
    <div class="option"><span>${currentQuestions[index].options[3]}</span></div>
   
    `;
 optionList.innerHTML = optionTag;
  
 const option = document.querySelectorAll('.option'); 
 for (let i = 0; i < option.length; i++){
    option[i].setAttribute('onclick', 'optionSelected(this)');

    
 }
  
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = currentQuestions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer){

 answer.classList.add('correct');
 userScore += 1;
 headerScore();
 
 answer.innerHTML += '<i class="fa-solid fa-circle-check" style="color: #00a63d ; display : block;"></i>';

    }
    else{
answer.classList.add('incorrect');
 answer.innerHTML += '<i class="fa-solid fa-circle-xmark" style="color: #a60045; display : block;"></i>';


for (let i = 0; i < allOptions; i++){
    if (optionList.children[i].textContent == correctAnswer){

        optionList.children[i].setAttribute('class', 'option correct');
        optionList.children[i].innerHTML += '<i class="fa-solid fa-circle-check" style="color: #00a63d ; display : block;"></i>';


    }
  } 
    }

  
  for (let i = 0; i < allOptions; i++){
    optionList.children[i].classList.add('disabled');
  } 
  nextBtn.classList.add('active');


}

function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${currentQuestions.length} Questions`;
}

function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${currentQuestions.length}`;
}

 function showResultBox(){
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.innerHTML = `<p class = 'center'>${username.value}, <br> Your Score is <br> ${userScore} out of ${currentQuestions.length}</p>`;
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / currentQuestions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`; 



        if (progressStartValue === progressEndValue){
            clearInterval(progress); 
        }
    }, speed);



 }  

 
 

        
 const STORAGE_KEY = 'savedItems';
 const MAX_RESULTS = 3; 

const addBtn = document.getElementById('saveScoreBtn');
const itemsList = document.getElementById('highScoresList');
 const highScores = document.querySelector('.highScores');
 const result = document.querySelector('.result');


addBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  
  
  highScores.classList.add('active');
  
  
});

result.addEventListener('click', function(event) {
  event.preventDefault(); 
  
  
  highScores.classList.remove('active');
  
 
});







function loadItems() {
  const savedItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
 itemsList.innerHTML = ''; 
   savedItems.sort((a, b) => b.score - a.score);

  savedItems.slice(0, MAX_RESULTS).forEach(item => {
    addItemToPage(item);
  });
}

function saveHighScore() {
   if (!username || !username.value.trim()) {
    console.error('Элемент username не найден или пустой');
    return;
  }

  const newItem = {
    name: username.value.trim(),
    score: userScore,
    date: new Date().toLocaleString()
  };

  
  let savedItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  savedItems.unshift(newItem); 

  savedItems  = savedItems .slice(0, MAX_RESULTS);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems));
  
  loadItems();
}

function addItemToPage(item) {
    
  const li = document.createElement('li');
  li.innerHTML = `
    <span>Name: ${item.name}</span><br>
    <span>Score: ${item.score}</span><br>
       <span> Date, Time: ${item.date}</span><br>
  `;
  itemsList.appendChild(li);

}


itBtn.addEventListener('click', () => {
  startQuiz('general'); 
});

