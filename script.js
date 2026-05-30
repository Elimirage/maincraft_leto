
const data=[
{day:'День 6',lessons:['Детективное агентство СМАРТ','Тайна невидимых проводов']},
{day:'День 7',lessons:['Кодовая магия','Рыбалка в сети']},
{day:'День 8',lessons:['ИИ-профайлер','Кодовые врата']},
{day:'День 9',lessons:['Центр контроля','Нейросеть на страже сети']},
{day:'День 10',lessons:['Защитный код','Киберщит']}];
const root=document.getElementById('days');
root.innerHTML=data.map(d=>`
<div class="day">
<h3>${d.day}</h3>
${d.lessons.map(l=>`
<div class="lesson">
<b>${l}</b><br>
<a href="#">▶ Урок</a>
<a href="#">🗺 Карта</a>
<a href="#">📝 Тест</a>
</div>`).join('')}
</div>`).join('');
