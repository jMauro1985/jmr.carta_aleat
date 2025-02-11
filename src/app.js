window.onload = function() {
  console.log("Cargando carta aleatoria...");

  setTimeout(() => { 
      generaCarta();
  }, 500); git
};

function generaCarta() {
  let palos = ["♥", "♠", "♣", "♦"];
  let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let indexPalo = Math.floor(Math.random() * palos.length);
  let indexValor = Math.floor(Math.random() * valores.length);
  
  let paloElegido = palos[indexPalo];
  let valorElegido = valores[indexValor];

  document.getElementById("palo1").textContent = paloElegido;
  document.getElementById("numCarta").textContent = valorElegido;
  document.getElementById("palo2").textContent = paloElegido;

  if (paloElegido == "♥" || paloElegido == "♦") {
      document.getElementById("palo1").style.color = "red";
      document.getElementById("palo2").style.color = "red";
  } else {
      document.getElementById("palo1").style.color = "black";
      document.getElementById("palo2").style.color = "black";
  }
}