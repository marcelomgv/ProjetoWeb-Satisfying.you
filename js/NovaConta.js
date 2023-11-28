// NovaConta.js

const exibirMensagemErro = (mensagem) => {
  const mensagemErro = document.getElementById("mensagemErro");
  mensagemErro.innerHTML = mensagem;
  mensagemErro.style.display = "block";
}

const cadastrarUsuario = (event) => {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const repsenha = document.getElementById("repsenha").value;

  const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
  const usuarioExistente = listaUsuarios.find(usuario => usuario.email === email);

  if(email.length == 0 || senha.length == 0 || repsenha.length == 0){
    exibirMensagemErro("Verifique se todos os campos foram preenchidos");
    return;
  }
  if(usuarioExistente){
    exibirMensagemErro("E-mail já cadastrado");
    // Limpar os campos após exibir a mensagem de erro
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("repsenha").value = "";
    return;
  }
  if(senha !== repsenha) {
    exibirMensagemErro("Senhas não conferem");
    // Limpar os campos após exibir a mensagem de erro
    document.getElementById("senha").value = "";
    document.getElementById("repsenha").value = "";
    return;
  }

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
  const btnCriar = document.getElementById("btnCriar");
  if (btnCriar) {
    btnCriar.addEventListener("click", cadastrarUsuario);
  } else {
    console.error("Elemento com ID 'btnCriar' não encontrado.");
  }
};