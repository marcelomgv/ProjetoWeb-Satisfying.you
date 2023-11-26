// NovaConta.js
const cadastrarUsuario = () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const repsenha = document.getElementById("repsenha").value;
  
    if (senha !== repsenha) {
      alert("Senhas não conferem");
      return;
    }
  
    const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
  
    listaUsuarios.push({
      email: email,
      senha: senha
    });
  
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
  
    // Redirecionar para a página desejada após o cadastro
    window.location.href = 'Index.html';
    alert('Cadastro realizado com sucesso!');
  };
  
  window.onload = () => {
    document.getElementById("btnCriar").addEventListener("click", cadastrarUsuario);
  };
  