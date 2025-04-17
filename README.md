♞ Knight's Shortest Path Finder
This JavaScript module finds the shortest path a knight can take on a standard 8x8 chessboard from one square to another.

📜 Description
A knight moves in an L-shape (two squares in one direction and one square perpendicular to that). This module calculates all valid moves for a knight from a given position and uses Breadth-First Search (BFS) to find the shortest path from a starting position to a destination.

🚀 Features
Calculates all legal knight moves from any given position.

Finds the shortest sequence of moves to reach a target square.

Prevents revisiting squares to ensure optimal pathfinding.

📦 Usage
movesForKnight([x, y])
Returns all valid knight moves from the given coordinate on an 8x8 board.

Parameters:
x, y: Coordinates (0 to 7) representing the knight's current position.

Example:
js
Copy
Edit
movesForKnight([3, 3])
// Output: [
//   [5, 4], [5, 2], [1, 4], [1, 2],
//   [4, 5], [4, 1], [2, 5], [2, 1]
// ]
findMoves(start, toFind)
Finds and logs the shortest path from start to toFind using knight moves.

Parameters:
start: [x, y] coordinate of the starting square.

toFind: [x, y] coordinate of the destination square.

Output:
Logs the coordinates of each step in the path.

Example:
js
Copy
Edit
findMoves([0, 0], [7, 7])
// Output:
// 7,7 found!
// Path there:
// 0: [0, 0]
// 1: [1, 2]
// 2: [2, 4]
// ...
// n: [7, 7]
✅ Requirements
JavaScript ES6+

Can be run in a browser or Node.js environment
