function movesForKnight([x, y]) {
    const moves = [
        [x + 2, y + 1], [x + 2, y - 1],
        [x - 2, y + 1], [x - 2, y - 1],
        [x + 1, y + 2], [x + 1, y - 2],
        [x - 1, y + 2], [x - 1, y - 2],
    ]

    return moves.filter(([nx, ny]) => nx >= 0 && nx <= 7 && ny >= 0 && ny <= 7)
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

                console.log("Path there:");
                path.forEach((step, i) => {
                    console.log(`${i}: [${step[0]}, ${step[1]}]`);
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
// ![Example GIF](src/assets/giphy.gif)
export { findMoves }