const questions = [
  {
    title: "Интернет вещей",
    text: "Что такое Интернет вещей (IoT)?",
    answers: ["Сайт про гаджеты", "Сеть умных устройств, подключённых к интернету", "Компьютерная игра", "Новый браузер"],
    correct: 1,
    explain: "Верно! Интернет вещей — это сеть умных устройств, которые подключены к интернету и могут работать вместе."
  },
  {
    title: "Умное устройство",
    text: "Какое устройство может быть «умным»?",
    answers: ["Умная лампочка", "Обычная книга", "Бумажный лист", "Карандаш"],
    correct: 0,
    explain: "Да. Умная лампочка может подключаться к интернету, выполнять команды и работать по расписанию."
  },
  {
    title: "Экосистема",
    text: "Почему Интернет вещей называют экосистемой?",
    answers: ["Потому что устройства работают вместе как одна команда", "Потому что они зелёного цвета", "Потому что они стоят дорого", "Потому что они работают только дома"],
    correct: 0,
    explain: "Правильно. Устройства связаны между собой, поэтому проблема в одном месте может повлиять на всю систему."
  },
  {
    title: "Слабое звено",
    text: "От чего зависит безопасность всей сети устройств?",
    answers: ["От самого дорогого устройства", "От самого большого устройства", "От самого слабого звена", "От скорости интернета"],
    correct: 2,
    explain: "Верно! Если одно устройство плохо защищено, через него можно поставить под угрозу всю сеть."
  },
  {
    title: "Взлом одного устройства",
    text: "Что может произойти, если хакер взломает одно плохо защищённое устройство?",
    answers: ["Ничего", "Может пострадать вся сеть устройств", "Устройство станет быстрее", "Интернет отключится навсегда"],
    correct: 1,
    explain: "Да. В связанной системе одна уязвимость может запустить цепную реакцию."
  },
  {
    title: "Ботнет",
    text: "Что такое ботнет?",
    answers: ["Армия заражённых устройств под управлением хакера", "Новый робот Minecraft", "Защитная программа", "Пароль от Wi‑Fi"],
    correct: 0,
    explain: "Правильно. Ботнет — это множество заражённых устройств, которыми злоумышленник управляет как армией."
  },
  {
    title: "Обновления",
    text: "Зачем нужны обновления устройств?",
    answers: ["Чтобы закрывать уязвимости и улучшать защиту", "Чтобы менять цвет экрана", "Чтобы удалять фотографии", "Чтобы выключать интернет"],
    correct: 0,
    explain: "Верно. Обновления работают как заплатки: закрывают найденные слабые места."
  },
  {
    title: "Wi‑Fi",
    text: "Через что чаще всего умные устройства подключаются к интернету дома?",
    answers: ["Через Wi‑Fi", "Через принтер", "Через монитор", "Через мышку"],
    correct: 0,
    explain: "Да. Большинство домашних умных устройств подключаются через Wi‑Fi."
  },
  {
    title: "Доступ к сети",
    text: "Что нужно знать для подключения к Wi‑Fi?",
    answers: ["Только имя сети", "Только пароль", "Имя сети и пароль", "Только IP-адрес"],
    correct: 2,
    explain: "Правильно. Нужно найти сеть по имени и подтвердить доступ паролем."
  },
  {
    title: "Пароль от Wi‑Fi",
    text: "Почему пароль от Wi‑Fi важно хранить в секрете?",
    answers: ["Потому что это ключ к цифровому дому", "Потому что интернет станет медленнее", "Потому что исчезнут приложения", "Потому что выключится компьютер"],
    correct: 0,
    explain: "Верно! Пароль от Wi‑Fi — это ключ к вашей домашней сети и умным устройствам."
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
    level = "🛡️ Главный архитектор Киберщита";
    message = "Отлично! Ты понимаешь, как устроены умные устройства, почему опасны ботнеты и как защитить цифровую экосистему.";
  }else if(score >= 7){
    level = "🌐 Инженер умной сети";
    message = "Хороший результат! Ты знаешь, как работают IoT-устройства и почему важны обновления и защита Wi‑Fi.";
  }else if(score >= 5){
    level = "🔍 Охотник за уязвимостями";
    message = "Неплохо! Повтори тему слабых звеньев, ботнетов и Интернета вещей.";
  }else{
    level = "📚 Новобранец Киберщита";
    message = "Стоит пройти тест ещё раз и повторить материал. У тебя получится!";
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
  const text = `Тест «Киберщит: битва в облаках». ${studentName || "Агент"} набрал(а): ${score}/${questions.length}.`;
  try{
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Результат скопирован!";
  }catch(e){
    copyStatus.textContent = text;
  }
});
