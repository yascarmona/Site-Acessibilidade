Document.getElementById('meuFormulario').addEventListener('submit', function (e) {
    var fone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;

    if (!/^\d+$/.test(telefone)) {
        alert("Por favor, insira apenas números no campo de telefone.");
        e.preventDefault(); 
        return;
    }

    if (email.indexOf('@') === -1) {
        alert("Por favor, insira um endereço de email válido.");
        e.preventDefault(); 
        return;
    }

        alert(' Obrigado! Suas informações foram encaminhadas com sucesso! :D');
    }
});
