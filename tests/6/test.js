const questions = [
  {
    title: "Что такое аномалия?",
    text: "ИИ заметил событие, которое отличается от обычного поведения игрока. Как это называется?",
    answers: [
      "Аномалия",
      "Пароль",
      "Серверная",
      "Обычный блок"
    ],
    correct: 0,
    explain: "Верно! Аномалия — это необычное событие, которое нужно проверить."
  },
  {
    title: "Что замечает ИИ?",
    text: "Что ИИ может помочь найти на сервере?",
    answers: [
      "Необычные и подозрительные события",
      "Любимый цвет игрока",
      "Самый красивый дом",
      "Количество травы на карте"
    ],
    correct: 0,
    explain: "Правильно. ИИ помогает замечать события, которые отличаются от нормы."
  },
  {
    title: "Обычное поведение",
    text: "Игрок зашёл днём, построил дом, сложил ресурсы в сундук и играл 40 минут. Что скажет ИИ?",
    answers: [
      "Это обычное поведение",
      "Это точно взлом",
      "Это фишинг",
      "Это вирус"
    ],
    correct: 0,
    explain: "Да. Такое поведение похоже на обычную игру и не выглядит опасным."
  },
  {
    title: "Подозрительное событие",
    text: "Игрок зашёл в 03:12, разрушил башню, открыл чужие сундуки и вышел через 2 минуты. Это...",
    answers: [
      "Обычное событие",
      "Аномалия",
      "Новая миссия",
      "Реклама сервера"
    ],
    correct: 1,
    explain: "Верно! Несколько необычных действий подряд — повод для проверки."
  },
  {
    title: "Может ли ИИ ошибаться?",
    text: "ИИ отметил событие как подозрительное. Что должен сделать агент?",
    answers: [
      "Сразу наказать игрока",
      "Удалить сервер",
      "Проверить факты и контекст",
      "Ничего не делать"
    ],
    correct: 2,
    explain: "Правильно. ИИ помогает анализировать, но решение принимает человек."
  },
  {
    title: "Секретный пароль",
    text: "Что нельзя сообщать никому?",
    answers: [
      "Никнейм",
      "Любимый блок",
      "Пароль",
      "Название базы"
    ],
    correct: 2,
    explain: "Да. Пароль — это секрет, его нельзя отправлять даже тем, кто представился администратором."
  },
  {
    title: "Странное сообщение",
    text: "Сообщение: «Я администратор сервера. Для проверки аккаунта отправь пароль». Что это?",
    answers: [
      "Безопасная просьба",
      "Опасное сообщение",
      "Приглашение на игру",
      "Обычное обновление"
    ],
    correct: 1,
    explain: "Верно. Администраторы не должны просить пароль в сообщениях."
  },
  {
    title: "Слишком хороший приз",
    text: "Сообщение обещает 10000 MineCoin и просит перейти по неизвестной ссылке. Что это может быть?",
    answers: [
      "Фишинг или мошенничество",
      "Официальный подарок",
      "Новая карта",
      "Домашнее задание"
    ],
    correct: 0,
    explain: "Правильно. Слишком щедрый приз и неизвестная ссылка — признаки мошенничества."
  },
  {
    title: "Лучшая команда",
    text: "Кто лучше всего справляется с расследованием цифровых угроз?",
    answers: [
      "Только человек",
      "Только ИИ",
      "Человек + ИИ",
      "Никто"
    ],
    correct: 2,
    explain: "Да! ИИ замечает подозрительное, а человек проверяет факты и принимает решение."
  },
  {
    title: "Центр кибербезопасности",
    text: "Что логично добавить в Центр кибербезопасности Minecraft?",
    answers: [
      "Центр мониторинга, серверную ИИ и хранилище данных",
      "Только бассейн",
      "Только ферму пшеницы",
      "Только комнату с тортами"
    ],
    correct: 0,
    explain: "Верно. Эти помещения помогают защищать сервер и данные."
  }
];

