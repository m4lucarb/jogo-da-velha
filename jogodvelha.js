let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogador = "X";
let computador = "O";
let jogoAcabou = false;

function exibirTabuleiro() {
  console.log(`
    ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
    ---------
    ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
    ---------
    ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}
  `);
}

function jogadorMove(posicao) {
  if (tabuleiro[posicao] === "" && !jogoAcabou) {
    tabuleiro[posicao] = jogador;
    exibirTabuleiro();
    if (verificarVencedor(jogador)) {
      console.log("Você venceu!");
      jogoAcabou = true;
    } else if (tabuleiro.every(cell => cell !== "")) {
      console.log("Empate!");
      jogoAcabou = true;
    } else {
      computadorMove();
    }
  } else {
    console.log("Posição inválida ou jogo acabou.");
  }
}

function computadorMove() {
  if (jogoAcabou) return;

  let posicao;
  do {
    posicao = Math.floor(Math.random() * 9);
  } while (tabuleiro[posicao] !== "");

  tabuleiro[posicao] = computador;
  console.log("Computador jogou:");
  exibirTabuleiro();

  if (verificarVencedor(computador)) {
    console.log("Computador venceu!");
    jogoAcabou = true;
  } else if (tabuleiro.every(cell => cell !== "")) {
    console.log("Empate!");
    jogoAcabou = true;
  }
}

function verificarVencedor(player) {
  const combinacoesVencedoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return combinacoesVencedoras.some(combinacao => {
    return combinacao.every(posicao => tabuleiro[posicao] === player);
  });
}

exibirTabuleiro();
jogadorMove(0);
