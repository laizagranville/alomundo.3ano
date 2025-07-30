function inserirNome(){
    let nomeUsuario = prompt("Qual seu nome");
      let elemento = document.querySelector("#nome-usuario");
      console.log(elemento)
      elemento.textContent = nomeUsuario;
}