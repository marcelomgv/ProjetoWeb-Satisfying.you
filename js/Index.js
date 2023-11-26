// Index.js

window.onload = () => {
    document.getElementById("btnEntrar").addEventListener("click", autenticarUsuario);
  };
  
  const autenticarUsuario = () => {
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
      document.getElementById("erroLogin").style.display = "block";
    }
  };
  