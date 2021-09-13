# Portfolio Project 1 - Game of games (placeholder name)
## Purpose

A kids quiz game with randomised question values and questions.

This Website was created for the purpose of completing the second Portfolio for the Code Institute's Full Stack Developer course. It was built using the knowledge gained from the HTML, CSS, User Centric Design, JavaScript Fundamentals and Interactive Frontend Development modules. 

A full list of technologies used can be found in the technologies section of this document. Note that GitHub as of March 2021 automatically creates a Table of Contents for the README file.

The live website can be found [here](https://ceciliaswe.github.io/portfolio-2nd/index.html)


## Game of games Responsive Website

![Website Mock Up]()


*** 
## User Experience (UX)



### The Strategy Plane
This website was created to showcase my knowledge of HTML, CSS & JavaScript and to provide users with some entertainment in the form of an online quiz game featuring. The game should be intuitive, simple to interact with and give feedback to the user.

Site Goals:

To showcase my skille in HTML, CSS and JavaScript.
To provide users with an interactive game to play.
To create an fun, interactive game that makes the user want to stay and play, and also return to the website.

#### User stories

As a user, I want to easily understand the main purpose of the site.
As a user, I want to the game to be self explanatory
As a user, I want to be able to start a game when I am ready.
As a user, I want to know whether my guess was successful or not.
As a user, I want to see my scores increase as I answer correctly.
As a user, I want a way to start a new game when the current game has ended.


### The Scope Plane

Planned features: 

* Page Heading - A page heading that has a clear caption what the page is about.
* An interactive quiz.
* A button to start the game.
* Randomised question value and question category.
* Correct guesses increments score by the randomised value of the questions.
* Restart Game button when the site user is either Game over or has exhaused all questions in a category.
* Visual display of incorrect guesses - removing 1 life (of 3).

### The Structure Plane
### The Skeleton Plane
#### Wireframes
Wireframes created usig Balsamiq are uploaded to the assets folder - [View](https://github.com/CeciliaSwe/portfolio-2nd/assets/images/Wireframe_P2_.pdf)

Game consists of:
(1) Large start-button initiating the game, (2) randomising the questions value, (3) randomising the category, and (4) displays a questions and answer options within the category. When user selects an answer, either (5) the score is incremented by the value of the question or (6) a "life" is lost. Game is over when 3 lives are lost, or all questions in a category have been displayed.

### The Surface Plane


### Design

#### Color Scheme
Being a kids game, the color scheme chosen are shades of the base colors. They bring contrast and a sense of recognition to the game. Green and red are intuitively used for the strikes left / questions wrong sections as well as the question value and score sections, while yellow, blue and orange are used for the question button, categories and question / options sections.

#### Imagery
No physical images will be used on the site.
	
#### Typography

#### Differences to Design

##### Return to [top]

## Features

### Future features
* A larger set of quiz questions and categories.
* Introduction of game modes "Easy" or "Hard" to adjust question difficulty to suit different ages.

##### Return to [top]

## Technologies
### Languages used
* HTML5
	* This project uses HTML5 as the main language for content and structure of the Website.
* CSS3
	* This project uses CSS3 for Website styling
* Javascript

### Frameworks, Libraries & Programs used
* [Font Awesome](https://fontawesome.com/)
	* Font awesome Icons are used 
* [Google Fonts](https://fonts.google.com/)
	* Google fonts are used throughout the project to import the relevant fonts
* [GitHub](https://github.com/)
	* GithHub is the hosting site used to store the source code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
* [GitPod](https://gitpod.io/)
	* GitPod is used as version control software to commit and push code to the GitHub repository where the source code is stored.
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
	* Google chromes built in developer tools are used to inspect page elements and help debug issues with the site layout and test different CSS styles.
* [balsamiq Wireframes](https://balsamiq.com/wireframes/)
	* Balsamiq was used to create wireframes and UX design during the planning and design process.
* [Am I Responsive?](http://ami.responsivedesign.is/)
	* Used to generate the screenshots for responsive design.
* [Favicon](https://favicon.io/)
	* Used to generate the questionmark favicon

	
##### Return to [top]

## Testing
Testing is required on the JavaScript quiz game created for Portfolio Project 2. All features and user stories documented in the README are to be tested.

### Validation
The W3C Markup Validator, W3C CSS Validator Services and JSHint will be used to validate the code. 
-   [W3C Markup Validator](https://validator.w3.org/nu/#textarea)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 
-   [JSHint](https://jshint.com/)

#### Fixed warnings and errors

- Button element cannot be descendant of anchor element and vice versa, resolved by wrapping anchor element in a div instead and style as a button (for modal "Play again").
- All duplicate ids removed


### User stories testing


### Further Testing 					

##### Return to [top]

## Deployment
### GitHub Pages

The project was deployed to GitHub Pages through the below steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/CeciliaSwe/portfolio-1st)
2. Click the "Setting" button "Settings" Button.
3. In the left menu, scroll down to "Pages".
4. Under "Source", click the dropdown and select "Branch: master", then click "Save".
5. Once deployed, the now published site [link](https://ceciliaswe.github.io/portfolio-2nd/) is found in the "Pages" section.

##### Return to [top]

## Credits
### Images and videos


### Code
The quiz is shuffled according to Fisher-Yates https://bost.ocks.org/mike/shuffle/.


### Acknowledgements



##### Return to [top]



