//Métodos são funções dentro de objetos
let pessoa = {
  nome: "Thiago",
  idade: 24,
  dizerOla() {
    console.log("Olá, mundo! meu nome é " + this.nome + "!")
  }
}

//Conseguimos refereciar alguma propriedade dentro do objeto com o this


console.log(pessoa)

//chamando o metodo
pessoa.dizerOla()