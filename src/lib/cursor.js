document.addEventListener("mousemove", function(event) {

    const x = event.pageX 
    const y = event.pageY

    const targetX = window.innerWidth / 2
    const targetY = window.innerHeight / 2

    const angle = Math.atan2(y - targetY, x - targetX)
    const degree = angle * 180/Math.PI - 90

    let cursor = document.querySelector('#cursor')

    if (cursor) {
        cursor.style.left = x + "px"
        cursor.style.top = y + "px"
        cursor.style.transform = "rotate(" + degree + "deg"
    }

})


