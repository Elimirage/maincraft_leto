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
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Сценарий вводного занятия", "Правила работы с картой", "Роли и сюжет агентства"]
        }
      },
      {
        emoji: "📡",
        title: "Тайна невидимых проводов: кто управляет сетью?",
        description: "Расследуем, как устройства соединяются между собой, что такое сеть и почему серверы похожи на узлы Minecraft-мира.",
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Методичка по сетям", "Презентация про интернет и серверы", "Вопросы для обсуждения"]
        }
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
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Методичка по шифрам", "Презентация про пароли", "Задания с секретными сообщениями"]
        }
      },
      {
        emoji: "🎣",
        title: "Рыбалка в сети: кто забрасывает крючок обмана?",
        description: "Агенты учатся распознавать фишинг, подозрительные ссылки и цифровые уловки мошенников.",
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Методичка по фишингу", "Примеры безопасных и опасных сообщений", "Мини-игра на распознавание обмана"]
        }
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
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Сценарий ИИ-расследования", "Презентация про анализ данных", "Карточки цифровых улик"]
        }
      },
      {
        emoji: "🚪",
        title: "Кодовые врата: стражи цифровой защиты",
        description: "Изучаем цифровые замки: доступы, защиту аккаунтов, проверку входа и правила безопасной авторизации.",
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Методичка по защите аккаунтов", "Презентация про доступы", "Практика по созданию безопасного входа"]
        }
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
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Методичка про центр мониторинга", "Презентация про специалистов защиты", "Сценарий командной миссии"]
        }
      },
      {
        emoji: "🤖",
        title: "Нейросеть на страже сети",
        description: "ИИ-помощник ищет странные события, подсвечивает угрозы и помогает агентам быстрее защитить Minecraft-мир.",
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Сценарий урока про аномалии", "Презентация про ИИ в безопасности", "Задания на поиск подозрительных событий"]
        }
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
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Методичка про резервное копирование", "Презентация про сохранение данных", "Практическая миссия восстановления"]
        }
      },
      {
        emoji: "☁️",
        title: "Киберщит: битва в облаках",
        description: "Финальная миссия: дети объединяют знания, защищают облачную базу и завершают расследование агентства СМАРТ.",
        mapLink: "#",
        lessonLink: "#",
        testLink: "#",
        teacher: {
          method: "#",
          presentation: "#",
          extra: ["Финальная методичка", "Презентация для итогового занятия", "Идеи для награждения агентов"]
        }
      }
    ]
  }
];

const dayGrid = document.querySelector("#dayGrid");
const loginDialog = document.querySelector("#loginDialog");
const openLogin = document.querySelector("#openLogin");
const closeLogin = document.querySelector("#closeLogin");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const logout = document.querySelector("#logout");

function renderDays() {
  dayGrid.innerHTML = days.map(day => `
    <article class="day-card">
      <div class="day-banner" data-icon="${day.icon}">
        <div class="day-title">
          <span class="badge">День ${day.number} · 2 урока</span>
          <h3>${day.title}</h3>
        </div>
      </div>

      <div class="lessons-grid">
        ${day.lessons.map((lesson, index) => `
          <div class="lesson-card">
            <div class="lesson-tag">${lesson.emoji} Урок ${index + 1}</div>
            <h4>${lesson.title}</h4>
            <p>${lesson.description}</p>

            <div class="links">
              <a class="button small" href="${lesson.lessonLink}" target="_blank" rel="noopener">▶️ Открыть урок</a>
              <a class="button yellow small" href="${lesson.mapLink}" target="_blank" rel="noopener">🗺️ Скачать карту</a>
            </div>

            <div class="test-box">
              <strong>📝 Тестовая часть</strong>
              <p>Здесь будет тест по этому уроку. Ссылку можно заменить на Google Forms, Яндекс Форму или встроенный тест.</p>
              <a class="button secondary small" href="${lesson.testLink}" target="_blank" rel="noopener">Перейти к тесту</a>
            </div>

            <div class="teacher-panel">
              <h5>👩‍🏫 Материалы для преподавателя</h5>
              <div class="links">
                <a class="button small" href="${lesson.teacher.method}" target="_blank" rel="noopener">📖 Методичка</a>
                <a class="button yellow small" href="${lesson.teacher.presentation}" target="_blank" rel="noopener">🖥️ Презентация</a>
              </div>
              <ul>
                ${lesson.teacher.extra.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function setTeacherMode(enabled) {
  document.body.classList.toggle("teacher-mode", enabled);
  logout.style.display = enabled ? "inline-flex" : "none";
  openLogin.style.display = enabled ? "none" : "inline-flex";
  localStorage.setItem("teacherMode", enabled ? "true" : "false");
}

openLogin.addEventListener("click", () => {
  loginError.style.display = "none";
  loginDialog.showModal();
  setTimeout(() => document.querySelector("#login").focus(), 50);
});

closeLogin.addEventListener("click", () => loginDialog.close());

loginForm.addEventListener("submit", event => {
  event.preventDefault();
  const login = document.querySelector("#login").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (login === "admin" && password === "admin") {
    setTeacherMode(true);
    loginDialog.close();
    loginForm.reset();
  } else {
    loginError.style.display = "block";
  }
});

logout.addEventListener("click", () => setTeacherMode(false));

renderDays();
setTeacherMode(localStorage.getItem("teacherMode") === "true");
