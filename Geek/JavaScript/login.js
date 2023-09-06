var createLogin;
var createPassword;

function Register() {
    var createLogin = document.querySelector('#CreateLogin').value;
    var createPassword = document.querySelector('#CreatePassword').value;

    // Verifique se o local storage é suportado pelo navegador
    if (typeof Storage !== "undefined") {
        // Verifique se já existe um objeto 'users' no local storage
        if (!localStorage.users) {
            localStorage.users = JSON.stringify([]);
        }

        // Recupere os dados atuais de usuários do local storage
        var users = JSON.parse(localStorage.users);

        // Verifique se o nome de usuário já existe
        if (users.some(user => user.username === createLogin)) {
            alert("Nome de usuário já existe. Escolha outro.");
            return;
        }

        // Adicione o novo usuário à lista
        users.push({ username: createLogin, password: createPassword });

        // Atualize os dados de usuários no local storage
        localStorage.users = JSON.stringify(users);

        alert("Cadastro realizado com sucesso!");
        document.getElementById('CreateLogin').value = '';
        document.getElementById('CreatePassword').value = '';
    } else {
        alert("Seu navegador não suporta o armazenamento local.");
    }
}

function Login(){
    var password = document.getElementById('passoword').value
    var Login = document.getElementById('login').value
    

    if(Login == "gabriel" && password == "123"){
        alert("sucesso")
        location.href = "index.html"
    }else{
        alert("usuário incorreto, tente novamente.")
    }

}