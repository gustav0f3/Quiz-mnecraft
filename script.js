const quizData= [
    {
      question: 'Quanto custa full armadura de ferro?',
      a:'30',
      b:'24',
      c:'19',
      d:'25',
      correct: 'b',
    },{
      question: 'Qual é o mob mais forte do Minecraft?',
      a:'Creeper',
      b:'Winter boss',
      c:'Ender dragon',
      d:'Warden',
      correct: 'd',
    },{
      question: 'Quantos mobs foram adicionados na 1.19?',
      a:'4',
      b:'5',
      c:'2',
      d:'3',
      correct: 'd',
    },{
      question: 'Quais foram os mobs adicionados na 1.19?',
      a:'Sapo aley e warden',
      b:'Galinha vaca e ovelha',
      c:'Lobo vaca e ovenha',
      d:'Sapo galinha e lbo',
      correct: 'a',
    },{
      question:'Qual é a estrutura mais antiga do Minecraft?',
      a:'O bloco de relva',
      b:' Árvore',
      c:'Montanhas com neve',
      d:'O templo do deserto',
      correct: 'b',
    }
  ];
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
      deselectAnswers();
  
      const currentQuizData = quizData[currentQuiz];
  
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
  }
  
  function getSelected() {
      let answer = undefined;
  
      answerEls.forEach((answerEl) => {
          if (answerEl.checked) {
              answer = answerEl.id;
          }
      });
  
      return answer;
  }
  
  function deselectAnswers() {
      answerEls.forEach((answerEl) => {
          answerEl.checked = false;
      });
  }
  
  submitBtn.addEventListener("click", () => {
      // check to see the answer
      const answer = getSelected();
  
      if (answer) {
          if (answer === quizData[currentQuiz].correct) {
              score++;
          }
  
          currentQuiz++;
          if (currentQuiz < quizData.length) {
              loadQuiz();
          } else {
              quiz.innerHTML = `
                  <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                  
                  <button onclick="location.reload()">Reload</button>
              `;
          }
      }
    });  