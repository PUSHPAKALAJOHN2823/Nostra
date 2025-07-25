// POPUP Section
var popup = document.getElementById("popup")
var close = document.getElementById("close")

close.addEventListener("click", function(){
    popup.style.display="none"
})


// SIDENAV

var sidenav = document.getElementById("sidenav")
var closeSidebar = document.getElementById("close-sidebar")
var menu = document.getElementById("menu")

closeSidebar.addEventListener("click", function(){
    sidenav.style.display = "none"
})

menu.addEventListener("click",function(){
    sidenav.style.display="block"
})

var slider = document.getElementById("slider")
var next = document.getElementById("next")
var prev = document.getElementById("prev")

var totalSlides = slider.children.length
var currentIndex = 0

function slideMove() {
    const slides = slider.children[0].clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slides}px)`
}
next.addEventListener("click" , function(){
    if(currentIndex < totalSlides-1){
        currentIndex++
    }
    else{
        currentIndex=0
    }
    slideMove()
    
})

prev.addEventListener("click", function(){
    if(currentIndex > 0){
        currentIndex--
    }
    else{
        currentIndex=totalSlides-1
    }
    slideMove()
})