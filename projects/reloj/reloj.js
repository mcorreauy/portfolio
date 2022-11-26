'use strict';

const btn12 = document.querySelector('.btn-12');
const btn24 = document.querySelector('.btn-24');


document.addEventListener('DOMContentLoaded', () =>
{
    // startTime12();
    // startTime24();
    // checkTime();
});

function startTime24()
{
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("reloj").innerHTML = hr + ":" + min + ":" + sec;
    let time = setTimeout(function () { startTime24() }, 500);
}

function startTime12()
{
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let ap = (hr < 12) ? "<span class='fs-2 my-0 py-0'>AM</span>" : "<span class='fs-2 my-0 py-0'>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("reloj").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = months[today.getMonth()];
    let curYear = today.getFullYear();
    let date = curWeekDay + ", " + curDay + " de " + curMonth + " de " + curYear;
    document.getElementById("date").innerHTML = date;

    let time = setTimeout(function () { startTime12() }, 500);

}

function checkTime(i)
{
    if (i < 10)
    {
        i = "0" + i;
    }
    return i;
}

function updateClock()
{
    let now = new Date();
    let dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = `del ${now.getFullYear()}`,
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou >= 12)
    {
        pe = "PM";
    }
    if (hou == 0)
    {
        hou = 12;
    }
    if (hou > 12)
    {
        hou = hou - 12;
    }

    Number.prototype.pad = function (digits)
    {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    let months = ['de Enero', 'de Febrero', 'de Marzo', 'de Abril', 'de Mayo', 'de Junio', 'de Julio', 'de Agosto', 'de Setiembre', 'de Octubre', 'de Noviembre', 'de Diciembre'];
    let week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    let values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
    for (let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock()
{
    updateClock();
    window.setInterval("updateClock()", 1);
}