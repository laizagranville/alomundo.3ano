function inserirNome(){
    let nomeUsuario = prompt("Qual seu nome");
      let elemento = document.querySelector("#nome-usuario");
      console.log(elemento)
      elemento.textContent = nomeUsuario;
}
const lista = document.querySelector('#lista');

lista.textContent = linguagem[0];
lista.textContent = linguagem[1];
lista.textContent = linguagem[2];
