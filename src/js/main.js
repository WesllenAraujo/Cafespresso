let botaoCadastar = document.getElementById("botao-cadastro");
botaoCadastar.onclick = function() {
    let nomeUsuario = document.getElementById("campo-nome").value;
    let email = document.getElementById("campo-email").value;
    let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    let senha1 = document.getElementById("campo-senha1").value;
    let senha2 = document.getElementById("campo-senha2").value;
    let textoErro = document.getElementById("texto-de-erro");
    if (nomeUsuario === '') {
        textoErro.innerText = "Informe seu nome, por favor.";
    } else if (nomeUsuario.length < 4) {
        textoErro.innerText = "Seu nome deve ter pelo menos 4 caracteres.";
    } else {
        textoErro.innerText = "";
        if (!emailRegex.test(email)) {
            textoErro.innerText = "Informe um email válido, por favor."
        } else {
            textoErro.innerText = "";
            if (senha1 === '' || senha1.length < 4) {
                textoErro.innerText = "Sua senha deve conter pelo menos 4 caracteres.";
            } else if (senha1 != senha2) {
                textoErro.innerText = "As senhas não coincidem."
            }
        }
    }

}