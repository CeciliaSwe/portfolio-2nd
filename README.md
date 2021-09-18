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
This website was created to showcase my knowledge of HTML, CSS & JavaScript and to provide users with some entertainment in the form of an online quiz game featuring categories for Pokemon, Minecraft and Maths. The game should be intuitive, simple to interact with and give feedback to the user.

Site Goals:

* To showcase my skille in HTML, CSS and JavaScript.
* To provide users with an interactive game to play.
* To create an fun, interactive game that makes the user want to stay and play, and also return to the website.

#### User stories

New users:
As a new user, I want to easily understand the main purpose of the site.
As a new user, I want to the game to be self explanatory
As a new user, I want to be able to start a game when I am ready.
As a new user, I want to know whether my guess was successful or not.
As a new user, I want to see my scores increase as I answer correctly.
As a new user, I want a way to start a new game when the current game has ended.

Returning users:
As a returning user, I want to improve my precious score.
As a returning user, I want to see whether the game has any new features or questions and/or categories.

Frequent users:
As per returning users


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

The game consists of:
(1) Large start-button initiating the game, (2) randomising the question value, (3) randomising the category, and (4) displays a questions and answer options within the category. When user selects an answer, either (5) the score is incremented by the value of the question or (6) a "life" is lost. Game is over when 3 lives are lost, or all questions in a category have been displayed.

### The Surface Plane


### Design

#### Color Scheme
Being a kids game, the color scheme chosen are shades of the base colors. They bring contrast and a sense of recognition to the game. Green and red are intuitively used for the strikes left / questions wrong sections as well as the question value and score sections, while yellow, blue and orange are used for the question button, categories and question / options sections.

#### Imagery
No physical images will be used on the site.
	
#### Typography
The font used for my website is "Glory". The font is provided by Google Fonts.

#### Differences to Design
Only 3 categories was included in the final game instead of 4.

##### Return to [top]

## Features
The application consists of one single page, with modals to popup when game is over. 
Clicking "Play" initiates the game; randomising a value (being displayed in the value box), a category (lighting up in orange) and displaying a question with corresponding options.
Selecting an answer option and clicking "Submit" will either (1) increment "Your Score is:" by the value randomised for the questions (and the score box blinks in green for clear feedback that the answer was correct) or (2) turn one of the 3 strikes/lives red and replace the numver with an "X".
The Start button will then display "Next" and blink orange/dark grey to visually guide the user to their next action.
This is repeated until either (1) the users' 3 lives are used or (2) all questions for a category is exhaused. Corresponding modal will popup and let the user know that the Game is over, the reason for game over and their total score. 
The user can chose to play again or close the modal.


### Future features
* A larger set of quiz questions and categories.
* Introduction of game modes "Easy" or "Hard" to adjust question difficulty to suit different ages.
* Implement a timer function and allow the user to chose between a set number of attempts and/or a time limit.

##### Return to [top]

## Technologies
### Languages used
* HTML5
	* This project uses HTML5 as the main language for content and structure of the Website.
* CSS3
	* This project uses CSS3 for Website styling
* Javascript
	*  This project uses Javascript for the required logic to allow for interactivity

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

### Project Creation
The project was created using the CI Gitpod Full Template.
1. Navigate to CI Gitpod Full Template [here] (https://github.com/Code-Institute-Org/gitpod-full-template) and click the 'Use this template' button.
2. Enter chosen repository name, then click "Create repository from template".
3. Navigate to the new repository on GitHub and click the Gitpod button to build the workspace.
4. The following commands were used for version control throughout the project:

git add filename - to add files to the staging area before committing.
git commit -m "commit message" - to commit changes to the local repository.
git push - to push committed changes to the GitHub repository.

### Local Deployment/Clone
As described on [GitHub Docs] (https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

1. Navigate to the GitHub Repository main page,
2. Above the list of files, click the Code drop down menu.
3. To clone the repository using HTTPS, under "Clone with HTTPS", click the icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the icon. To clone a repository using GitHub CLI, click Use GitHub CLI, then click the icon. 
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
7. Press Enter to create your local clone.


### Remote Deployment
Assuming you have cloned the repository, it is deployed to GitHub Pages through the below steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/CeciliaSwe/portfolio-1st)
2. Click the "Setting" button "Settings" Button.
3. In the left menu, scroll down to "Pages".
4. Under "Source", click the dropdown and select "Branch: master", then click "Save".
5. Once deployed, the now published site [link](https://ceciliaswe.github.io/portfolio-2nd/) is found in the "Pages" section.

### Common
#### Fork project
This is used to propose changes to someone else's project or to use someone else's project as a starting point for your own idea. 

1. Navigate to the GitHub Repository you want to fork.
2. On the top right of the page under the header, click "Fork".

This will create a duplicate of the full project in your GitHub Repository.

##### Return to [top]

## Credits
### Images and videos


### Code
* The quiz is shuffled according to Fisher-Yates https://bost.ocks.org/mike/shuffle/.
* How to create a gradient background color was developed from a tutorial on [w3schools](https://www.w3schools.com/cssref/func_linear-gradient.asp)
* How to create a modal was developed from a tutorial on [w3schools](https://www.w3schools.com/howto/howto_css_modals.asp)
* How to using scripts to control blinking was developed from a tutorial on [w3.org](https://www.w3.org/TR/WCAG20-TECHS/SCR22.html) 


### Acknowledgements



##### Return to [top]



