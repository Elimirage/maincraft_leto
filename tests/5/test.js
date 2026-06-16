const questions = [
  {
    title: "Аномалия",
    text: "Что такое аномалия?",
    answers: ["Обычное событие на сервере", "Необычное событие, которое отличается от обычного поведения", "Новый блок в Minecraft", "Пароль администратора"],
    correct: 1,
    explain: "Верно! Аномалия — это необычное событие, которое отличается от привычного поведения и требует проверки."
  },
  {
    title: "Работа ИИ",
    text: "Что может заметить ИИ?",
    answers: ["Только красивый дом", "Необычные и подозрительные события", "Любимые блоки игрока", "Цвет скина"],
    correct: 1,
    explain: "Да. ИИ помогает находить подозрительные события и подсвечивать то, что отличается от нормы."
  },
  {
    title: "Обычное поведение",
    text: "Игрок зашёл днём, построил дом и играл 40 минут. Что скажет ИИ?",
    answers: ["Это обычное поведение", "Это атака", "Это вирус", "Это взлом"],
    correct: 0,
    explain: "Верно. Игрок действует спокойно: строит, играет днём и не делает ничего подозрительного."
  },
  {
    title: "Подозрительное событие",
    text: "Игрок зашёл в 03:12, разрушил башню и открыл чужие сундуки. Это…",
    answers: ["Обычное событие", "Аномалия", "Новая миссия", "Реклама сервера"],
    correct: 1,
    explain: "Правильно. Ночное время, разрушение и чужие сундуки — это сразу несколько подозрительных признаков."
  },
  {
    title: "Ошибки ИИ",
    text: "Может ли ИИ ошибаться?",
    answers: ["Нет, никогда", "Да, поэтому выводы нужно проверять человеку", "Только ночью", "Только в Minecraft"],
    correct: 1,
    explain: "Верно. ИИ помогает анализировать, но человек проверяет факты и принимает решение."
  },
  {
    title: "Главный секрет",
    text: "Что нельзя сообщать никому?",
    answers: ["Никнейм", "Любимый блок", "Пароль", "Название сервера"],
    correct: 2,
    explain: "Да. Пароль нельзя сообщать никому, даже если человек представляется администратором."
  },
  {
    title: "Подозрительный приз",
    text: "Сообщение обещает 10000 MineCoin и просит перейти по неизвестной ссылке. Что это может быть?",
    answers: ["Подарок", "Фишинг или мошенничество", "Новости Minecraft", "Обновление игры"],
    correct: 1,
    explain: "Правильно. Слишком выгодное предложение и неизвестная ссылка — частые признаки фишинга."
  },
  {
    title: "Помощник агента",
    text: "Что умеет делать ИИ?",
    answers: ["Искать подозрительные сообщения и аномалии", "Принимать решения за человека", "Наказывать игроков", "Управлять всеми серверами"],
    correct: 0,
    explain: "Верно. ИИ помогает искать странные события, но не должен принимать решения вместо человека."
  },
  {
    title: "Команда",
    text: "Какая команда работает лучше всего?",
    answers: ["Только человек", "Только ИИ", "Человек + ИИ", "Никто"],
    correct: 2,
    explain: "Да! ИИ быстро замечает подозрительное, а человек проверяет контекст и принимает решение."
  },
  {
    title: "Центр кибербезопасности",
    text: "Что должно быть в Центре кибербезопасности?",
    answers: ["Центр мониторинга и серверная ИИ", "Только бассейн", "Только ферма пшеницы", "Только склад ресурсов"],
    correct: 0,
    explain: "Верно. Центр мониторинга и серверная ИИ помогают следить за угрозами и защищать Minecraft-мир."
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
    message = "Отлично! Ты уверенно распознаёшь аномалии, фишинг и понимаешь, как ИИ помогает защищать сеть.";
  }else if(score >= 7){
    level = "🤖 Старший агент СМАРТ";
    message = "Хороший результат! Ты понимаешь роль ИИ и умеешь отличать подозрительное от обычного.";
  }else if(score >= 5){
    level = "🔍 Агент-аналитик";
    message = "Неплохо! Повтори признаки аномалий, фишинга и правило: человек проверяет выводы ИИ.";
  }else{
    level = "📚 Новобранец Агентства СМАРТ";
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
  const text = `Тест «Нейросеть на страже сети». ${studentName || "Агент"} набрал(а): ${score}/${questions.length}.`;
  try{
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Результат скопирован!";
  }catch(e){
    copyStatus.textContent = text;
  }
});
