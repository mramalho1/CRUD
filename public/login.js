function logar() {
    // Obter os valores do input
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    // Fazer a requisição GET
    fetch('/pessoas')
        .then(resposta => resposta.json())
        .then(dados => {
            // Busca o usuário que tenha o email e senha digitados
            let usuarioLogado = dados.find(pessoa => pessoa.email == email && pessoa.senha == senha);

            if (usuarioLogado) {
                // Se encontrou, verifica se é admin (1) ou usuário comum
                if (usuarioLogado.admin == 1) {
                    window.location.href = 'admin.html';
                } else {
                    window.location.href = 'bemVindo.html';
                }
            } else {
                // Se não encontrou nenhum usuário com esses dados
                alert('Usuário/Senha incorreto(s)!');
            }
        });
}
