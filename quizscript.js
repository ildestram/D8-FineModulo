const questions = [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      correct_answer: 'Central Processing Unit',
      incorrect_answers: [
        'Central Process Unit',
        'Computer Personal Unit',
        'Central Processor Unit',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
      correct_answer: 'Final',
      incorrect_answers: ['Static', 'Private', 'Public'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The logo for Snapchat is a Bell.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question:
        'Pointers were not used in the original C programming language; they were added later on in C++.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What is the most preferred image format used for logos in the Wikimedia database?',
      correct_answer: '.svg',
      incorrect_answers: ['.png', '.jpeg', '.gif'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In web design, what does CSS stand for?',
      correct_answer: 'Cascading Style Sheet',
      incorrect_answers: [
        'Counter Strike: Source',
        'Corrective Style Sheet',
        'Computer Style Sheet',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What is the code name for the mobile operating system Android 7.0?',
      correct_answer: 'Nougat',
      incorrect_answers: [
        'Ice Cream Sandwich',
        'Jelly Bean',
        'Marshmallow',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: ['120', '160', '100'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'C', 'Jakarta'],
    },
  ]

const quizNode = document.getElementById('quiz');
const answerEles = document.getElementById('header');
const welcomeNode = document.querySelector('.welcome');
const submitButton = document.getElementById('submit');
const radios = document.getElementsByName('answer');
let currentQuestion = 0;
let score = 0;
const loadQuiz = function () {
    unSelectAnswer();
    let currentQuiz = questions[currentQuestion];
    let h2Element = document.getElementById("question");
    { h2Element !== null && h2Element.parentNode.removeChild(h2Element); }
    let h2 = document.createElement('h2');
    h2.id = 'question';
    h2.innerText = currentQuestion + 1 + '.  ' + currentQuiz.question;
    answerEles.appendChild(h2);
    let listElements = document.querySelectorAll("#dynamicUL li");
    for (let i = 0; (li = listElements[i]); i++) {
        li.parentNode.removeChild(li);
    }
    let ul = document.createElement('ul');
    ul.id = "dynamicUL";
    for (let i = 0; i < currentQuiz.incorrect_answers.length; i++) {
        let li = document.createElement('li');
        let input = document.createElement('input')
        input.type = 'radio';
        input.name = 'answer';
        input.id = `srNo${i}`;
        input.value = currentQuiz.incorrect_answers[i];
        let label = document.createElement('label')
        label.innerText = currentQuiz.incorrect_answers[i];
        label.htmlFor = `srNo${i}`;
        li.appendChild(input);
        li.appendChild(label);
        ul.appendChild(li);
    }
    answerEles.appendChild(ul);
}
const unSelectAnswer = function () {
    for (i = 0; i < radios.length; i++) {
        radios[i].checked = false
    }
}
const getSelectedAnswer = function () {
    let answer;
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            answer = radios[i].value;
        }
    }
    return answer
}
submitButton.addEventListener('click', () => {
    const answer = getSelectedAnswer();
    console.log('answer:', answer);
    if (answer) {
        if (answer === questions[currentQuestion].correct_answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuiz();
        } else {
            let percentage = (100 * score) / questions.length;
            quizNode.style.textAlign = 'center';
            quizNode.style.paddingTop = '20px';
            quizNode.innerHTML = `<h1>Results</h1>
            <h3>Quiz completed successfully</h3>
            <h3>Score</h3>
            <h1>${percentage}%</h1>
            <h5>${score}/${questions.length} questions</h5>
            <button onclick="location.reload()">Realod</button>
            `
        }
    } else {
        let welcomeNode = document.querySelector('.welcome');
        { welcomeNode !== null && answerEles.removeChild(welcomeNode) }
        submitButton.innerText = 'Sumbit'
        loadQuiz();
    }
})
window.onload = function () {
    let divNode = document.createElement('div');
    divNode.className = 'welcome';
    let h1 = document.createElement('h1');
    h1.innerText = 'Welcome!';
    let h2 = document.createElement('h2');
    h2.innerText = "Let's play quiz";
    let h4 = document.createElement('h4');
    h4.innerText = `Total questions: ${questions.length}`
    divNode.appendChild(h1)
    divNode.appendChild(h2)
    divNode.appendChild(h4)
    answerEles.appendChild(divNode)
}