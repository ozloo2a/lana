// show nav on mobile

const list = document.getElementById("list-items");
const barsIcon = document.querySelector(".ul-icon")
const closeIcon = document.querySelector(".close-icon")

barsIcon.addEventListener("click", () => {
    list.classList.add("mobile")
    closeIcon.style.display = 'flex'
    barsIcon.style.display = 'none'
})
function closeNav() {
    list.classList.remove("mobile")
    closeIcon.style.display = 'none'
    barsIcon.style.display = 'block'
}
closeIcon.addEventListener("click", closeNav)

// set active class on active li
const nav = document.getElementsByTagName('nav')[0]; // replace 'my-element' with the ID of your element
const listItems = Array.from(document.getElementsByClassName("item"))
const navStyles = window.getComputedStyle(nav)


//add active to clicked item
listItems.forEach((item) => {
    listItems[0].classList.add('active')
    item.addEventListener("click", () => {
        closeNav()
        listItems.forEach(item => item.classList.remove("active"))
        item.classList.add("active")
    })
})

//Our work switcher
let works = Array.from(document.querySelectorAll(".work-item"));
let workContent = document.querySelector(".works")
const next = document.getElementsByClassName("fa-angle-right")[0]
const prev = document.getElementsByClassName("fa-angle-left")[0]
let i = 0

next.addEventListener("click", () => {
    i++;
    works.forEach(work => work.id = '')
    if(i > works.length-1){
        i = 0;
    }
    if(i%2 === 1){
        workContent.style.right = '13%'
        works[i].style.flexDirection = 'row-reverse'

    }else {
        workContent.style.right = '37%'
        works[i].style.flexDirection = 'row'
    }
    if(i !== works.length) {

        works[i].id = 'active'
    }
})
prev.addEventListener("click", () => {
    i--;
    works.forEach(work => work.id = '')
    if(i < 0){
        i = works.length-1;
    }
        works[i].id = 'active'
        if(i%2 === 1){
            console.log(i%2);
            works[i].style.flexDirection = 'row-reverse'
            workContent.style.right = '13%'
        }else {
            works[i].style.flexDirection = 'row'
            workContent.style.right = '37%'
        }
})

// change color of navbar and vertical line

const items = document.querySelectorAll("nav a");
const logo = document.querySelector(".logo img")
const activeItem = document.querySelectorAll("nav a.active")
const leftLine = document.querySelector('.left span');
const rightLine = document.querySelector('.right span');
var scrollVal = document.getElementById("Home");

window.onscroll = () => {
    let scroll = this.scrollY;
    if(scroll !== 0){
        nav.classList.add("white")
        }
        else {
        nav.classList.remove("white")
    }
    let scrolledPart = scroll / document.documentElement.scrollHeight
    if(scrolledPart > 0) {
        leftLine.style.height = scrolledPart * 1100 + 'px'
        rightLine.style.height = scrolledPart * 1100 + 'px'
        leftLine.style.backgroundColor = '#fff'
        rightLine.style.backgroundColor = '#fff'
    }
}

