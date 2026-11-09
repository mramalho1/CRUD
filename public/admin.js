function buscarDados() {
    var cpf = document.getElementById('cpf').value 


    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    }).then(resposta => resposta.json()).then(dados => {
        let pessoaEncontrada = dados.find(pessoa => pessoa.cpf == cpf)


        if(pessoaEncontrada) {
            document.getElementById('id').value = pessoaEncontrada.id
            document.getElementById('nome').value = pessoaEncontrada.nome
            document.getElementById('sobrenome').value = pessoaEncontrada.sobrenome
            document.getElementById('cpf').value = pessoaEncontrada.cpf
            document.getElementById('email').value = pessoaEncontrada.email
            document.getElementById('senha').value = pessoaEncontrada.senha
            document.getElementById('cep').value = pessoaEncontrada.cep
            document.getElementById('rua').value = pessoaEncontrada.rua
            document.getElementById('cidade').value = pessoaEncontrada.cidade
            document.getElementById('estado').value = pessoaEncontrada.estado
            document.getElementById('telefone').value = pessoaEncontrada.telefone
        } else {
            alert("Pessoa não encontrada")
        }
    })
}

function atualizarDados() {
    let id = document.getElementById('id').value
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


    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'PUT', //Metodo PUT HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome, sobrenome: sobrenome, cpf: cpf, email: email, senha: senha, cep: cep, rua: rua, cidade: cidade, estado: estado, telefone: telefone}) //Dados a serem enviados e convertidos
    }).then(resposta => resposta.JSON) //Converte a resposta para JSON
}

function deletarDados(){
    let id = document.getElementById('id').value

    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'DELETE'
    }).then(resposta => resposta.json())
}

fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        // Selecionar a tabela tbody
        var tabelaCorpo = document.getElementById('tabela-corpo');

        // Para cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            // CRIANDO A LINHA DA TABELA AQUI (Faltava esta linha!)
            var tr = document.createElement('tr'); 

            var tdId = document.createElement('td');
            var tdNome = document.createElement('td');
            var tdSobrenome = document.createElement('td');
            var tdCpf = document.createElement('td');
            var tdEmail = document.createElement('td');
            var tdRua = document.createElement('td');
            var tdCep = document.createElement('td');
            var tdCidade = document.createElement('td');
            var tdEstado = document.createElement('td');
            var tdTelefone = document.createElement('td');

            // Preenche as celulas da linha com as informações
            tdId.innerText = objeto.id;
            tdNome.innerText = objeto.nome;
            tdSobrenome.innerText = objeto.sobrenome;
            tdCpf.innerText = objeto.cpf;
            tdEmail.innerText = objeto.email;
            tdRua.innerText = objeto.rua;
            tdCep.innerText = objeto.cep;
            tdCidade.innerText = objeto.cidade;
            tdEstado.innerText = objeto.estado;
            tdTelefone.innerText = objeto.telefone;

            // Adiciona as celulas na linha (tr)
            tr.appendChild(tdId);
            tr.appendChild(tdNome);
            tr.appendChild(tdSobrenome);
            tr.appendChild(tdCpf);
            tr.appendChild(tdEmail);
            tr.appendChild(tdRua);
            tr.appendChild(tdCep);
            tr.appendChild(tdCidade);
            tr.appendChild(tdEstado);
            tr.appendChild(tdTelefone);
            
            // Adiciona a linha (tr) no corpo da tabela
            tabelaCorpo.appendChild(tr);
        });
    });




function buscarDados() {
    var cpf = document.getElementById('cpf').value 


    fetch('http://localhost:3000/pessoas', {
        method: 'GET'
    }).then(resposta => resposta.json()).then(dados => {
        let pessoaEncontrada = dados.find(pessoa => pessoa.cpf == cpf)


        if(pessoaEncontrada) {
            document.getElementById('id').value = pessoaEncontrada.id
            document.getElementById('nome').value = pessoaEncontrada.nome
            document.getElementById('sobrenome').value = pessoaEncontrada.sobrenome
            document.getElementById('cpf').value = pessoaEncontrada.cpf
            document.getElementById('email').value = pessoaEncontrada.email
            document.getElementById('senha').value = pessoaEncontrada.senha
            document.getElementById('cep').value = pessoaEncontrada.cep
            document.getElementById('rua').value = pessoaEncontrada.rua
            document.getElementById('cidade').value = pessoaEncontrada.cidade
            document.getElementById('estado').value = pessoaEncontrada.estado
            document.getElementById('telefone').value = pessoaEncontrada.telefone
        } else {
            alert("Pessoa não encontrada")
        }
    })
}

function atualizarDados() {
    let id = document.getElementById('id').value
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


    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'PUT', //Metodo PUT HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome, sobrenome: sobrenome, cpf: cpf, email: email, senha: senha, cep: cep, rua: rua, cidade: cidade, estado: estado, telefone: telefone}) //Dados a serem enviados e convertidos
    }).then(resposta => resposta.JSON) //Converte a resposta para JSON
}

function deletarDados(){
    let id = document.getElementById('id').value

    fetch(`http://localhost:3000/pessoas/${id}`, {
        method: 'DELETE'
    }).then(resposta => resposta.json())
}