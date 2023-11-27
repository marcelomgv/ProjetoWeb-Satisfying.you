// Index.js

window.onload = () => {
    document.getElementById("btnEntrar").addEventListener("click", autenticarUsuario);
  };
  
  const autenticarUsuario = () => {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
  
    const usuarioAutenticado = listaUsuarios.find(usuario => usuario.email === email && usuario.senha === senha);
  
    if (usuarioAutenticado) {
        // Credenciais corretas, redirecionar para a página desejada
        window.location.href = 'Home.html';
        alert('Login realizado com sucesso!');

    } else {
      // Exibir mensagem de erro
      exibirErroLogin("E-mail e/ou senha inválidos");
    }
  };

  const exibirErroLogin = (mensagem) => {
    document.getElementById("erroLogin").innerHTML = mensagem;
    document.getElementById("erroLogin").style.display = "block";
  
    // Limpar os campos após exibir a mensagem de erro
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
  };
  