function recuperarSenha() {
    // Obtém o e-mail digitado para recuperação
    const emailRecuperacao = document.getElementById('email').value;
  
    // Obtém a lista de usuários armazenada no localStorage
    const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
  
    // Verifica se o e-mail está cadastrado
    const usuarioRecuperacao = listaUsuarios.find(usuario => usuario.email === emailRecuperacao);
  
    if (usuarioRecuperacao) {
      // E-mail encontrado, simular envio de e-mail de recuperação
      alert('Foi enviado um e-mail para refazer a senha.');
  
      // Redirecionar para a página de login (substitua 'login.html' pelo nome da sua página de login)
      window.location.href = '../views/Index.html';
    } else {
      // E-mail não encontrado, exibir mensagem de erro
      document.getElementById('erroRecuperarSenha').style.display = 'block';
    }
  }
  