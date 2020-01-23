/*
alert('je suis le boss');
document.write("Hello world");
console.log("loic"); */
/*
function show(){
    if(document.body.style.backgroundColor == "white")
    {
        document.body.style.backgroundColor="black";
    }
    else
    {
        document.body.style.backgroundColor="white";
    }
}
var images = [1,2,3]
var num = 0;

function next(){
    var slider = document.getElementsByld("slider");
    num ++;
    if(num >= images.lenght){
        num = 0;
    }
    slider.src = images ;
}
const liste = document.createElement('ul');
const elementListe1 = document.createElement('li');
elementListe1.innerText = 'Element1';
liste.appendChild(elementListe1);

const elementListe2 = document.createElement('li');
elementListe2.innerText = 'Element2';
liste.appendChild(elementListe2);

document.body.appendChild(liste);

alert('je suis loic');
document.write('Hello world');
console.log("loic");
*/
const age = Number(prompt("Quel est ton age ? "));  //tranche d'age
if (age < 0) {
    alert("Tu mens !!")
}
else if (age < 18) {
    alert("tu es mineur !")
}
else if (age < 50) {
    alert("tu es majeur !")
}
else if (age < 60) {
    alert("tu es un senior !")
}
else if (age > 120) {
    alert("tu mens !!")
}
else {
    alert("tu es retraité !")
}