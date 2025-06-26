<template>
  <div class="board">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="board-row">
      <div
        v-for="(cell, colIndex) in row"
        :key="colIndex"
        class="board-cell"
        :class="{ 'black': cell === 'B', 'white': cell === 'W' }"
        @click="makeMove(rowIndex, colIndex)"
      >
        {{ cell }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: this.initializeBoard(),
      currentPlayer: 'B',
    };
  },
  methods: {
    initializeBoard() {
      const board = Array(8).fill(null).map(() => Array(8).fill(null));
      board[3][3] = 'W';
      board[3][4] = 'B';
      board[4][3] = 'B';
      board[4][4] = 'W';
      return board;
    },
    makeMove(rowIndex, colIndex) {
      if (this.isValidMove(rowIndex, colIndex)) {
        this.board[rowIndex][colIndex] = this.currentPlayer;
        this.flipPieces(rowIndex, colIndex);
        this.currentPlayer = this.currentPlayer === 'B' ? 'W' : 'B';
      }
    },
    isValidMove(rowIndex, colIndex) {
      // Implement the logic to check if the move is valid
      return this.board[rowIndex][colIndex] === null; // Example validation
    },
    flipPieces(rowIndex, colIndex) {
      const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1], // Vertical and horizontal
        [-1, -1], [-1, 1], [1, -1], [1, 1], // Diagonal
      ];
      directions.forEach(([dx, dy]) => {
        const piecesToFlip = [];
        let x = rowIndex + dx;
        let y = colIndex + dy;

        while (this.isWithinBounds(x, y) && this.board[x][y] && this.board[x][y] !== this.currentPlayer) {
          piecesToFlip.push([x, y]);
          x += dx;
          y += dy;
        }

        if (this.isWithinBounds(x, y) && this.board[x][y] === this.currentPlayer) {
          piecesToFlip.forEach(([flipX, flipY]) => {
            this.board[flipX][flipY] = this.currentPlayer;
          });
        }
      });
    },
    isWithinBounds(x, y) {
      return x >= 0 && x < 8 && y >= 0 && y < 8;
    },
  },
};
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
}
.board-row {
  display: flex;
}
.board-cell {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  cursor: pointer;
}
.board-cell.black {
  background-color: black;
}
.board-cell.white {
  background-color: white;
}
</style>