 const quizData = [
            {
                question : "Which is JS Framework?",
                a : "React",
                b :  "Django",
                c : ".Net",
                d : "Laravel",
                correct : "a",
            },
            {
                question : "Which language runs in a web browser?",
                a : "Java",
                b :  "C",
                c : "Python",
                d : "JavaScript",
                correct : "d",
            },
            {
                question : "What does CSS stand for?",
                a : "Central Style Sheets",
                b : "Cascading Style Sheets",
                c : "Cascading Simple Sheets",
                d : "Cars SUVs Sailboats",
                correct : "b",
            },
            {
                question : "What does HTML stand for?",
                a : "Hypertext Markup Language",
                b : "Hypertext Markdown Language",
                c : "Hyperloop Machine Language",
                d : "Helicopters Terminals Motorboats Lamborghinis",
                correct : "a",
            },
            {
                question : "What year was JavaScript launched?",
                a : "1996",
                b : "1995",
                c : "1994",
                d : "none of the above",
                correct : "b",
            },
            {
                question : "What is the capital of France?",
                a : "Berlin",
                b : "Madrid",
                c : "Paris",
                d : "Lisbon",
                correct : "c",
            },
            {
                question : "Who wrote 'Hamlet'?",
                a : "Charles Dickens",
                b : "William Shakespeare",
                c : "Mark Twain",
                d : "Jane Austen",
                correct : "b",
            },
            {
                question : "Which planet is known as the Red Planet?",
                a : "Earth",
                b : "Mars",
                c : "Jupiter",
                d : "Saturn",
                correct : "b",
            },
            {
                question : "What is the largest ocean on Earth?",
                a : "Atlantic Ocean",
                b : "Indian Ocean",
                c : "Arctic Ocean",
                d : "Pacific Ocean",
                correct : "d",
            },
            {
                question : "Which element has the chemical symbol 'O'?",
                a : "Gold",
                b : "Oxygen",
                c : "Osmium",
                d : "Oganesson",
                correct : "b",
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        function loadQuestion() {
            const currentQuestion = quizData[currentQuestionIndex];
            document.getElementById('question').innerText = currentQuestion.question;
            document.getElementById('a_value').innerText = currentQuestion.a;
            document.getElementById('b_value').innerText = currentQuestion.b;
            document.getElementById('c_value').innerText = currentQuestion.c;
            document.getElementById('d_value').innerText = currentQuestion.d;
        }

        function getSelected() {
            const answers = document.querySelectorAll('.answer');
            let answer = undefined;

            answers.forEach((ans) => {
                if (ans.checked) {
                    answer = ans.id;
                }
            });

            return answer;
        }

        function deselectAnswers() {
            const answers = document.querySelectorAll('.answer');
            answers.forEach((ans) => {
                ans.checked = false;
            });
        }

        document.getElementById('submit').addEventListener('click', () => {
            const answer = getSelected();

            if (answer) {
                if (answer === quizData[currentQuestionIndex].correct) {
                    score++;
                }

                currentQuestionIndex++;

                if (currentQuestionIndex < quizData.length) {
                    loadQuestion();
                    deselectAnswers();
                } else {
                    document.getElementById('quizdiv').innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                    <button onclick="location.reload()" class="btn btn-primary">Reload</button>`;
                }
            }
        });

        loadQuestion();
   