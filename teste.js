import fs from 'fs'

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novosDados =  { id: '3', nome: ' Livro mais melhor de bom' }

fs.writeFileSync("livro.json", JSON.stringify([...dadosAtuais, novosDados]));
console.log(JSON.parse(fs.readFileSync("livros.json")));

