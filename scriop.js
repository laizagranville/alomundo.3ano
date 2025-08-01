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


let aluno1 ={
  nome:'Laíza',
  idade: 18,
  anoletivo:'Esino Médio',
  materiasFavoritas:['Educação Física e Programação']
}