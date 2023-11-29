//window.alert(5+3);
//alert(5+3);
//console.log(5+3);
//document.write("<h1>hi dev102</h1>");

/* let pwd = prompt("Entrez votre mot de passe : ");

if(pwd == "12345"){
    document.write("bonjour admin");
}else{
    document.write("mot de passe incorrect");
} */

function test() {

    let pwd = document.getElementById('pass').value;
    let email = document.getElementById('email').value;

    if(email=="admin@gmail.com" && pwd == "12345"){
        document.write("bonjour admin");
    }else{
        document.write("mot de passe incorrect");
    }   
}