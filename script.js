const currentDate = document.querySelector('.current-date'),
daysTag = document.querySelector('.days'),
prevNextIcon = document.querySelectorAll ('.icons span')

let date  = new Date(),
currYear  = date.getFullYear(),
currMonth = date.getMonth();

//console.log (date, currYear, currMonth);

const months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth , 0).getDay(),// se obtiene los primeros dias del mes
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),// se obtiene la ultima fecha del mes
   lastDayofMonth = new Date(currYear, currMonth,lastDateofMonth).getDay(),//se obtiene los ultimos dias del mes
   lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // se obtiene  la ultima fecha del anterior mes
    let liTag= "";

    for (let i= firstDayofMonth; i > 0; i--) { // crea los dias del mes pasados
        liTag +=`<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++){ // crea los dias del mes actual
       
       let isToday = i ===date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()?"active": "";//resaltar la fecha actual 
        liTag +=`<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 7; i++){ // crea los dias del mes que viene
        liTag +=`<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1; 
    renderCalendar()    
    });
});