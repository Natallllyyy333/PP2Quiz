# Quiz Website
(Developer: Nataliia Illiashenko)

![Mockup image](docs/mockup.jpg)

[Live webpage](https://natallllyyy333.github.io/PP2Quiz/)

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
    4. [Site Owner Stories](#site-owner-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
    1. [EmailJS API](#emailjs-api)
10. [Credits](#credits)
11. [Acknowledgments](#acknowledgments)

## Project Goals 
Quiz Website is a classic Quiz game with a chouice of 3 quizes: IT, Physics and Psychology. 

### User Goals
- Play a fun and engaging quiz game
- Test your general knowledge by answering questions on IT, Physics or Psychology.

### Site Owner Goals
- Creating a fun and engaging quiz qagme that users will want to play again and again.
- The game should be fully responsive to be able to be played on different devices.

## User Experience

### Target Audience
- casual gamers
- people who like quiz games
- people looking for a quick and easy yet engaging game 

### User Requirements and Expectations
- A simple and intuitive navigation system
- Quick, easy, and fun to play
- Links and functions that work as expected
- Good presentation and a visually appealing design regardless of screen size
- An easy way to leave feedback
- Accessibility

### User Stories
1. As a user, I want to be able to pick a quiz topic.
2. As a user, I want to test my general knowledge by answering different questions
3. As a user, I want to be able to pick the answer by clicking the mouse
4. As a user, I want to know what the correct answer was in case I don't guess it correctly
5. As a user, I want feedback on my correct answers
6. As a user, I want confirmation that my feedback was sent

### Site Owner Stories
7. As a site owner, I want users to be able to contact us or make suggestions for new questions or quizes .

## Design

### Design Choices
The game was designed to have an engaging effect on the user. The idea was to let the user check their common knowledge by playing a quiz game on 3 subjects: IT, Physics and Psychology.

### Colour
The color palette was chosen to match violet and purple colour of the background. A color picker was used to pick colors from the background image, these colors were then further adjusted to meet accessibility criteria. 

<details><summary>Colour palette</summary>
<img src="docs/features/color-palette.jpg">
</details>

### Fonts
For the fonts, Poppins and Impact, Gill Sans font stack was used. 

### Structure
The page is structured in a user-friendly and easy-to-learn way. Upon arriving at the website the user sees a screen with the option to choose a subject for the quiz game. The website consists of three separate pages:

- A homepage with 4 different views:
    - one for selecting a subject
    - one for the Quiz Guide
    - one for playing the game
    - one that shows the score when the quiz is over
    - one that is shown after the user presses the button High Scores to see the 3 latest best results of the game
- A contact form
- A form confirmation view
<!-- - A 404 page -->

### Wireframes

<details><summary>Start screen</summary>
<img src="./docs/wireframes/start_screen.jpg">
</details>
<details><summary>Guide screen</summary>
<img src="./docs/wireframes/guide.png">
</details>
<details><summary>Game screen</summary>
<img src="./docs/wireframes/game.png">
</details>
<details><summary>Score screen</summary>
<img src="./docs/wireframes/score_screen.png">
</details>
<details><summary>High Scores screen</summary>
<img src="./docs/wireframes/high_scores_screen.png">
</details>
<details><summary>Contact Us screen</summary>
<img src="./docs/wireframes/contact_page.png">
</details>
<details><summary>Form confirmation screen</summary>
<img src="./docs/wireframes/form_confirmation_screen.png">
</details>
<!-- <details><summary>404 page</summary>
<img src="./docs/wireframes/404-page.png">
</details> -->

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- Bootstrap v5.0
- Git
- GitHub
- Gitpod
- Tinypng
- Paint<span>.</span>NET
- Balsamiq
- Font Awesome
- Favicon<span>.</span>io
- JSHint
- Lighthouse
- W3C Markup validation service
- W3C Jigsaw CSS validation service 
- WAVE WebAIM web accessibility evaluation tool
- EmailJS
- Miro

## Features
The site consists of two pages and nine features

### Header
- Featured on all pages
- Consists of the game logo, a websit title, a moto and a nav bar on the Home paga and consists of the game logo and a nav bar on the Contact Us page

<details><summary>Header</summary>
<img src="./docs/features/feature_heading.jpg">
<img src="./docs/features/feature_heading_.jpg">
</details>

### Start screen
- Provides an option to choose between three different game subjects.
- Allows a user to choose a username and enter it in the game.
- User story covered: 1

<details><summary>Start screen</summary>
<img src="./docs/features/feature-start-screen.jpg">
</details>

### Game screen
- Consists of 6 different sections:
    - A web site title
    - The current quiz subject 
    - A section with the current score and the h-score  
    - The quiz current question 
    - Options to chose from the answer options
    - Answer number of total number of questions
    - A button "Next" to go to the next question

    - User stories covered: 4
    - User stories covered: 2, 3

<details><summary>Game screen</summary>
<img src="docs/features/feature-game-screen.jpg">
</details>

### Game Score screen
- Consists of four sections

    - Screen title - "Quiz Result"
    - The quiz total score in percens in a round diagram, representing the score 
    - A section with the username and the total score and the h-score  
    - A button section with buttons "High Scores" to go to the High Scores Screen, a button "Try Again" - to start the same quiz with the same user name again and a button "Go To Home" to go bac to the Start Screen

    - User stories covered: 4

<details><summary>Game Score</summary>
<img src="./docs/features/feature_score.jpg">
</details>

### High Scores screen
- Consists of four sections
    - Screen title - "Best of the Best" with crowns pictograms
    - A section with three latest playes, their the scores in the descending order, date and time of their games
    - Button "Back to score" to go back to the user's score

- User story covered: 5

<details><summary>Correct Guess screen</summary>
<img src="./docs/features/feature-high-scores-screen.jpg">
</details>

### Contact form
- A way for the user to provide feedback
- Consists of five sections
    - Title with a question to the user - "Questions? - Send us a message." 
    - An input section for a user to enter their name
    - An input section for a user to enter their email
    - An area input section for a user to enter their feedback
    - Button "Send Message" 
- User story covered 7 

<details><summary>Contact Form</summary>
<img src="./docs/features/feature-contact-form.jpg">
</details>

### Form confirmation
- Provides the user with feedback after the form has been submitted 
- User story covered: 6

<details><summary>Form confirmation</summary>
<img src="./docs/features/feature-form-confirmation.jpg">
</details>

<!-- ### 404 message
- Provides the user with a way to return to the game after clicking on a broken link

<details><summary>404 message</summary>
<img src="docs/features/feature-404.jpg">
</details> -->

## Validation

### HTML Validation
The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors no warnings to show.
<details><summary>Home</summary>
<img src="./docs/validation/html-validation-index.jpg">
</details>
<details><summary>Contact Us</summary>
<img src="./docs/validation/html-validation-contact.jpg">
</details>
<!-- <details><summary>404</summary>
<img src="docs/validation/html-validation-404.jpg">
</details> -->

### CSS Validation
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. When validating the page as a whole, the validator shows some errors linked to Bootstrap v5.0. When validating just my custom CSS it passes with no errors.

<details><summary>Full page</summary>
<img src="./docs/validation/css-validation-full-page.jpg">
</details>
<details><summary>style.css</summary>
<img src="docs/validation/css-validation-custom-css.jpg">
</details>

### JavaScript Validation
JSHint Static Code Analysis Tool for JavaScript was used to validate the Javascript files. No significant issues were found.
<details><summary>game-settings.js</summary>
<img src="docs/validation/js-validation-game-settings.jpg">
</details>
<details><summary>guessing-be.js</summary>
<img src="docs/validation/js-validation-guessing-bee.jpg">
</details>
<details><summary>contact.js</summary>
<img src="docs/validation/js-validation-contact.jpg">
</details>