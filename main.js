let sidebar = document.querySelector(".j-sidebar");
let zoomed = document.getElementById("j-zoom");

sidebar.addEventListener("click", function (event) {
    if (event.target.getAttribute("class") == "j-img")
        zoomed.style.backgroundImage = `url(${event.target.currentSrc})`
})

zoomed.addEventListener("mouseover", () => {
    zoomed.style.backgroundSize = "200%"
})

zoomed.addEventListener("mouseleave", () => {
    zoomed.style.backgroundSize = "100%"
})

zoomed.addEventListener("mousemove", function (event) {
    zoomed.addEventListener("mousemove", function (event) {
        let dimensions = event.target.getBoundingClientRect();
        let x = event.clientX - dimensions.left
        let y = event.clientY - dimensions.top
        x = Math.round(100 / (dimensions.width / x));
        y = Math.round(100 / (dimensions.height / y));

        zoomed.style.backgroundPosition = `${x}% ${y}%`
    })
})