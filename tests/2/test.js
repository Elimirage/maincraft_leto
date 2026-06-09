const questions = [
  {
    title: "Что такое Интернет?",
    text: "Как лучше всего объяснить Интернет простыми словами?",
    answers: ["Одна игра на компьютере", "Огромная сеть, которая соединяет компьютеры по всему миру", "Только Wi‑Fi дома", "Один большой сервер"],
    correct: 1,
    explain: "Верно! Интернет — это большая сеть сетей, соединяющая устройства по всему миру."
  },
  {
    title: "Что такое сеть?",
    text: "Что происходит, когда компьютеры соединены в сеть?",
    answers: ["Они могут обмениваться данными", "Они перестают работать", "Они становятся одним компьютером", "Они не могут подключаться к интернету"],
    correct: 0,
    explain: "Да. Сеть нужна, чтобы устройства могли передавать данные друг другу."
  },
  {
    title: "Невидимые провода",
    text: "Почему в уроке говорилось, что в Интернете есть много «невидимых проводов»?",
    answers: ["Потому что кабелей не существует", "Потому что основу Интернета составляют кабели, многие из них спрятаны под землёй и водой", "Потому что всё работает только через магию", "Потому что компьютеры общаются голосом"],
    correct: 1,
    explain: "Правильно. Многие интернет-кабели действительно проложены под землёй и по дну океанов."
  },
  {
    title: "Подводные кабели",
    text: "Зачем нужны большие подводные интернет-кабели?",
    answers: ["Чтобы соединять континенты и передавать данные между странами", "Чтобы ловить рыбу", "Чтобы заряжать телефоны", "Чтобы украшать океан"],
    correct: 0,
    explain: "Верно. Подводные кабели помогают передавать данные на огромные расстояния."
  },
  {
    title: "Пакеты данных",
    text: "Как в сети часто передаются данные?",
    answers: ["В виде пакетов", "Только на бумаге", "В виде воды по трубам", "Только через флешку"],
    correct: 0,
    explain: "Да. Информация разбивается на небольшие части — пакеты данных."
  },
  {
    title: "Роутер",
    text: "Что делает роутер?",
    answers: ["Помогает устройствам подключаться к сети и направляет данные", "Печатает документы", "Создаёт картинки", "Удаляет Интернет"],
    correct: 0,
    explain: "Верно. Роутер помогает устройствам выходить в сеть и передавать данные по нужному пути."
  },
  {
    title: "Сервер",
    text: "Что такое сервер?",
    answers: ["Компьютер, который хранит данные или помогает другим устройствам получать информацию", "Обычная клавиатура", "Только экран", "Любой сундук в Minecraft"],
    correct: 0,
    explain: "Правильно. Сервер обслуживает запросы и хранит/передаёт данные."
  },
  {
    title: "LAN и WAN",
    text: "Что такое LAN?",
    answers: ["Локальная сеть", "Глобальная сеть всего мира", "Пароль", "Вредоносная программа"],
    correct: 0,
    explain: "Да. LAN — это локальная сеть, например дома, в классе или офисе."
  },
  {
    title: "Кибербезопасность",
    text: "Что такое кибербезопасность?",
    answers: ["Защита устройств, данных и сетей от цифровых угроз", "Умение быстро печатать", "Смена обоев на компьютере", "Строительство дома в Minecraft"],
    correct: 0,
    explain: "Верно. Кибербезопасность помогает защищать данные, устройства и сети."
  },
  {
    title: "Кибергерой",
    text: "Что должен делать настоящий кибергерой?",
    answers: ["Создавать надёжные пароли, проверять ссылки и защищать данные", "Сообщать всем свои пароли", "Открывать любые подозрительные файлы", "Верить всем сообщениям в интернете"],
    correct: 0,
    explain: "Отлично! Кибергерой думает, проверяет и защищает себя и других."
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
    level = "🌐 Мастер сети";
    message = "Отлично! Ты уверенно понимаешь, как устроен Интернет и зачем нужна кибербезопасность.";
  }else if(score >= 7){
    level = "🛡️ Кибергерой";
    message = "Хороший результат! Ты знаешь основные элементы сети и умеешь думать безопасно.";
  }else if(score >= 5){
    level = "🔍 Агент-стажёр";
    message = "Неплохо! Повтори, что такое сервер, роутер, пакеты данных и кибербезопасность.";
  }else{
    level = "📚 Новобранец сети";
    message = "Нужно повторить тему и пройти тест ещё раз. У тебя получится!";
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
  const text = `Тест «Тайна невидимых проводов». ${studentName || "Агент"} набрал(а): ${score}/${questions.length}.`;
  try{
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Результат скопирован!";
  }catch(e){
    copyStatus.textContent = text;
  }
});
