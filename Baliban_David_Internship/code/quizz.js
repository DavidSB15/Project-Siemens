let questionNr = 0;
let score = 0;

const questions = 
[
    //could easily generate 29 more questions, but for testing purposes I let these. Also the last 16 questions
    //are commented so it is way easier to verify the functinality of the application

    { id: 1, text: "Who was the first President of the United States?", choices: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], correctAnswer: 1 },
    { id: 2, text: "When did World War II end?", choices: ["1943", "1945", "1947", "1950"], correctAnswer: 1 },
    { id: 3, text: "What year did the Titanic sink?", choices: ["1909", "1912", "1915", "1920"], correctAnswer: 1 },
    { id: 4, text: "What is the value of pi?", choices: ["3.1415", "3.1459", "3.1592", "3.1628"], correctAnswer: 0 },
    { id: 5, text: "Solve: 5 + 8 x 2 - 4", choices: ["13", "14", "15", "16"], correctAnswer: 1 },
    /*
    { id: 6, text: "What is the square root of 81?", choices: ["7", "8", "9", "10"], correctAnswer: 2 },
    { id: 7, text: "Which element has the symbol 'H'?", choices: ["Helium", "Hydrogen", "Hafnium", "Hassium"], correctAnswer: 1 },
    { id: 8, text: "What is the largest planet in our solar system?", choices: ["Earth", "Mars", "Jupiter", "Venus"], correctAnswer: 2 },
    { id: 9, text: "What does DNA stand for?", choices: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Deoxyribose Nucleic Acid", "Diacetylides Nicotinamide Acid"], correctAnswer: 0 },
    { id: 10, text: "Who wrote the 'I Have a Dream' speech?", choices: ["Malcolm X", "Nelson Mandela", "Martin Luther King Jr.", "Barack Obama"], correctAnswer: 2 },
    { id: 11, text: "Which ancient civilization built the pyramids?", choices: ["Mayans", "Romans", "Greeks", "Egyptians"], correctAnswer: 3 },
    { id: 12, text: "What is the value of 5^3 (5 to the power of 3)?", choices: ["125", "150", "100", "75"], correctAnswer: 0 },
    { id: 13, text: "What is the chemical symbol for gold?", choices: ["Au", "Ag", "G", "Gl"], correctAnswer: 0 },
    { id: 14, text: "Which planet is known as the 'Evening Star'?", choices: ["Mars", "Venus", "Mercury", "Jupiter"], correctAnswer: 1 },
    { id: 15, text: "Who was the first woman to win a Nobel Prize?", choices: ["Marie Curie", "Mother Teresa", "Rosa Parks", "Amelia Earhart"], correctAnswer: 0 },
    { id: 16, text: "What year did World War I start?", choices: ["1914", "1916", "1918", "1920"], correctAnswer: 0 },
    { id: 17, text: "What is the value of 4! (4 factorial)?", choices: ["20", "24", "16", "28"], correctAnswer: 1 },
    { id: 18, text: "Which gas do plants absorb from the atmosphere?", choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: 1 },
    { id: 19, text: "What is the smallest bone in the human body?", choices: ["Stapes", "Femur", "Tibia", "Radius"], correctAnswer: 0 },
    { id: 20, text: "Who was the first Emperor of Rome?", choices: ["Julius Caesar", "Augustus", "Nero", "Constantine"], correctAnswer: 1 },
    { id: 21, text: "Which country was formerly known as Persia?", choices: ["Iraq", "Iran", "Syria", "Turkey"], correctAnswer: 1 }
    */
];

function randomize(array) 
{
    for (let i = array.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() 
{
    //questions = await fetchQuestions();
    randomize(questions);
    displayQuestion();
}

function displayQuestion() 
{
    const crtQuestion = questions[questionNr];

    document.getElementById("question").innerText = crtQuestion.text;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    crtQuestion.choices.forEach((choice, index) => 
    {
        const optionButton = document.createElement("button");
        optionButton.innerText = choice;
        optionButton.classList.add("button");
        optionButton.onclick = function () 
        {
            document.querySelectorAll('.button').forEach(btn =>
            {
                btn.classList.remove('selected');
            });
            optionButton.classList.add('selected');
            selectedAnswerIndex = index;
        };
        optionsContainer.appendChild(optionButton);
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit Answer";
    submitButton.classList.add("button");
    submitButton.onclick = function () 
    {
        if (selectedAnswerIndex !== null) 
        {
            submitAnswer(selectedAnswerIndex);
            selectedAnswerIndex = null;
            document.querySelectorAll('.button').forEach(btn =>
            {
                btn.classList.remove('selected');
            });
        }
    };
    optionsContainer.appendChild(submitButton);
}

let selectedAnswerIndex = null;

function submitAnswer(selectedIndex) 
{
    const crtQuestion = questions[questionNr];
    if (selectedIndex === crtQuestion.correctAnswer) 
    {
        score++;
    }
    questionNr++;
    if (questionNr < questions.length) 
    {
        displayQuestion();
    } 
    else 
    {
        document.getElementById("question").innerText = "Congrats! You finished the quiz!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = "Your score: " + score + "/" + questions.length;
    }
}

// The problem can also be done using JSON files and JSON fetching
/*
//let questions = []; // Array to store questions
async function fetchQuestions() {
    try {
        const response = await fetch('questions.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}*/

startQuiz();