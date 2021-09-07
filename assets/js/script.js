//Declare variables to display question, options, results and current questions index
let quizContainer = document.getElementById("q-out");
let resultsContainer = document.getElementById("r-out");
let optionText1 = document.getElementById("option-1");
let optionText2 = document.getElementById("option-2");
let optionText3 = document.getElementById("option-3");
let correctAnswer = "";
let posA = 0;
let posB = 0;
let posC = 0;

//Filter out questions from a specific category
let quizCatA = quiz.filter(quiz => quiz.category === "Pokemon");
let quizCatB = quiz.filter(quiz => quiz.category === "Minecraft");
let quizCatC = quiz.filter(quiz => quiz.category === "Maths");


// Uses event listner to initialize the quiz and run applicable functions
function clickQuestion (event) {

    let selectDiv = document.getElementsByClassName('category');
    let classLength = selectDiv.length;
      
    /*alert("There are "+classLength+" category classes in the html code");*/
    //Randomizes a category(number) from available ones
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

//Event listner for clicking the start game buttom
let questionButton = document.getElementById('button');
questionButton.addEventListener('click', clickQuestion);

//Randomises a value for the current question and displays it in the value section
function questionValue()  {
    let values = [10, 20, 50, 100];
    let randomValue = Math.floor(Math.random() * values.length);
    /*console.log(values[randomValue]);
    alert(`The value of the question is ${values[randomValue]}.`);*/
    document.getElementById("value").innerHTML = values[randomValue];
}

//Lights up the randomised category based on index number
function lightCategory(randomCategory) {
    if (randomCategory === 0) {
        /*alert("Picked 1");*/
        document.getElementById("c-1").style.backgroundColor = "orange";
    } else if (randomCategory === 1) {
        /*alert("Picked 2");*/
        document.getElementById("c-2").style.backgroundColor = "orange";
    } else if (randomCategory === 2) {
        /*alert("Picked 3");*/
        document.getElementById("c-3").style.backgroundColor = "orange";
    };
}