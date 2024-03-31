const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Fonction pour ajouter une tâche
function addTask(){
    if(inputBox.value === ''){
        alert("Oups ! Il faut d'abord entrer vos tâches.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
// Écouteur d'événement pour détecter la pression de la touche "Entrée"
inputBox.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) { // Vérifie si la touche pressée est "Entrée"
        addTask(); // Appelle la fonction addTask() pour ajouter une tâche
    }
    
    saveData();
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()

// fonction flechee
const name = (params) => {
    console.log(params)
} 


