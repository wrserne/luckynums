function starOutGrid(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const rowsToStar = new Set();
    const colsToStar = new Set();
  
    // Find rows and columns with a star
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === '*') {
          rowsToStar.add(i);
          colsToStar.add(j);
        }
      }
    }
  
    // Star out rows and columns
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (rowsToStar.has(i) || colsToStar.has(j)) {
          grid[i][j] = '*';
        }
      }
    }
  
    return grid;
  }
  