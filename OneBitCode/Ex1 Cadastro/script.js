const firstName = prompt('Qual o seu primeiro nome?')
const afterName = prompt('Qual o seu sobrenome?')
const study = prompt('Qual o seu campo de estudo?')
const birthDate = prompt('Qual o ano em que você nasceu?')

alert(
  'Recruta cadastrado com sucesso!\n' +
    '\nNome completo: ' +
    firstName +
    ' ' +
    afterName +
    '\nCampo de estudo: ' +
    study +
    '\nIdade: ' +
    (2022 - birthDate) +
    ' anos.'
)
