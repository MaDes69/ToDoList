var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");  //querySelector pour ul
var items = document.getElementsByTagName("li");

function inputlength(){   // longueur de ce que j'écris
    return input.value.length;
}

function createlistElement(){

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));  //appendChild => ajoute un enfant
    ul.appendChild(li);
    input.value = ""; //reset input pour pouvoir réecrire


    function crossOut(){ //changement de couleur pour signaler la fin de la tâche
        li.classList.toggle("done"); //toggle comme interrupteur enlever et remettre
    }
    li.addEventListener("click", crossOut);


    var dBtn = document.createElement("button"); // boutton pour supprimer la tâche
    dBtn.appendChild(document.createTextNode("X")); //creation
    li.appendChild(dBtn); // button dans chaque li
    dBtn.addEventListener("click", deleteListItems); //click
    dBtn.className = "dBtn"; // donner une classe
    dBtn.innerHTML = '<i class="ri-delete-bin-line"></i>'; // ajouter un icon 

    function deleteListItems(){     // fonction delete
        li.classList.add("delete");
    }
}


function addListAfterClick(){   //apres click sur le boutton
    if (inputlength() > 0){
        createlistElement();
    }
}

function addListAfterKeypress(event){
    if (inputlength() > 0 && event.which === 13){ //keycode de la touche enter est 13 event-which => touche pressée
        createlistElement();
    }
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
