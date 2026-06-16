
const questions=[
{title:"Самое ценное",text:"Что самое ценное на компьютере или телефоне?",answers:["Корпус устройства","Данные и файлы","Кнопка включения","Обои"],correct:1,explain:"Главная ценность — данные."},
{title:"Угрозы",text:"Что может привести к потере данных?",answers:["Только вирусы","Только поломка","Только удаление","Все варианты"],correct:3,explain:"Любая из этих причин опасна."},
{title:"Бэкап",text:"Что такое резервная копия?",answers:["Копия важных данных","Пароль","Антивирус","Сайт"],correct:0,explain:"Бэкап помогает восстановить информацию."},
{title:"Зачем нужен бэкап?",text:"Для чего делают резервные копии?",answers:["Восстановить данные","Ускорить ПК","Удалить вирус","Подключиться к сети"],correct:0,explain:"Чтобы не потерять важные файлы."},
{title:"Правило 3",text:"Что означает цифра 3 в правиле 3-2-1?",answers:["3 копии данных","3 пароля","3 компьютера","3 аккаунта"],correct:0,explain:"Оригинал и две копии."},
{title:"Правило 2",text:"Что означает цифра 2?",answers:["Два носителя","Две игры","Два пароля","Два пользователя"],correct:0,explain:"Хранить на разных носителях."},
{title:"Правило 1",text:"Что означает цифра 1?",answers:["Одна копия в другом месте","Один пароль","Один сервер","Один ПК"],correct:0,explain:"Удалённая копия повышает надёжность."},
{title:"Облако",text:"Что является облачным хранилищем?",answers:["Файлы на удалённых серверах","Тетрадь","Клавиатура","Монитор"],correct:0,explain:"Облако хранит данные через интернет."},
{title:"Цифровой след",text:"Что такое цифровой след?",answers:["Информация о действиях в интернете","Следы на снегу","Вирус","Пароль"],correct:0,explain:"Это данные о вашей активности."},
{title:"Безопасность",text:"Как уменьшить риски в интернете?",answers:["Думать перед публикацией","Сообщать адрес","Отключить пароль","Жать все ссылки"],correct:0,explain:"Осторожность снижает риски."}
];
let i=0,s=0;
const qs=id=>document.getElementById(id);
function show(a){["startScreen","quizScreen","resultScreen"].forEach(x=>qs(x).classList.remove("active"));qs(a).classList.add("active");}
function render(){let q=questions[i];qs("progressText").textContent=`Вопрос ${i+1}/10`;qs("scoreText").textContent=`${s} баллов`;qs("progressBar").style.width=`${i*10}%`;qs("questionTitle").textContent=q.title;qs("questionText").textContent=q.text;let a=qs("answers");a.innerHTML="";qs("feedback").className="hidden";qs("nextBtn").className="btn primary hidden";q.answers.forEach((t,n)=>{let b=document.createElement("button");b.textContent=t;b.onclick=()=>ans(n);a.appendChild(b);});}
function ans(n){let q=questions[i];[...qs("answers").children].forEach((b,k)=>{b.disabled=true;if(k===q.correct)b.classList.add("correct");if(k===n&&n!==q.correct)b.classList.add("wrong");});if(n===q.correct)s++;qs("feedback").className="";qs("feedback").textContent=q.explain;qs("nextBtn").className="btn primary";}
qs("startBtn").onclick=()=>{show("quizScreen");render();}
qs("nextBtn").onclick=()=>{i++; if(i>=questions.length){show("resultScreen");qs("finalScore").textContent=`${s}/10`; let lvl=s>=9?"🛡️ Хранитель цифровых сокровищ":s>=7?"💾 Мастер резервных копий":s>=5?"🔍 Цифровой исследователь":"📚 Новобранец цифровой крепости"; qs("resultTitle").textContent=lvl; qs("resultMessage").textContent="Миссия завершена!";} else render();}
qs("retryBtn").onclick=()=>{i=0;s=0;show("quizScreen");render();}
