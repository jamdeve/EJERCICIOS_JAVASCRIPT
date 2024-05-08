
const HealthLogo = document.getElementById("HealthLogo");
const sidebar = document.querySelector(".sidebar");
const spans = document.querySelectorAll("span");
const switchmode = document.querySelector(".sidebar__darkmode__switch");
const body = document.body;

switchmode.addEventListener("click",() => {
    body.classList.toggle("darkmode");
})

sidebar.addEventListener("mouseout",() => {
    sidebar.classList.toggle("sidebar--mini");
    spans.forEach(function(element){
        element.classList.add("oculto");
    })
})

sidebar.addEventListener("mouseover",() => {
    sidebar.classList.toggle("sidebar--mini");
    spans.forEach(function(element){
        element.classList.remove("oculto");
    })
})