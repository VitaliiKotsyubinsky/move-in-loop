const actor = {
    x: 0,
    y: 0,
    size: 50,
    el: document.getElementById('actor'),
}

main()

async function main() {
    while (true) {
        await gameLoop()
    }

}

async function gameLoop() {
    if (actor.x < innerWidth / 2) {
        await moveRight()
    } else {
        await moveDown()
    }

}

async function moveRight() {
    actor.x += actor.size
    render()
    await sleep(0.1)
}
async function moveDown() {
    actor.y += actor.size
    render()
    await sleep(.1)
}


function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay * 1000))
}

function render() {
    actor.el.style.left = actor.x + 'px'
    actor.el.style.top = actor.y + 'px'
}
