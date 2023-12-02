function calculer(){

    let a = parseFloat(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    
    let somme = a + b;

    document.getElementById('resultat').innerHTML = somme;
}