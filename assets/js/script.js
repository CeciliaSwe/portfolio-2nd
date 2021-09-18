//Declares variables for displaying question and options
let quizContainer = document.getElementById("question-display");
let resultsContainer = document.getElementById("score-display");
let optionText1 = document.getElementById("option-1");
let optionText2 = document.getElementById("option-2");
let optionText3 = document.getElementById("option-3");
let correctAnswer = "";

//Declares variables for filtered quiz categories
let quizCatA = quiz.filter(quiz => quiz.category === "Pokemon");
let quizCatB = quiz.filter(quiz => quiz.category === "Minecraft");
let quizCatC = quiz.filter(quiz => quiz.category === "Maths");

//Declares variables for question index for each category
let posA = 0;
let posB = 0;
let posC = 0;

//Declares variable for checking if there are questions left in the quiz
let posTotal = 0;

//Wait for DOM to load, the shuffle quiz
document.addEventListener("DOMContentLoaded", function() {
  shuffle(quizCatA);
  shuffle(quizCatB);
  shuffle(quizCatC);
});

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
  
let questionButton = document.getElementById('button-start');
questionButton.addEventListener('click', clickQuestion); // left clicks

//Randomised a value from the array and displays in the value section
function questionValue() {
    let values = [10, 20, 50, 100];
    let randomValue = Math.floor(Math.random() * values.length);
    console.log(values[randomValue]);
    /*alert(`The value of the question is ${values[randomValue]}.`);*/
    document.getElementById("value-display").innerHTML = values[randomValue];
}

//Changes background color for the randomised category
function lightCategory(randomCategory) {
    if (randomCategory === 0) {
        /*alert("Picked 1")*/
        document.getElementById("c-1").style.backgroundColor = "orange";
        document.getElementById("c-1").style.color = "blue";
    } else if (randomCategory === 1) {
        /*alert("Picked 2");*/
        document.getElementById("c-2").style.backgroundColor = "orange";
        document.getElementById("c-2").style.color = "blue";
    } else if (randomCategory === 2) {
        /*alert("Picked 3");*/
        document.getElementById("c-3").style.backgroundColor = "orange";
        document.getElementById("c-3").style.color = "blue";
    };
    
}

//Filters out questions from the shuffled quiz 
// Displays questions from randomised category and increments question index for next round
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
        posTotal++;
    } else if (randomCategory === 1) {
        /*alert("Picked Minecraft");*/
        
        console.log(quizCatB[posB]);
        quizContainer.innerText = quizCatB[posB].question;
        optionText1.innerText = quizCatB[posB].choice1;
        optionText2.innerText = quizCatB[posB].choice2;
        optionText3.innerText = quizCatB[posB].choice3;
        correctAnswer = (quizCatB[posB].answer);
        posB++;
        posTotal++;
    } else if (randomCategory === 2) {
        /*alert("Picked Maths");*/
        
        console.log(quizCatC[posC]);
        quizContainer.innerText = quizCatC[posC].question;
        optionText1.innerText = quizCatC[posC].choice1;
        optionText2.innerText = quizCatC[posC].choice2;
        optionText3.innerText = quizCatC[posC].choice3;
        correctAnswer = (quizCatC[posC].answer);
        posC++;
        posTotal++;
    } else {
        /*alert("Not defined yet");*/
    }
  };  