let index = 0;
let score = 0;
let studentName = "";

const startScreen = document.querySelector("#startScreen");
const quizScreen = document.querySelector("#quizScreen");
const resultScreen = document.querySelector("#resultScreen");
const startBtn = document.querySelector("#startBtn");
const studentNameInput = document.querySelector("#studentName");
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#scoreText");
const progressBar = document.querySelector("#progressBar");
const questionTitle = document.querySelector("#questionTitle");
const questionText = document.querySelector("#questionText");
const answersRoot = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextBtn = document.querySelector("#nextBtn");
const finalScore = document.querySelector("#finalScore");
const resultTitle = document.querySelector("#resultTitle");
const resultMessage = document.querySelector("#resultMessage");
const retryBtn = document.querySelector("#retryBtn");
const copyBtn = document.querySelector("#copyBtn");
const copyStatus = document.querySelector("#copyStatus");

function show(screen){
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function renderQuestion(){
  const q = questions[index];
  progressText.textContent = `Вопрос ${index + 1} / ${questions.length}`;
  scoreText.textContent = `${score} баллов`;
  progressBar.style.width = `${(index / questions.length) * 100}%`;
  questionTitle.textContent = q.title;
  questionText.textContent = q.text;
  feedback.classList.add("hidden");
  nextBtn.classList.add("hidden");
  answersRoot.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = answer;
    btn.addEventListener("click", () => chooseAnswer(i));
    answersRoot.appendChild(btn);
  });
}

function chooseAnswer(answerIndex){
  const q = questions[index];
  const buttons = [...document.querySelectorAll(".answer")];
  buttons.forEach(btn => btn.classList.add("disabled"));

  if(answerIndex === q.correct){
    score++;
    buttons[answerIndex].classList.add("correct");
    feedback.innerHTML = `✅ <strong>Верно!</strong><br>${q.explain}`;
  }else{
    buttons[answerIndex].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
    feedback.innerHTML = `❌ <strong>Не совсем.</strong><br>${q.explain}`;
  }

  scoreText.textContent = `${score} баллов`;
  feedback.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

function finish(){
  progressBar.style.width = "100%";
  show(resultScreen);
  finalScore.textContent = `${score} / ${questions.length}`;

  let level = "";
  let message = "";

  if(score >= 9){
    level = "🛡️ Эксперт кибербезопасности";
    message = "Отличная работа! Ты уверенно распознаёшь аномалии и понимаешь, как ИИ помогает защищать сеть.";
  }else if(score >= 7){
    level = "🤖 Старший агент СМАРТ";
    message = "Хороший результат! Ты понимаешь роль ИИ и умеешь находить подозрительные события.";
  }else if(score >= 5){
    level = "🔍 Агент-аналитик";
    message = "Неплохо! Повтори признаки фишинга, аномалии и правило: решение принимает человек.";
  }else{
    level = "📚 Новобранец Агентства СМАРТ";
    message = "Нужно потренироваться ещё раз. Пройди тест повторно и внимательно читай объяснения.";
  }

  resultTitle.textContent = level;
  resultMessage.textContent = `${studentName ? studentName + ", " : ""}${message}`;
}

startBtn.addEventListener("click", () => {
  studentName = studentNameInput.value.trim();
  index = 0;
  score = 0;
  show(quizScreen);
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  index++;
  if(index >= questions.length){
    finish();
  }else{
    renderQuestion();
  }
});

retryBtn.addEventListener("click", () => {
  index = 0;
  score = 0;
  show(quizScreen);
  renderQuestion();
});

copyBtn.addEventListener("click", async () => {
  const text = `Тест «Нейросеть на страже сети». ${studentName || "Агент"} набрал(а): ${score}/${questions.length}.`;
  try{
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Результат скопирован!";
  }catch(e){
    copyStatus.textContent = text;
  }
});
