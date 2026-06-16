const teacherLogin = "admin";
const teacherPassword = "admin";

/*
Заменяй # на реальные ссылки.


testLink — ссылка на тест
teacherMethod — ссылка на методичку
teacherPresentation — ссылка на презентацию

maps — список карт. Можно сделать 1, 2 или больше карт:
maps: [
  { name: "Интернет", link: "https://..." },
  { name: "Серверная", link: "https://..." }
]
*/

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
  
        maps: [
          { name: "Детективное агенство - Карта", link: "https://drive.google.com/file/d/1BrbanYwaZpnoPsZVsQRruoxSObSyrCDE/view?usp=sharing" },
          { name: "Генерация презентаций - Gamma", link: "https://gamma.app/ru" },
          { name: "Генерация текста - Qwen", link: "https://qwen.ai/" },
          { name: "Генерация картинок - Raphael AI", link: "https://raphael.app/ru" }

        ],
        testLink: "./tests/1/",
        teacherMethod: "https://docs.google.com/document/d/195SaXnBOTM8HuS8NYPXoZVZNy4Xm5Mc8NxHzeYXzEns/edit?usp=sharing",
        teacherPresentation: "https://www.figma.com/deck/tEyrnCB6P3Vu3Bqyvu5U45",
        teacherExtra: []
      },
      {
        emoji: "📡",
        title: "Тайна невидимых проводов: кто управляет сетью?",
        description: "Расследуем, как устройства соединяются между собой, что такое сеть и почему серверы похожи на узлы Minecraft-мира.",
       
        maps: [
          { name: "Карта - Интернет", link: "https://drive.google.com/file/d/1tqA2pJGzE9RJ5xkyP3A5TsoVrMJhAWMj/view?usp=drive_link" },
          { name: "Карта - Создаем диораму", link: "https://drive.google.com/file/d/1_EtN7_AtPDXAQZgfmPM_hFPNK2h72grs/view?usp=drive_link" }
        ],
        testLink: "./tests/2/",
        teacherMethod: "https://docs.google.com/document/d/1oa_lSSkBeIgrK_c6k3_YSOjOZwnprXx3adRzOe7M2FA/edit?tab=t.0",
        teacherPresentation: "https://www.figma.com/deck/kJEjKXhBgNVYhUguTLRQNO",
        teacherExtra: []
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
    
        maps: [
          { name: "Карта - Пароли", link: "https://drive.google.com/file/d/14kwbTDnPLmOzl3XGaMSQbYoJ9dZ_ZBZC/view?usp=drive_link" },
          { name: "🔐 Перейти к ресурсу Шифрование", link: "https://fc-minecraft.github.io/Encrypt/index" },
          { name: "🔐 Перейти к ресурсу Тест: Шифрование", link: "https://fc-minecraft.github.io/Encrypt/index2" },
          { name: "Карта - Киберкрепость", link: "https://drive.google.com/file/d/1B2oAkAFwOz4y0Cp6O8vsCzc2axNrkUhJ/view?usp=drive_link" },
          { name: "🗝️ Перейти к ресурсу Пароли", link: "https://fc-minecraft.github.io/PassHk/" }
        ],
        testLink: "https://fc-minecraft.github.io/AntiPhishing/index4.html",
        teacherMethod: "https://docs.google.com/document/d/1suxrFW3xVLQZ0nvl4ZcuApZEs5bBw5zOD2w2tj3R5h8/edit?tab=t.0",
        teacherPresentation: "https://www.figma.com/deck/SP8darGf93Y9F0qsd3hBVL",
        teacherExtra: []
      },
      {
        emoji: "🎣",
        title: "Рыбалка в сети: кто забрасывает крючок обмана?",
        description: "Агенты учатся распознавать фишинг, подозрительные ссылки и цифровые уловки мошенников.",
       
        maps: [
          { name: "Карта - Мошенничество", link: "https://drive.google.com/file/d/1n1RDZhT1oS1yRfGO95pxDZDLl6E8IwbE/view?usp=drive_link" },
          { name: "Тест - Осторожно, фишинг! Часть 1.", link: "https://fc-minecraft.github.io/AntiPhishing/index" },
          { name: "Карта - Творческое задание", link: "https://drive.google.com/file/d/1kacFDCqSs9pCkFbxobFf8vqCBbP1XYch/view?usp=drive_link" }
          
        ],
        testLink: "https://fc-minecraft.github.io/AntiPhishing/index2",
        teacherMethod: "https://docs.google.com/document/d/1W2_zXm1yNaeB7pQdvnkKNkHYqsw-QY1xsGih6uFVkNQ/edit?tab=t.0",
        teacherPresentation: "figma.com/embed/interstitial?embed_host=share&embed_path=%2Fdeck%2FOVZB6NW8KhagrlgljvifvI%2F%25D0%259C3%25D0%25A33%3Fembed-host%3Dshare%26kind%3Ddeck%26node-id%3D1-143%26page-selector%3D1%26theme%3Dlight%26version%3D2&theme=light&version=2",
        teacherExtra: []
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
      
        maps: [
          { name: "QWEN", link: "https://chat.qwen.ai/" },
        ],
        testLink: "./tests/3/",
        teacherMethod: "https://docs.google.com/document/d/1QqXPX_hlnS32nl-BVbPVsCk1KtsfsECmrgEa9T0uxCA/edit?usp=sharing",
        teacherPresentation: "https://docs.google.com/presentation/d/1xoE6Gij6IzajJDSGOBY7tkv4TJRMFLHIPcrytCauYOs/edit?usp=sharing",
        teacherExtra: []
      },
      {
        emoji: "🚪",
        title: "Кодовые врата: стражи цифровой защиты",
        description: "Изучаем цифровые замки: доступы, защиту аккаунтов, проверку входа и правила безопасной авторизации.",
        
        maps: [
          { name: "Карта - Злодеи наносят удар", link: "https://drive.google.com/file/d/1Y994BoLr9lRrhw_CnDNFE_5oRskptIoy/view?usp=drive_link" },
          { name: "Карта - Строим башни", link: "https://drive.google.com/file/d/1g6AB4B4CfmlAwhh4BzNND0WY-L30T7ru/view?usp=drive_link" }
        ],
        testLink: "./tests/4/",
        teacherMethod: "https://docs.google.com/document/d/1WU4LnT48PjdNII4lVOwz8ywHCTAzKG2r_eZ5DtfycDg/edit?tab=t.0",
        teacherPresentation: "https://www.figma.com/deck/VwTmvt9EgtDwpNT5JB5wvw/%D0%9C3%D0%A34",
        teacherExtra: []
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
     
        maps: [
          { name: "Карта - Новые знакомства", link: "https://drive.google.com/file/d/1enn7148_Xhc7Sx7UEVKZGsSC2v8XwTrZ/view?usp=drive_link" },
          { name: "Карта - Cоциальная инженерия", link: "https://drive.google.com/file/d/18RZTK9mDDXHn8BJkC8ulvG6VX0OBJU4n/view?usp=drive_link" },
          { name: "Перейти к ресурсу Найди свою суперсилу", link: "https://fc-minecraft.github.io/AntiPhishing/index3" }
        ],
        testLink: "./tests/5/",
        teacherMethod: "https://docs.google.com/document/d/1d60mEqOivUCnbKCeAyvB8WF3vlVH4v4lc8VT7LuF0PA/edit?tab=t.0",
        teacherPresentation: "https://www.figma.com/deck/YjbjbCQ19Pa21YzjQ0q1NX",
        teacherExtra: []
      },
      {
        emoji: "🤖",
        title: "Нейросеть на страже сети",
        description: "ИИ-помощник ищет странные события, подсвечивает угрозы и помогает агентам быстрее защитить Minecraft-мир.",
     
        maps: [
          { name: "QWEN", link: "https://chat.qwen.ai/" },
          { name: "Промты для нейросети", link: "https://docs.google.com/document/d/1iukkipzxH5JTJHlMVeGMMwd9Isl-WX2HIUx20buIgK4/edit?usp=sharing" }
        ],
        testLink: "#",
        teacherMethod: "https://docs.google.com/document/d/1GdJCe3pQ5fjsU2zwINy3vIg42p5D27GTpqo--molm3g/edit?usp=sharing",
        teacherPresentation: "https://docs.google.com/presentation/d/12E0vrs-8x-Q7xv-WAx_LXidSDqxw5ON5IncECvONFwg/edit?usp=sharing",
        teacherExtra: []
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
        
        maps: [
          { name: "Карта - Защита данных", link: "https://drive.google.com/file/d/1YMO_GipAQwGYohFVTS2tzEAsXbRsbfPF/view?usp=drive_link" },
          { name: "Карта - Строительное испытание", link: "https://drive.google.com/file/d/1PDy-jRLOE965YLkHBBOFWcwhV29R5TTJ/view?usp=drive_link" },
        ],
        testLink: "#",
        teacherMethod: "https://docs.google.com/document/d/1CHvS3WUqV3RmVuuNnSVOLOGGYJgnlqxPZj3Nhj-0Nbo/edit?tab=t.0",
        teacherPresentation: "https://www.figma.com/deck/S5L8oh9fSGTIH2n4Xr14Qz",
        teacherExtra: []
      },
      {
        emoji: "☁️",
        title: "Киберщит: битва в облаках",
        description: "Финальная миссия: дети объединяют знания, защищают облачную базу и завершают расследование агентства СМАРТ.",
      
        maps: [
          { name: "Карта - Битва в облаках", link: "https://drive.google.com/file/d/18oY_u0LX59YYjBphDNN34_RL1Fk7OIyh/view?usp=drive_link" },
          { name: "Карта -  Удивительная архитектура", link: "https://drive.google.com/file/d/1_9mezPKu9nbXY_J_1CZi2QsRgaQ6QlwV/view?usp=drive_link" }
        ],
        testLink: "#",
        teacherMethod: "https://docs.google.com/document/d/1U2z_GXX7t6YQbOJRYUJ2xeFNE05ERqpP6RJsm3SpGu8/edit?tab=t.0",
        teacherPresentation: "https://www.figma.com/deck/KQ22f1rszSg3UMjunMj690",
        teacherExtra: []
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
              
              ${lesson.maps.map(map => `
                <a class="btn btn-yellow" href="${map.link}" target="_blank" rel="noopener">  ✨ ${map.name}</a>
              `).join("")}
            </div>

            <div class="test-box">
              <strong>📝 Тестовая часть</strong>
              <p>Здесь будет тест по уроку. Замените ссылку на Google Forms, Яндекс Форму или встроенный тест.</p>
              <a class="btn btn-light" href="${lesson.testLink}" target="_blank" rel="noopener">Перейти к тесту</a>
            </div>

            <div class="teacher-panel">
              <h5>👩‍🏫 Материалы для преподавателя</h5>
              <div class="lesson-links">
                <a class="btn btn-light" href="${lesson.teacherMethod}" target="_blank" rel="noopener">📖 Методичка</a>
                <a class="btn btn-yellow" href="${lesson.teacherPresentation}" target="_blank" rel="noopener">🖥️ Презентация</a>
              </div>
              <ul>${lesson.teacherExtra.map(item => `<li>${item}</li>`).join("")}</ul>
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

closeLogin.addEventListener("click", () => loginDialog.close());

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

logout.addEventListener("click", () => setTeacherMode(false));

renderProgram();
setTeacherMode(localStorage.getItem("smartTeacherMode") === "true");
