var createLogin;
var createPassword;

function Register() {
    
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