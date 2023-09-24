var createLogin;
var createPassword;

const username = document.querySelector('.Username')
username.innerHTML = localStorage.getItem('usuário')

function Register() {
    var user = document.getElementById('CreateLogin').value
    var passoword = document.getElementById('CreatePassword').value

    localStorage.setItem("usuário",user)
    localStorage.setItem("password",passoword)
    

    alert("sucesso")
    location.href = "login.html"

}

function Login(){
    var createdUser = localStorage.getItem("usuário")
    var createdPassword = localStorage.getItem("password")

    const password = document.getElementById('passoword').value
    const Login = document.getElementById('login').value
    
    if(Login == createdUser && password == createdPassword){
        alert("sucesso")
        location.href = "index.html"
    }else{
        alert("usuário ou senha incorreto, tente novamente.")
    }

}