const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const w = canvas.width
const h = canvas.height

canvas.style.background = "green"

let x = -20
let y = 200
function draw(){
    ctx.beginPath()
    ctx.arc(x,y,20,0,Math.PI * 2)
    ctx.fillStyle = "white"
    ctx.fill()
}

function move(){
    
    ctx.clearRect(0, 0, w, h)
    draw()
    if(x + 20 > w) {
        x = w - 20
        y = y + 3
    }
    if(y == h - 20) {
        x = x - 3
        y = h - 20
    } else {
       x = x + 3
    }
    requestAnimationFrame(move)
}

move()


