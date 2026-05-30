const teacherLogin = "admin";
const teacherPassword = "admin";

const days = [
  {
    number: 6,
    icon: "🕵️",
    title: "День 6 · Старт расследования",
    lessons: [
      {
        emoji: "🔍",
        title: "Детективное агентство СМАРТ",
        description: "Вводная миссия: дети становятся агентами, знакомятся с сюжетом, правилами и первой Minecraft-картой.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Сценарий вводного занятия", "Правила работы с картой", "Роли и сюжет агентства"]
      },
      {
        emoji: "📡",
        title: "Тайна невидимых проводов: кто управляет сетью?",
        description: "Расследуем, как устройства соединяются между собой, что такое сеть и почему серверы похожи на узлы Minecraft-мира.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Методичка по сетям", "Презентация про интернет и серверы", "Вопросы для обсуждения"]
      }
    ]
  },
  {
    number: 7,
    icon: "🔐",
    title: "День 7 · Секреты и ловушки",
    lessons: [
      {
        emoji: "🪄",
        title: "Кодовая магия: как слова превращаются в секреты",
        description: "Разбираем шифры, пароли и секретные сообщения. Дети учатся защищать информацию и читать цифровые подсказки.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Методичка по шифрам", "Презентация про пароли", "Задания с секретными сообщениями"]
      },
      {
        emoji: "🎣",
        title: "Рыбалка в сети: кто забрасывает крючок обмана?",
        description: "Агенты учатся распознавать фишинг, подозрительные ссылки и цифровые уловки мошенников.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Методичка по фишингу", "Примеры безопасных и опасных сообщений", "Мини-игра на распознавание обмана"]
      }
    ]
  },
  {
    number: 8,
    icon: "🤖",
    title: "День 8 · ИИ-помощник детектива",
    lessons: [
      {
        emoji: "🧠",
        title: "ИИ-профайлер: кто скрывается за цифровой маской?",
        description: "ИИ помогает агентам анализировать улики, искать закономерности и составлять цифровой портрет подозреваемого.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Сценарий ИИ-расследования", "Презентация про анализ данных", "Карточки цифровых улик"]
      },
      {
        emoji: "🚪",
        title: "Кодовые врата: стражи цифровой защиты",
        description: "Изучаем цифровые замки: доступы, защиту аккаунтов, проверку входа и правила безопасной авторизации.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Методичка по защите аккаунтов", "Презентация про доступы", "Практика по созданию безопасного входа"]
      }
    ]
  },
  {
    number: 9,
    icon: "🖥️",
    title: "День 9 · Центр контроля",
    lessons: [
      {
        emoji: "🖥️",
        title: "Центр контроля: как специалисты спасают сеть от атак",
        description: "Дети попадают в командный центр и узнают, как специалисты замечают угрозы и реагируют на атаки.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Методичка про центр мониторинга", "Презентация про специалистов защиты", "Сценарий командной миссии"]
      },
      {
        emoji: "🤖",
        title: "Нейросеть на страже сети",
        description: "ИИ-помощник ищет странные события, подсвечивает угрозы и помогает агентам быстрее защитить Minecraft-мир.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Сценарий урока про аномалии", "Презентация про ИИ в безопасности", "Задания на поиск подозрительных событий"]
      }
    ]
  },
  {
    number: 10,
    icon: "🏆",
    title: "День 10 · Финальная защита",
    lessons: [
      {
        emoji: "💾",
        title: "Защитный код: резервное копирование",
        description: "Агенты узнают, зачем нужны резервные копии и как восстановить данные после цифровой катастрофы.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Методичка про резервное копирование", "Презентация про сохранение данных", "Практическая миссия восстановления"]
      },
      {
        emoji: "☁️",
        title: "Киберщит: битва в облаках",
        description: "Финальная миссия: дети объединяют знания, защищают облачную базу и завершают расследование агентства СМАРТ.",
        lessonLink: "#",
        mapLink: "#",
        testLink: "#",
        teacherMethod: "#",
        teacherPresentation: "#",
        teacherExtra: ["Финальная методичка", "Презентация для итогового занятия", "Идеи для награждения агентов"]
      }
    ]
  }
];

const daysRoot = document.querySelector("#days");
const loginDialog = document.querySelector("#loginDialog");
const openLogin = document.querySelector("#openLogin");
const closeLogin = document.querySelector("#closeLogin");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const logout = document.querySelector("#logout");

function renderProgram() {
  daysRoot.innerHTML = days.map(day => `
    <article class="day-card">
      <div class="day-banner" data-icon="${day.icon}">
        <span class="badge">День ${day.number} · 2 урока</span>
        <h3>${day.title}</h3>
      </div>

      <div class="lessons">
        ${day.lessons.map((lesson, index) => `
          <section class="lesson">
            <div class="lesson-label">${lesson.emoji} Урок ${index + 1}</div>
            <h4>${lesson.title}</h4>
            <p>${lesson.description}</p>

            <div class="lesson-links">
              <a class="btn btn-light" href="${lesson.lessonLink}" target="_blank">▶️ Открыть урок</a>
              <a class="btn btn-yellow" href="${lesson.mapLink}" target="_blank">🗺️ Скачать карту</a>
            </div>

            <div class="test-box">
              <strong>📝 Тестовая часть</strong>
              <p>Здесь будет тест по уроку. Замените ссылку на Google Forms, Яндекс Форму или встроенный тест.</p>
              <a class="btn btn-light" href="${lesson.testLink}" target="_blank">Перейти к тесту</a>
            </div>

            <div class="teacher-panel">
              <h5>👩‍🏫 Материалы для преподавателя</h5>
              <div class="lesson-links">
                <a class="btn btn-light" href="${lesson.teacherMethod}" target="_blank">📖 Методичка</a>
                <a class="btn btn-yellow" href="${lesson.teacherPresentation}" target="_blank">🖥️ Презентация</a>
              </div>
              <ul>
                ${lesson.teacherExtra.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </section>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function setTeacherMode(isTeacher) {
  document.body.classList.toggle("teacher-mode", isTeacher);
  openLogin.classList.toggle("hidden", isTeacher);
  logout.classList.toggle("hidden", !isTeacher);
  localStorage.setItem("smartTeacherMode", isTeacher ? "true" : "false");
}

openLogin.addEventListener("click", () => {
  loginError.classList.add("hidden");
  loginDialog.showModal();
});

closeLogin.addEventListener("click", () => {
  loginDialog.close();
});

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const login = document.querySelector("#login").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (login === teacherLogin && password === teacherPassword) {
    setTeacherMode(true);
    loginForm.reset();
    loginDialog.close();
  } else {
    loginError.classList.remove("hidden");
  }
});

logout.addEventListener("click", () => {
  setTeacherMode(false);
});

renderProgram();
setTeacherMode(localStorage.getItem("smartTeacherMode") === "true");
