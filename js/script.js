const a=document.querySelectorAll(".corusel_img")
const b=document.querySelectorAll(".social")


a.forEach(el=>el.addEventListener("mouseenter",()=>{
    el.querySelector(".social").style.display="flex"
}))
a.forEach(el=>el.addEventListener("mouseleave",()=>{
    el.querySelector(".social").style.display="none"
}))

// document.querySelector(".corusel_img").onmouseenter=()=>{
//     document.querySelector(".social").style.display="flex"
// }
// document.querySelector(".corusel_img").onmouseleave=()=>{
//     document.querySelector(".social").style.display="none"
// }