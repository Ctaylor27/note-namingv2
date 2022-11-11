# Note Naming Flashcards

This project was created as a way to aid beginning music students to develop music literacy. Reading the notes on a page is a major challenge for young students and is a skill the will have to spend a lot of time developing. As a band director, I developed this application to give students a way to practice their note reading skills in a speedy manor. Many note naming applications exist but they almost always require a student to imput an answer. While this is valuable, I wanted a way for my students to be able to practice their notes in quick succession.

## Functionality

The app displays a flashcard containing a note. When the student clicks the "random" button or presses the space bar a new card is instantly presented. Because the app doesn't require the students to enter an answer they are able to drill flashcards extremely quickly. In the top left is a menu button that opens up to reveal an options menu. Withen this menu the student will be to select which clef they would like to study, what notes are in the rotation, and whether or not study mode is activated. Study mode enables a text display showing the name of the presented note.

Students can develop music literacy by drilling selected notes quickly.

## How it was built

This project likely could've been constructed in raw Javascript but using React made dealing with some of the quirks of the project easily fixable. I learned how to manage state through this project. The application has to track multiple states to function including the current selected note, the mode (bass or treble clef), the notes selected by the user to practice, and whether or not study mode is enabled. 

Aside from React, I decided to utilize Material UI. This made the process of developing a user interface painless. For example, the drawer that slides out to present the options menu is a prebuilt component withen Material UI. 

## Visit the site

To view the sight in your own browser, please visit: https://taylornotenaming.netlify.app
