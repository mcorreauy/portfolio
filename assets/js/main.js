'use strict'

// VARIABLES
let i = 0;
let txt = 'Desarrollador Web.';
let speed = 100;

// DOCUMENT CONTENT LOADED
document.addEventListener('DOMContentLoaded', () =>
{
    typeAnimation();
    window.onscroll = function () { scrollFunction() };
    filterSelection("todos");
    activeNavigation();

});

// TYPED
function typeAnimation()
{
    if (i < txt.length)
    {
        document.getElementById("typed").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeAnimation, speed);
    }
}

// SHOW NAVBR ON SCROLL
function scrollFunction()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        document.getElementById("navbar").style.top = "0";
    } else
    {
        document.getElementById("navbar").style.top = "-100px";
    }
}

// FILTER
function filterSelection(value)
{
    let buttons = document.querySelectorAll(".btn-value");

    buttons.forEach(button =>
    {
        if (value.toUpperCase() == button.innerText.toUpperCase())
        {
            button.classList.add('active');
        }
        else
        {
            button.classList.remove('active');
        }
    });

    let elements = document.querySelectorAll('.portfolio-item');

    elements.forEach(element =>
    {
        if (value == 'todos')
        {
            element.classList.remove('d-none');
        }
        else
        {
            if (element.classList.contains(value))
            {
                element.classList.remove('d-none');
            }
            else
            {
                element.classList.add('d-none');
            }
        }
    });
}

// NAVLINKS ACTIVE STATE
function activeNavigation()
{
    let links = document.querySelectorAll(".nav-link");

    links.forEach(link =>
    {
        link.addEventListener('click', (e) =>
        {
            links.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        })

    });
}