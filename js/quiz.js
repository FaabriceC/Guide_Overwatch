/*
elements[i] designe chaque bouton radio du formulaire dans l'ordre de leur creation
checked contient true (ou 1) si le bouton correspondant est coche;
la fonction accepte un nombre quelconque d'arguments
*/
function result() {
var nbReponses= 2; // contient le nombre de reponses proposees (identique pour toutes les questions)
var reponses= 0;
var count= 0;
for (i= 0; i < (arguments.length); i++) {
reponses= reponses + document.qcm.elements[i * nbReponses].checked + document.qcm.elements[(i * nbReponses) + 1].checked;
count= count + document.qcm.elements[(i * nbReponses) + arguments[i]].checked;
}



if (count == arguments.length){
    window.alert('Votre note est de ' + count + '/' + arguments.length + '! Félicitations.');
}

if (count == 0){
    window.alert("Votre note est de " + count + "/" + arguments.length + " ! Vous pouvez mieux faire la prochaine fois!");
}


else {
    window.alert('Votre note est de ' + count + '/' + arguments.length + ' !');
}
}
