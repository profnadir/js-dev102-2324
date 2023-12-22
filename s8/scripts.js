/* RAPPEL */
/* Les tableaux - string */

/* let tab = [12,15,13];
tab.pop();

let msg = "hi dev";
msg.toUpperCase(); */

/* OBJET DATE */

/* const days = ['dimache','lundi','mardi','mercredi','jeudi','vendredi','samedi']

const d = new Date();
console.log(days[d.getDay()]);
console.log(d.getMonth()+1);
console.log(d.getFullYear()); */

/* OBJET MATH */

/* let notes = [14,15,18,13,12];

console.log(Math.max(14,15,18,13,12));
console.log(Math.max(...notes))
console.log(Math.min(...notes)) */


/* console.log(Math.floor(Math.random()*100)) */ // 0 et 1

/* alert('hi');
window.alert('hi'); */

/* window.prompt("Entrez votre age ?","dev102"); */

/* if(confirm("delete ?"))
{
    console.log('ok');
}else{
    console.log('cancel')
} */

function diviser(){
   /*  clearInterval(myintervale)
    document.getElementById('compteur').innerHTML = 0; */
   /*  window.open("https://www.ofppt.ma/") */
   /*  let fullname = document.getElementById('fullname').value;
    console.log(fullname.split('.'));
    console.log(fullname.split('.')[0]);
    console.log(fullname.split('.')[1]);
    document.getElementById('fname').value = fullname.split('.')[0];
    document.getElementById('lname').value = fullname.split('.')[1]; */
}



/* let i = 0;

function sayHi() {
    document.getElementById('compteur').innerHTML = i++;
} */

/* sayHi()*/

/* setTimeout(sayHi,5000)  */

/* function start() {
    myintervale = setInterval(sayHi,1000) ;
}
 */

function compteur() {
    let d = new Date();
    document.getElementById('h').innerHTML = d.getHours();
    document.getElementById('m').innerHTML = d.getMinutes();
    if(d.getSeconds()<10){
        document.getElementById('s').innerHTML = '0'+d.getSeconds();
    }else{
        document.getElementById('s').innerHTML = d.getSeconds();
    }
    
}

setInterval(compteur,1000)

