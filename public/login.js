function logar(){
    // Obter os valores do input
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    // Fazer a requisição GET - READ e buscar em pessoa
    fetch('/pessoas').then(resposta => resposta.json()).then(dados => {
        // Buscar os usuários e senha que foram digitados e que existem no JSON - FIND
        let usuarios = dados.find(pessoas => pessoas.email == email && pessoas.senha == senha)
        if(usuarios){
            window.location.href = 'bemVindo.html'
        }else if(admin){
            alert('Usuário/Senha incorreto(s)!')
        }
    })
}

function admin(){
    // Obter os valores do input
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    // Fazer a requisição GET - READ e buscar em pessoa
    fetch('/pessoas').then(resposta => resposta.json()).then(dados => {
        // Buscar os usuários e senha que foram digitados e que existem no JSON - FIND
        let admin = dados.find(pessoas => pessoas.email == email && pessoas.senha == senha && pessoas.admin == 1)
        if(admin){
            window.location.href = 'admin.html'
        }else{
            alert('Usuário/Senha incorreto(s)!')
        }
    })
}
