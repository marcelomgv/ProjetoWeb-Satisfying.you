// RecuperarSenha.js

const recuperarSenha = () => {
    const email = document.getElementById("email").value;

    // Validar o formato do e-mail (simplificado)
    if (!validateEmail(email)) {
        exibirErroRecuperarSenha("Formato inválido de e-mail");
        return;
    }

    // Validar se o e-mail existe nos dados salvos
    const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
    const usuarioExistente = listaUsuarios.find(usuario => usuario.email === email);

    if (!usuarioExistente) {
        // Simulação de envio de e-mail de recuperação (substitua por lógica real)
        alert(`Um e-mail de recuperação foi enviado para ${email}. (Simulação)`);
// RecuperarSenha.js

const recuperarSenha = () => {
    const email = document.getElementById("email").value;

    // Validar o formato do e-mail (simplificado)
    if (!validateEmail(email)) {
        exibirErroRecuperarSenha("Formato inválido de e-mail");
        return;
    }

    // Validar se o e-mail existe nos dados salvos
    const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
    const usuarioExistente = listaUsuarios.find(usuario => usuario.email === email);

    if (!usuarioExistente) {
        // Simulação de envio de e-mail de recuperação (substitua por lógica real)
        alert(`Um e-mail de recuperação foi enviado para ${email}. (Simulação)`);

        // Redirecionar para a página de login
        window.location.href = 'Index.html';
    } else {
        exibirErroRecuperarSenha("E-mail não cadastrado");
    }
};

const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

const exibirErroRecuperarSenha = (mensagem) => {
    const erroRecuperarSenha = document.getElementById("erroRecuperarSenha");
    if (erroRecuperarSenha) {
        erroRecuperarSenha.innerHTML = mensagem;
        erroRecuperarSenha.style.display = mensagem ? "block" : "none";
    }
};
// RecuperarSenha.js

const recuperarSenha = () => {
    const email = document.getElementById("email").value;

    // Validar o formato do e-mail (simplificado)
    if (!validateEmail(email)) {
        exibirErroRecuperarSenha("Formato inválido de e-mail");
        return;
    }

    // Validar se o e-mail existe nos dados salvos
    const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
    const usuarioExistente = listaUsuarios.find(usuario => usuario.email === email);

    if (!usuarioExistente) {
        // Simulação de envio de e-mail de recuperação (substitua por lógica real)
        alert(`Um e-mail de recuperação foi enviado para ${email}. (Simulação)`);

        // Redirecionar para a página de login
        window.location.href = 'Index.html';
    } else {
        exibirErroRecuperarSenha("E-mail não cadastrado");
    }
};

const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

const exibirErroRecuperarSenha = (mensagem) => {
    const erroRecuperarSenha = document.getElementById("erroRecuperarSenha");
    if (erroRecuperarSenha) {
        erroRecuperarSenha.innerHTML = mensagem;
        erroRecuperarSenha.style.display = mensagem ? "block" : "none";
    }
};

        // Redirecionar para a página de login
        window.location.href = 'Index.html';
    } else {
        exibirErroRecuperarSenha("E-mail não cadastrado");
    }
};

const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

const exibirErroRecuperarSenha = (mensagem) => {
    const erroRecuperarSenha = document.getElementById("erroRecuperarSenha");
    if (erroRecuperarSenha) {
        erroRecuperarSenha.innerHTML = mensagem;
        erroRecuperarSenha.style.display = mensagem ? "block" : "none";
    }
};
