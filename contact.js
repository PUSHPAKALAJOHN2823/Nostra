var sidenav = document.getElementById("sidenav")
var closeSidebar = document.getElementById("close-sidebar")
var menu = document.getElementById("menu")

closeSidebar.addEventListener("click", function(){
    sidenav.style.display = "none"
})

menu.addEventListener("click",function(){
    sidenav.style.display="block"
})

