const questionArray = [
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false },
        ],
    },
    {
        question: "Who painted the 'Starry Night'?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: true },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Michelangelo", correct: false },
        ],
    },
    {
        question: "Which gas is responsible for the ozone layer depletion?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Methane", correct: false },
            { text: "Chlorofluorocarbons (CFCs)", correct: true },
            { text: "Carbon Dioxide", correct: false },
        ],
    },
    {
        question: "What is the largest species of shark?",
        answers: [
            { text: "Great White Shark", correct: false },
            { text: "Hammerhead Shark", correct: false },
            { text: "Whale Shark", correct: true },
            { text: "Tiger Shark", correct: false },
        ],
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
        ],
    },
    {
        question: "Which element is the most abundant in the Earth's crust?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Silicon", correct: false },
            { text: "Iron", correct: false },
            { text: "Calcium", correct: false },
        ],
    },
    {
        question: "What is the largest desert in North America?",
        answers: [
            { text: "Sahara Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Mojave Desert", correct: true },
            { text: "Atacama Desert", correct: false },
        ],
    },
    {
        question: "Who is the author of '1984'?",
        answers: [
            { text: "George Orwell", correct: true },
            { text: "Aldous Huxley", correct: false },
            { text: "Ray Bradbury", correct: false },
            { text: "Philip K. Dick", correct: false },
        ],
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "Germany", correct: false },
            { text: "China", correct: false },
            { text: "Russia", correct: false },
            { text: "Japan", correct: true },
        ],
    },
    {
        question: "What is the chemical symbol for copper?",
        answers: [
            { text: "Cu", correct: true },
            { text: "Co", correct: false },
            { text: "Cr", correct: false },
            { text: "Cp", correct: false },
        ],
    },
    {
        question: "Which gas is known as the 'Laughing Gas'?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrous Oxide", correct: true },
            { text: "Helium", correct: false },
            { text: "Carbon Dioxide", correct: false },
        ],
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        answers: [
            { text: "Mark Twain", correct: false },
            { text: "F. Scott Fitzgerald", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
        ],
    },
    {
        question: "What is the largest species of penguin?",
        answers: [
            { text: "Emperor Penguin", correct: true },
            { text: "African Penguin", correct: false },
            { text: "Gentoo Penguin", correct: false },
            { text: "Little Blue Penguin", correct: false },
        ],
    },
    {
        question: "Which planet is often called the 'Red Planet'?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false },
        ],
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: [
            { text: "Ag", correct: true },
            { text: "Au", correct: false },
            { text: "Fe", correct: false },
            { text: "Hg", correct: false },
        ],
    },
    {
        question: "Which element is the most abundant in the universe?",
        answers: [
            { text: "Hydrogen", correct: true },
            { text: "Helium", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Carbon", correct: false },
        ],
    },
    {
        question: "What is the smallest continent in the world?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "North America", correct: false },
        ],
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
        ],
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Venus", correct: false },
        ],
    },
    {
        question: "What is the main gas in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Hydrogen", correct: false },
        ],
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
        ],
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Hg", correct: false },
        ],
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Sao Paulo", correct: false },
            { text: "Brasilia", correct: true },
            { text: "Rio de Janeiro", correct: false },
            { text: "Salvador", correct: false },
        ],
    },
    {
        question: "Which gas is known as the 'silent killer'?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Monoxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ],
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answers: [
            { text: "J.K. Rowling", correct: false },
            { text: "George Orwell", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "Ernest Hemingway", correct: false },
        ],
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false },
        ],
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Kilimanjaro", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Mount McKinley", correct: false },
        ],
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false },
        ],
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
        ],
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false },
        ],
    },

    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "African Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false },
        ],
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ],
    },

    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ],
    },

    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Venus", correct: false },
        ],
    },
    {
        question: "What is the main gas in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Hydrogen", correct: false },
        ],
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
        ],
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Hg", correct: false },
        ],
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Sao Paulo", correct: false },
            { text: "Brasilia", correct: true },
            { text: "Rio de Janeiro", correct: false },
            { text: "Salvador", correct: false },
        ],
    },
    {
        question: "Which gas is known as the 'silent killer'?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Monoxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ],
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answers: [
            { text: "J.K. Rowling", correct: false },
            { text: "George Orwell", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "Ernest Hemingway", correct: false },
        ],
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false },
        ],
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Kilimanjaro", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Mount McKinley", correct: false },
        ],
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false },
        ],
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
        ],
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Gobi Desert", correct: false },
            { text: "Sahara Desert", correct: true },
            { text: "Atacama Desert", correct: false },
            { text: "Arabian Desert", correct: false },
        ],
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Hydrogen", correct: false },
        ],
    },
    {
        question: "Who wrote 'War and Peace'?",
        answers: [
            { text: "Fyodor Dostoevsky", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Leo Tolstoy", correct: true },
            { text: "Herman Melville", correct: false },
        ],
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Earth", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
        ],
    },
    {
        question: "Which continent is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "Europe", correct: false },
            { text: "Australia", correct: false },
            { text: "North America", correct: false },
            { text: "Asia", correct: true },
        ],
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: [
            { text: "Ag", correct: true },
            { text: "Au", correct: false },
            { text: "Fe", correct: false },
            { text: "Hg", correct: false },
        ],
    },
    {
        question:
            "Who was the first woman to fly solo across the Atlantic Ocean?",
        answers: [
            { text: "Amelia Earhart", correct: true },
            { text: "Bessie Coleman", correct: false },
            { text: "Harriet Quimby", correct: false },
            { text: "Jacqueline Cochran", correct: false },
        ],
    },
];

export default questionArray;
