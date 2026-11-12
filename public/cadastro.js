//preencher os inputs com arrow functions
const preencherFormulario = (endereco) => {
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}

//autopreenchimento
const cepValido = (cep) => {
    if (cep.length == 8) {
        return true;
    } else {
        return false;
    }
}

//buscar API
const pesquisarCep = async () => {
    const cep = document.getElementById("cep").value;
    // CORREÇÃO: Alterado de http para https para funcionar no Render
    const url = `https://viacep.com.br/ws/${cep}/json/`; 
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
            preencherFormulario(endereco);
        }
}
document.getElementById("cep").addEventListener("focusout", pesquisarCep);

function cadastrar(){
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let cpf = document.getElementById('cpf').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let cep = document.getElementById('cep').value
    let rua = document.getElementById('rua').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let telefone = document.getElementById('telefone').value
    
    // CORREÇÃO: Removida a aspa extra que estava quebrando o código
    fetch('/pessoas', { 
        method: 'POST', // Método HTTP utilizando o POST
        headers: {
            'Content-Type': 'application/json' // Tipo do conteúdo enviado JSON
        },
        body:  JSON.stringify({nome: nome, sobrenome: sobrenome, cpf: cpf, email: email, senha: senha, cep: cep, rua: rua, cidade: cidade, estado: estado, telefone: telefone}) // Dados a serem enviados
    }).then(resposta => resposta.json())
}
