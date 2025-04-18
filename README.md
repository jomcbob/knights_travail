# ♞ Knight's Shortest Path Finder

A JavaScript module that finds the shortest path a knight can take on a standard 8×8 chessboard from one square to another.

---

## 📖 Description

A knight moves in an L-shape: two squares in one direction, then one square perpendicular to that. This module:

- Calculates all valid knight moves from a given position
- Uses **Breadth-First Search (BFS)** to find the shortest path between two points
- Ensures optimal paths by avoiding revisiting squares

---

## ✨ Features

- ✅ Calculates all legal knight moves from any position
- 🧠 Uses BFS for shortest-path calculations
- 🛡️ Prevents cycles to maintain optimal performance

---

## 🚀 Usage

### `movesForKnight([x, y])`

Returns all valid knight moves from the given coordinate on an 8×8 board.

```js
movesForKnight([3, 3]);
// ➞ [[1, 2], [1, 4], [2, 1], [2, 5], [4, 1], [4, 5], [5, 2], [5, 4]]
