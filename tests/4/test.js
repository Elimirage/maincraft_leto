const questions = [
  {
    title: "Управление доступом",
    text: "На какие два главных вопроса отвечает система управления доступом?",
    answers: ["Кто ты? И что тебе можно делать?", "Какой у тебя любимый блок? И где твой дом?", "Сколько у тебя алмазов? И где сундук?", "Какой у тебя скин? И сколько ты играешь?"],
    correct: 0,
    explain: "Верно! Сначала система проверяет личность, а потом права пользователя."
  },
  {
    title: "Аутентификация",
    text: "Что означает аутентификация?",
    answers: ["Проверка личности пользователя", "Удаление аккаунта", "Выдача алмазов", "Создание нового сервера"],
    correct: 0,
    explain: "Да. Аутентификация отвечает на вопрос: «Кто ты?»."
  },
  {
    title: "Авторизация",
    text: "Что такое авторизация?",
    answers: ["Проверка, какие действия пользователю разрешены", "Придумывание пароля", "Сканирование вирусов", "Открытие Minecraft"],
    correct: 0,
    explain: "Правильно. Авторизация определяет, что пользователю можно делать после входа."
  },
  {
    title: "Пароль",
    text: "К какому фактору аутентификации относится пароль?",
    answers: ["То, что ты знаешь", "То, что у тебя есть", "То, кем ты являешься", "То, что построено в Minecraft"],
    correct: 0,
    explain: "Верно. Пароль — это секретная информация, которую пользователь знает."
  },
  {
    title: "Телефон с кодом",
    text: "Сайт просит ввести код из приложения или SMS на телефоне. Это фактор...",
    answers: ["То, что у тебя есть", "То, что ты знаешь", "То, кем ты являешься", "То, что случайно появилось"],
    correct: 0,
    explain: "Да. Телефон — это предмет, который находится у пользователя."
  },
  {
    title: "Биометрия",
    text: "Отпечаток пальца или распознавание лица — это фактор...",
    answers: ["То, кем ты являешься", "То, что ты знаешь", "То, что у тебя есть", "То, что можно написать на бумаге"],
    correct: 0,
    explain: "Верно. Биометрия связана с уникальными особенностями человека."
  },
  {
    title: "MFA",
    text: "Что такое многофакторная аутентификация?",
    answers: ["Использование нескольких разных способов проверки личности", "Один короткий пароль", "Открытый вход без проверки", "Один логин для всех игроков"],
    correct: 0,
    explain: "Правильно. MFA усиливает защиту, потому что одного украденного пароля уже недостаточно."
  },
  {
    title: "Права пользователя",
    text: "Ты вошёл в YouTube. Почему ты не можешь удалить видео чужого блогера?",
    answers: ["У тебя нет таких прав", "Потому что пароль слишком длинный", "Потому что интернет медленный", "Потому что видео защищено алмазами"],
    correct: 0,
    explain: "Да. Авторизация не даёт обычному пользователю права управлять чужим каналом."
  },
  {
    title: "Уязвимость",
    text: "Что такое уязвимость в программе?",
    answers: ["Слабое место или ошибка, через которую могут атаковать систему", "Красивый дизайн", "Надёжный пароль", "Новая карта Minecraft"],
    correct: 0,
    explain: "Верно. Уязвимость — это как дыра в стене цифрового замка."
  },
  {
    title: "Обновления безопасности",
    text: "Зачем нужны обновления безопасности?",
    answers: ["Чтобы закрывать уязвимости и исправлять ошибки", "Чтобы всегда менять обои", "Чтобы удалять все файлы", "Чтобы отключить интернет"],
    correct: 0,
    explain: "Отлично! Обновления — это цифровые заплатки, которые закрывают слабые места."
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
    level = "🏰 Архитектор безопасности";
    message = "Отлично! Ты понимаешь управление доступом, MFA, уязвимости и обновления.";
  }else if(score >= 7){
    level = "🛡️ Страж цифровой защиты";
    message = "Хороший результат! Ты уверенно различаешь аутентификацию и авторизацию.";
  }else if(score >= 5){
    level = "🔑 Хранитель ключей";
    message = "Неплохо! Повтори три фактора аутентификации и разницу между входом и правами.";
  }else{
    level = "📚 Новобранец у ворот";
    message = "Стоит пройти тест ещё раз и повторить тему. У тебя получится!";
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
  const text = `Тест «Кодовые врата». ${studentName || "Агент"} набрал(а): ${score}/${questions.length}.`;
  try{
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Результат скопирован!";
  }catch(e){
    copyStatus.textContent = text;
  }
});
