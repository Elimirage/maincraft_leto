
const questions=[
{title:"Интернет вещей",text:"Что такое Интернет вещей (IoT)?",answers:["Сайт про гаджеты","Сеть умных устройств, подключённых к интернету","Компьютерная игра","Браузер"],correct:1,explain:"IoT — это сеть взаимосвязанных умных устройств."},
{title:"Умное устройство",text:"Какое устройство может быть умным?",answers:["Умная лампочка","Книга","Лист бумаги","Карандаш"],correct:0,explain:"Лампочка может подключаться к интернету и выполнять команды."},
{title:"Экосистема",text:"Почему Интернет вещей называют экосистемой?",answers:["Устройства работают как одна команда","Они зелёные","Они дорогие","Они только для дома"],correct:0,explain:"Устройства связаны и взаимодействуют друг с другом."},
{title:"Слабое звено",text:"От чего зависит безопасность всей сети?",answers:["От самого дорогого устройства","От самого большого устройства","От самого слабого звена","От скорости интернета"],correct:2,explain:"Одно плохо защищённое устройство может подвергнуть риску всю сеть."},
{title:"Взлом одного устройства",text:"Что может произойти после взлома одного устройства?",answers:["Ничего","Может пострадать вся сеть","Оно станет быстрее","Интернет исчезнет"],correct:1,explain:"Уязвимость может распространиться на всю систему."},
{title:"Ботнет",text:"Что такое ботнет?",answers:["Армия заражённых устройств под управлением хакера","Робот Minecraft","Антивирус","Пароль Wi‑Fi"],correct:0,explain:"Хакер может использовать множество заражённых устройств одновременно."},
{title:"Обновления",text:"Зачем нужны обновления устройств?",answers:["Закрывать уязвимости и усиливать защиту","Менять цвет экрана","Удалять фото","Выключать интернет"],correct:0,explain:"Обновления исправляют найденные проблемы безопасности."},
{title:"Подключение",text:"Через что умные устройства чаще всего подключаются дома?",answers:["Wi‑Fi","Принтер","Монитор","Мышка"],correct:0,explain:"Домашние устройства обычно используют Wi‑Fi."},
{title:"Доступ к Wi‑Fi",text:"Что нужно знать для подключения к Wi‑Fi?",answers:["Только имя сети","Только пароль","Имя сети и пароль","IP-адрес"],correct:2,explain:"Нужно найти сеть и подтвердить доступ паролем."},
{title:"Главный ключ",text:"Почему пароль Wi‑Fi важно хранить в секрете?",answers:["Это ключ к цифровому дому","Интернет станет медленнее","Пропадут приложения","Выключится компьютер"],correct:0,explain:"Получив пароль, злоумышленник может попасть в вашу сеть."}
];
let i=0,s=0; const g=id=>document.getElementById(id);
function show(x){["startScreen","quizScreen","resultScreen"].forEach(v=>g(v).classList.remove("active"));g(x).classList.add("active");}
function render(){let q=questions[i];g("progressText").textContent=`Вопрос ${i+1}/10`;g("scoreText").textContent=`${s} баллов`;g("progressBar").style.width=`${i*10}%`;g("questionTitle").textContent=q.title;g("questionText").textContent=q.text;g("answers").innerHTML="";g("feedback").className="hidden";g("nextBtn").className="btn primary hidden";q.answers.forEach((a,n)=>{let b=document.createElement("button");b.textContent=a;b.onclick=()=>ans(n);g("answers").appendChild(b);});}
function ans(n){let q=questions[i];[...g("answers").children].forEach((b,k)=>{b.disabled=true;if(k===q.correct)b.classList.add("correct");if(k===n&&n!==q.correct)b.classList.add("wrong");});if(n===q.correct)s++;g("feedback").className="";g("feedback").textContent=q.explain;g("nextBtn").className="btn primary";}
g("startBtn").onclick=()=>{show("quizScreen");render();};
g("nextBtn").onclick=()=>{i++;if(i>=questions.length){show("resultScreen");g("finalScore").textContent=`${s}/10`;g("resultTitle").textContent=s>=9?"🛡️ Главный архитектор Киберщита":s>=7?"🌐 Инженер умной сети":s>=5?"🔍 Охотник за уязвимостями":"📚 Новобранец Киберщита";g("resultMessage").textContent="Миссия по защите умной сети завершена!";}else render();};
g("retryBtn").onclick=()=>{i=0;s=0;show("quizScreen");render();};
