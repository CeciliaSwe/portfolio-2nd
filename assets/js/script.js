let quizContainer = document.getElementById("q-out");
let resultsContainer = document.getElementById("r-out");
let optionText1 = document.getElementById("option-1");
let optionText2 = document.getElementById("option-2");
let optionText3 = document.getElementById("option-3");
let correctAnswer = "";


// Uses event listner to initialize the quiz with assigning a random value, category and question
function clickQuestion (event) {
  let selectDiv = document.getElementsByClassName('category');
  let classLength = selectDiv.length;
    
  /*alert("There are "+classLength+" category classes in the html code");*/
  let randomCategory = Math.floor(Math.random() * selectDiv.length);
  
  /*console.log(randomCategory, selectDiv[randomCategory]);
  console.log(randomCategory);
  console.log('Received the ' + event.type + " event!");
  console.log('"this" currently refers to', this.id);
  console.log('You clicked the button!\n');*/
    
    questionValue();
    lightCategory(randomCategory);   
    displayQ(randomCategory);
}
  
let questionButton = document.getElementById('question');
questionButton.addEventListener('click', clickQuestion); // left clicks

function questionValue() {
    let values = [10, 20, 50, 100];
    let randomValue = Math.floor(Math.random() * values.length);
    console.log(values[randomValue]);
    /*alert(`The value of the question is ${values[randomValue]}.`);*/
    document.getElementById("value").innerHTML = values[randomValue];
}

function lightCategory(randomCategory) {
    if (randomCategory === 0) {
        /*alert("Picked 1")*/
        document.getElementById("c-1").style.backgroundColor = "orange";
    } else if (randomCategory === 1) {
        /*alert("Picked 2");*/
        document.getElementById("c-2").style.backgroundColor = "orange";
    } else if (randomCategory === 2) {
        /*alert("Picked 3");*/
        document.getElementById("c-3").style.backgroundColor = "orange";
    } else if (randomCategory === 3) {
        /*alert("Picked 4");*/
        document.getElementById("c-4").style.backgroundColor = "orange";
    };
    
}


//Shuffles array according to Fisher-Yates https://bost.ocks.org/mike/shuffle/

function shuffle(quiz) {
  var currentIndex = quiz.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [quiz[currentIndex], quiz[randomIndex]] = [
      quiz[randomIndex], quiz[currentIndex]];
  }

  return quiz;
}


//Filter out questions from a specific category
let quizCatA = quiz.filter(quiz => quiz.category === "Pokemon");
let quizCatB = quiz.filter(quiz => quiz.category === "Minecraft");
let quizCatC = quiz.filter(quiz => quiz.category === "Maths");
let posA = 0;
let posB = 0;
let posC = 0;



// compares chosen answer with correct answer and increments score or strikes
function checkAnswer(event) {
  //get the value of the checked radiobutton to compare to correct answer and increment results
  let currentAnswer = document.querySelector('input[name="test"]:checked').value;
  let currentScore = parseInt(resultsContainer.innerHTML);
  let addedScore = parseInt(document.getElementById("value").innerHTML);
  let incorrect = parseInt(document.getElementById("incorrect").innerHTML);

  //
  if (parseInt(currentAnswer) === parseInt(correctAnswer)) {
    alert("WOOP you did it");
    resultsContainer.innerText = currentScore + addedScore;
    } else{
      alert("NAH")
      document.getElementById("incorrect").innerHTML++; 
    }

    clear();
    incrementStrike();
    show();
    hide();
    toggle();
 }

 

 function displayQ(randomCategory) {
  if (randomCategory === 0) {
      /*alert("Picked Pokemon");*/
      console.log(quizCatA[posA]);
      quizContainer.innerText = quizCatA[posA].question;
      optionText1.innerText = quizCatA[posA].choice1;
      optionText2.innerText = quizCatA[posA].choice2;
      optionText3.innerText = quizCatA[posA].choice3;
      correctAnswer = (quizCatA[posA].answer);
      posA++;
  } else if (randomCategory === 1) {
      /*alert("Picked Minecraft");*/
      console.log(quizCatB[posB]);
      quizContainer.innerText = quizCatB[posB].question;
      optionText1.innerText = quizCatB[posB].choice1;
      optionText2.innerText = quizCatB[posB].choice2;
      optionText3.innerText = quizCatB[posB].choice3;
      correctAnswer = (quizCatB[posB].answer);
      posB++;
  } else if (randomCategory === 2) {
      /*alert("Picked Maths");*/
      console.log(quizCatC[posC]);
      quizContainer.innerText = quizCatC[posC].question;
      optionText1.innerText = quizCatC[posC].choice1;
      optionText2.innerText = quizCatC[posC].choice2;
      optionText3.innerText = quizCatC[posC].choice3;
      correctAnswer = (quizCatC[posC].answer);
      posC++;
  } else {
      /*alert("Not defined yet");*/
  }
};  

 let submitAnswer = document.getElementById("submit-answer");
 submitAnswer.addEventListener('click', checkAnswer); // left clicks*/

//all OK until here!
