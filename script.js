// Seleciona o formulário de login
var loginForm = document.querySelector('.login-form');

// Adiciona um ouvinte de evento de submit ao formulário de login
loginForm.addEventListener('submit', function (event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Seleciona os campos de usuário e senha
    var usernameField = document.querySelector('.login-form input[type="text"]');
    var passwordField = document.querySelector('.login-form input[type="password"]');

    // Armazena os valores dos campos de usuário e senha
    var username = usernameField.value;
    var password = passwordField.value;

    // Valida os campos de usuário e senha
    if (username === '') {
        alert('Por favor, insira um usuário válido.');
    } else if (password === '') {
        alert('Por favor, insira uma senha válida.');
    } else {
        // Envia os dados de login para o servidor
        // (substitua isso com sua lógica de autenticação)
        alert('Usuário e senha válidos. Enviando dados para o servidor...');
    }
});

var cadastroBtn = document.querySelector('#cadastro');

// Adiciona um ouvinte de evento de clique ao botão de cadastro
cadastroBtn.addEventListener('click', function () {
    // Redireciona o usuário para a página de cadastro
    window.location.href = 'cadastro.html';
});