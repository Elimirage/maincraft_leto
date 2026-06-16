
const questions = [
{title:"Самое ценное",text:"Что самое ценное на компьютере или телефоне?",answers:["Корпус устройства","Данные и файлы","Кнопка включения","Обои рабочего стола"],correct:1,explain:"Верно! Самая большая ценность — это информация и данные."},
{title:"Потеря данных",text:"Что может привести к потере данных?",answers:["Только вирусы","Только поломка компьютера","Только случайное удаление","Все перечисленные варианты"],correct:3,explain:"Да. Данные можно потерять по разным причинам."},
{title:"Бэкап",text:"Что такое резервная копия (бэкап)?",answers:["Копия важных данных","Новый пароль","Антивирус","Интернет-сайт"],correct:0,explain:"Правильно! Бэкап помогает восстановить данные после потери."},
{title:"Зачем нужен бэкап?",text:"Зачем нужны резервные копии?",answers:["Чтобы восстановить данные после потери","Чтобы ускорить компьютер","Чтобы удалить вирусы","Чтобы подключиться к интернету"],correct:0,explain:"Верно! Главная задача резервной копии — вернуть данные."},
{title:"Правило 3-2-1",text:"Что означает первая цифра в правиле 3-2-1?",answers:["3 копии данных","3 пароля","3 компьютера","3 аккаунта"],correct:0,explain:"Да. Нужно иметь три копии важных данных."},
{title:"Правило 3-2-1",text:"Что означает цифра 2 в правиле 3-2-1?",answers:["Два разных носителя для хранения данных","Две игры","Два пароля","Два пользователя"],correct:0,explain:"Правильно. Копии должны храниться на разных носителях."},
{title:"Правило 3-2-1",text:"Что означает цифра 1 в правиле 3-2-1?",answers:["Одна копия должна храниться в другом месте","Один пароль","Один компьютер","Один сервер"],correct:0,explain:"Верно. Одна копия должна находиться отдельно от остальных."},
{title:"Облачное хранилище",text:"Что является примером облачного хранилища?",answers:["Хранение файлов на удалённых серверах через интернет","Бумажная тетрадь","Клавиатура","Монитор"],correct:0,explain:"Да. Облако позволяет хранить данные через интернет."},
{title:"Цифровой след",text:"Что такое цифровой след?",answers:["Информация о действиях человека в интернете","Следы на снегу","Вирус на компьютере","Вид пароля"],correct:0,explain:"Правильно. Любые действия в интернете оставляют цифровой след."},
{title:"Безопасность",text:"Как уменьшить риски в интернете?",answers:["Думать перед публикацией информации","Сообщать всем свой адрес","Отключить пароль","Переходить по всем ссылкам"],correct:0,explain:"Верно! Осторожность в интернете помогает защитить себя и свои данные."}
];


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
    level = "🛡️ Хранитель цифровых сокровищ";
    message = "Отлично! Ты понимаешь, как защищать данные и восстанавливать их после цифровых катастроф.";
  }else if(score >= 7){
    level = "💾 Мастер резервных копий";
    message = "Хороший результат! Ты знаешь правило 3-2-1 и понимаешь важность резервного копирования.";
  }else if(score >= 5){
    level = "🔍 Цифровой исследователь";
    message = "Неплохо! Повтори правило 3-2-1, облачные хранилища и цифровой след.";
  }else{
    level = "📚 Новобранец цифровой крепости";
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
  const text = `Тест «Защитный код: Резервное копирование». ${studentName || "Агент"} набрал(а): ${score}/${questions.length}.`;
  try{
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Результат скопирован!";
  }catch(e){
    copyStatus.textContent = text;
  }
});
