let menubtn = document.querySelector('#menu-btn')
// let closebtn = document.querySelector('#close-btn')
let nav = document.querySelector('header .flex nav')
let closebtn = document.getElementById('close-btn')


menubtn.onclick = () =>{
    nav.classList.add('active')
}
closebtn.onclick = () =>{
    console.log(nav.classList)
    nav.classList.remove('nav')
}

window.onscroll = () =>{
    nav.classList.remove('active')
}
