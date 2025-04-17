
♞ Knight's Shortest Path Finder
This JavaScript module finds the shortest path a knight can take on a standard 8x8 chessboard from one square to another.

Description
A knight moves in an L-shape (two squares in one direction and one square perpendicular to that). 
This module:

Calculates all valid moves for a knight from a given position

Uses Breadth-First Search (BFS) to find the shortest path from a starting position to a destination

 Features
 Calculates all legal knight moves from any given position

 Finds the shortest sequence of moves to reach a target square

 Prevents revisiting squares to ensure optimal pathfinding

 Usage

movesForKnight([x, y])
Returns all valid knight moves from the given coordinate on an 8x8 board.
