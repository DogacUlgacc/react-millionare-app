
Visit website for this app : https://dogac-millionare-app.netlify.app

Millionaire Quiz Application
Overview
The Millionaire Quiz Application is a React-based recreation of the popular TV show "Who Wants to Be a Millionaire?" It allows users to answer a series of trivia questions and accumulate prize money as they progress through the game. However, incorrect answers can drop the player back to a lower prize tier.

If the correct answer is chosen:
![Ekran görüntüsü 2023-10-20 135244](https://github.com/DogacUlgacc/react-millionare-app/assets/118834752/927f040e-49b9-442d-b0da-54204afed008)

If the wrong answer is chosen:
![Ekran görüntüsü 2023-10-20 135343](https://github.com/DogacUlgacc/react-millionare-app/assets/118834752/7415ec64-20ab-451a-8395-1a6ffd10816f)

Game is over: 
![Ekran görüntüsü 2023-10-20 135352](https://github.com/DogacUlgacc/react-millionare-app/assets/118834752/181734e7-9609-46bf-9028-3771b2b7e6f1)

The application is composed of several key components:

App.js: This is the main application component responsible for the core game logic. It orchestrates the flow of the game and renders other essential components.

Pyramid.js: This component displays the current prize tier of the player.

Quiz.js: This component handles the presentation of questions, user input, and validation of answers.

Timer.js: The timer component that counts down the remaining time for each question.

Prerequisites
Before you can run this project in your local development environment, ensure you have the following prerequisites:

Node.js
npm (Node Package Manager)

Game Mechanics
The Millionaire Quiz Application closely mimics the structure and mechanics of the famous TV show "Who Wants to Be a Millionaire?" Players progress through the game by answering a series of multiple-choice questions. Here's how the game typically works:

Question Sequence: Players start with an easy question and progress through a series of increasingly difficult questions, each associated with a specific prize amount.

Time Limit: Each question has a time limit for answering. If the time expires, the game is considered over.

Winning Tiers: The game features a prize pyramid with increasing values for each question answered correctly. Players earn and retain the prize amount associated with the last correctly answered question.

Safety Nets: At certain points in the game, the player reaches a "safety net" prize level. If they answer a question correctly after reaching a safety net, they are guaranteed to win at least that amount.

Wrong Answers: If a player answers a question incorrectly, they drop back to a lower prize tier, typically losing significant portions of their winnings.

Application Components : 
Timed Responses: It tracks the time remaining for each question and enforces the time limit.
Answer Validation: The component validates user-selected answers, manages the lifelines, and tracks the player's progress.

Author
[Dogac Ulgac]

Contact
For inquiries or support, you can reach out to ulgac1907@gmail.com

