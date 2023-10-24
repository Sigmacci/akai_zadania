let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  setTimeout(() => {
    checkWin();
  }, 100);
});

function displayTurn(turn) {
  let h1 = document.querySelector('.turn');
  h1.innerHTML = turn.toUpperCase() + ' turn';

}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (symbols[i][0] === symbols[i][1] && symbols[i][1] === symbols[i][2] && symbols[i][0] !== "") {
      alert(`${symbols[i][0]} wins!`);
      return;
    }
    if (symbols[0][i] === symbols[1][i] && symbols[1][i] === symbols[2][i] && symbols[0][i] !== "") {
      alert(`${symbols[0][i]} wins!`);
      return;
    }
  }
  if (symbols[1][1] !== "") {
    if (symbols[0][0] === symbols[1][1] && symbols[1][1] === symbols[2][2]) {
      alert(`${symbols[1][1]} wins!`);
      return;
    }
    if (symbols[0][2] === symbols[1][1] && symbols[1][1] === symbols[2][0]) {
      alert(`${symbols[1][1]} wins!`);
      return;
    }
  }
  
  let count = 0;
  symbols.forEach(row => {
    row.forEach(symbol => {
      if (symbol === "") {
        count++;
      }
    });
  });
  if (count === 0) {
    alert("Tie!");
  }
}

const button = document.querySelector(".reset");
button.addEventListener("click", () => {
  reset();
});

function reset() {
  turn = "x";
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  tiles.forEach(tile => {
    tile.classList.remove("tile-x");
    tile.classList.remove("tile-o");
  });
  displayTurn(turn);
}