//Shuffles quiz array according to Fisher-Yates https://bost.ocks.org/mike/shuffle/
function shuffle(quiz) {
  let currentIndex = quiz.length,  randomIndex;

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


// Compares chosen answer with correct answer and increments score or strikes
function checkAnswer(event) {
  compare();
  clear();
  incrementStrike();
  checkLength(quiz);
  blinkOn();
  blinkOff();
  onOff();
 }

 //get the value of the checked radiobutton to compare to correct answer and increment results
function compare() {
let currentAnswer = document.querySelector('input[name="test"]:checked').value;
  let currentScore = parseInt(resultsContainer.innerHTML);
  let addedScore = parseInt(document.getElementById("value-display").innerHTML);
  let incorrect = parseInt(document.getElementById("incorrect").innerHTML);

  
  if (parseInt(currentAnswer) === parseInt(correctAnswer)) {
    /*alert("WOOP you did it");*/
    resultsContainer.innerText = currentScore + addedScore;
    scoreLarge();
    } else {
      /*alert("NAH")*/
      document.getElementById("incorrect").innerHTML++; 
    }
} 

//Clears to prep for next question
function clear() {
  // Clears lit category back to grey
  document.getElementById("c-1").style.backgroundColor = "grey";
  document.getElementById("c-2").style.backgroundColor = "grey";
  document.getElementById("c-3").style.backgroundColor = "grey";
  document.getElementById("c-1").style.color = "white";
  document.getElementById("c-2").style.color = "white";
  document.getElementById("c-3").style.color = "white";
  document.getElementById("button-start").style.backgroundColor = "orange";
  

  // Clears the radiobuttons
  Array.from( document.querySelectorAll('input[name="test"]:checked'), input => input.checked = false );

  //Clear question
  quizContainer.innerText = "QUESTION";
  optionText1.innerText = "";
  optionText2.innerText = "";
  optionText3.innerText = "";
  document.getElementById("button-start").innerText = "Next";
  document.getElementById("value-display").innerText = "Value"
};

//Visually Indicates how many incorrect answers
function incrementStrike() {
  let incorrect = parseInt(document.getElementById("incorrect").innerHTML);

  if (incorrect === 1) {
    document.getElementById("strike-1").style.backgroundColor = "red";
    document.getElementById("strike-1").innerHTML = "X";
    
} else if (incorrect === 2) {
  document.getElementById("strike-2").style.backgroundColor = "red";
  document.getElementById("strike-2").innerHTML = "X";
   
} else if (incorrect === 3) {
  document.getElementById("strike-3").style.backgroundColor = "red";
  document.getElementById("strike-3").innerHTML = "X";
  gameoverPopup();
} 
};  
  
// blink "on" state
function blinkOn()
{
  document.getElementById("button-start").style.backgroundColor = "grey";
}
// blink "off" state
function blinkOff()
{
  document.getElementById("button-start").style.backgroundColor = "orange";
}
//Execute blink function every 350 ms to achieve a blink effect end after 4000 ms (less than five seconds)
function onOff() {
 for(let i=700; i < 4000; i=i+700)
 {
   setTimeout("blinkOn()",i);
   setTimeout("blinkOff()",i+350);
 }
}

let submitAnswer = document.getElementById("button-submit");
submitAnswer.addEventListener('click', checkAnswer); // left clicks*/

//all OK until here!

function gameoverPopup() {
let modal = document.getElementById("modal-gameover");
let displayScore = document.getElementById("popup");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

modal.style.display = "block";
displayScore.innerText = `GAME OVER! Your total score is ${parseInt(resultsContainer.innerHTML)}.`

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

};

function alldonePopup() {
  let modal = document.getElementById("modal-alldone");
  let displayScore = document.getElementById("popup2");
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[1];
  
  modal.style.display = "block";
  displayScore.innerText = `ALL DONE! we have no more questions for you, your total score is ${parseInt(resultsContainer.innerHTML)}. Well done!`
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  };

function checkLength() {
if ((posA >= quizCatA.length) || (posB >= quizCatB.length) || (posC >= quizCatC.length)) {
  alldonePopup();
}

}

//To visually increase nad "blink" the score size when incremented at correct answer
function scoreLarge() {
  largeOn();
  largeOff();
  largeOnOff();
}

// large "off" state
function largeOff()
{
  document.getElementById("score-display").style.fontSize = "initial";
}
// large "on" state
function largeOn()
{
  document.getElementById("score-display").style.fontSize = "200%";
}
//Execute blink function every 350 ms to achieve a blink effect end after 4000 ms (less than five seconds)
function largeOnOff() {
 for(let i=600; i < 1300; i=i+600)
 {
   setTimeout("largeOn()",i);
   setTimeout("largeOff()",i+300);
 }
}