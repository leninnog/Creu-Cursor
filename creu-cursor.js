var num = 1
var msX = -100
var msY = -100

window.onload = function() {
    var cursorhtml = ''
    for (var i = 1; i < 7; i++) {
        cursorhtml += "<img src='https://dzshn.github.io/Creu-Cursor/assets/mouse"+i+".gif' id='mouse"+i+"' style='position: absolute; left: -100px; pointer-events: none;'>"
    }
    document.body.innerHTML = cursorhtml+document.body.innerHTML
}

document.onmousemove = function(event) {
    msX = event.clientX
    msY = event.clientY
    document.getElementById("mouse6").style.left = msX + "px"
    document.getElementById("mouse6").style.top  = msY + "px"
}

setInterval(
    function() {
        document.getElementById("mouse" + num).style.left = msX + "px"
        document.getElementById("mouse" + num).style.top  = msY + "px"
    },
    100
)

setInterval(
    function() {
        num++
        if (num > 5) {num = 1}
    },
    15
)
