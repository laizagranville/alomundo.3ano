function inserirNome(){
    let nomeUsuario = prompt("Qual seu nome");
      let elemento = document.querySelector("#nome-usuario");
      console.log(elemento)
      elemento.textContent = nomeUsuario;
}
const lista = document.querySelector('#lista');

lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];
