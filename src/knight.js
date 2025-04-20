import knight from './assets/knight_icon.png'

const movesForKnight = ([x, y]) => {
    const moves = [
        [x + 2, y + 1], [x + 2, y - 1],
        [x - 2, y + 1], [x - 2, y - 1],
        [x + 1, y + 2], [x + 1, y - 2],
        [x - 1, y + 2], [x - 1, y - 2],
    ]

    return moves.filter(([nx, ny]) => nx >= 0 && nx <= 7 && ny >= 0 && ny <= 7)
}

const createBoard = () => {
    const board = document.getElementById('board')
    board.innerHTML = ''

    for (let row = 0; row < 8; row++) {
        const rowElement = document.createElement('div')
        rowElement.classList.add('row')

        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div')
            square.classList.add('square')

            if ((row + col) % 2 === 0) {
                square.classList.add('white')
            } else {
                square.classList.add('black')
            }

            square.addEventListener('click', () => onSquareClick([row, col]))
            rowElement.appendChild(square)
        }

        board.appendChild(rowElement)
    }
} 

let startSquare = null
let endSquare = null
let isStart = true
let endFound = false
const img = document.createElement('img')
img.src = knight

const onSquareClick = ([row, col]) => {
    const boardSquares = document.querySelectorAll('.square')

    if (endFound){
        resetBoard()
    }

    if (isStart) {
        startSquare = [row, col]
        boardSquares[row * 8 + col].classList.add('start')
        boardSquares[row * 8 + col].appendChild(img)
        isStart = false
    } else {
        endSquare = [row, col]
        boardSquares[row * 8 + col].classList.add('end')
        findMoves(startSquare, endSquare)
        endFound = true
    }
}

const findMoves = (start, toFind) => {
    let queue = [start]
    let current = start
    let visited = new Set()
    let parents = new Map()

    visited.add(start.toString())

    while (queue.length > 0) {
        current = queue.shift()

        if (current[0] === toFind[0] && current[1] === toFind[1]) {
            console.log(current + ' found!')

            let path = [current]
            while (parents.has(current.toString())) {
                current = parents.get(current.toString())
                path.push(current)
            }
            path.reverse()

            console.log("Path there:")
            path.forEach((step, i) => {
                const boardSquares = document.querySelectorAll('.square')
                boardSquares[step[0] * 8 + step[1]].classList.add('path')
                boardSquares[step[0] * 8 + step[1]].textContent = i
                if (i === path.length - 1) {
                    boardSquares[step[0] * 8 + step[1]].textContent = ''
                    boardSquares[step[0] * 8 + step[1]].appendChild(img);
                }
                console.log(`${i}: ${step[0]} ${step[1]} `)
            })

            return
        }

        let newArray = movesForKnight(current)
        newArray.forEach(arr => {
            const key = arr.toString()
            if (!visited.has(key)) {
                visited.add(key)
                parents.set(key, current)
                queue.push(arr)
            }
        })
    }
}

const resetBoard = () => {
    const boardSquares = document.querySelectorAll('.square')
    boardSquares.forEach(square => square.classList.remove('path', 'start', 'end'))
    boardSquares.forEach(square => square.textContent = '')

    startSquare = null
    endSquare = null
    isStart = true
    endFound = false
    console.clear()
}

export { createBoard, resetBoard }