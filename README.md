# ♞ Knight's Shortest Path Finder

A JavaScript module that finds the shortest path a knight can take on a standard 8×8 chessboard from one square to another.

---

## Description

A knight moves in an L-shape: two squares in one direction, then one square perpendicular to that. This module:

- Calculates all valid knight moves from a given position
- Uses **Breadth-First Search (BFS)** to find the shortest path between two points
- Ensures the shortest path by avoiding revisiting squares

---

## Features

-  Calculates all legal knight moves from any position  
-  Uses BFS for shortest-path calculations

---

##  Usage

### `movesForKnight([x, y])`

Returns all valid knight moves from the given coordinate on an 8×8 board.

```js
movesForKnight([3, 3]);
// ➞ [[1, 2], [1, 4], [2, 1], [2, 5], [4, 1], [4, 5], [5, 2], [5, 4]]
```

---

### `findMoves([startX, startY], [endX, endY])`

Gives all moves needed to get from the first to the second input (uses `movesForKnight` internally).

```js
findMoves([0, 0], [7, 7]);
// ➞ [[0, 0], [2, 1], [3, 3], [5, 4], [7, 5], [6, 7], [7, 7]]
```


