/* Contrairement au HTML qui a une certaine structure, le javascript et le css
n'ont pas de structure. Avec javascript, on commence directement les commandes
*/

const boutonAjouter = document.querySelector("#bouton-ajouter");
/* 
A l'image du CCS, Javascript va prendre un élt du HTML, et produit 
une réponse à la suite d'un event associé à cet élt. le navigateur 
transforme le html en un document qui une class. Chacun des élts de 
document un attribut ou une méthode de cette class. Javascript 
construit son objet à partir de l'attribut de ce document associé 
à l'élt html. Une méthode de recherche de ce document qu'on 
utilise souvent est << document.querySelector("#...") >>. C'est 
plus pratique d'utiliser un sélecteur CSS associé. Autrement dit, 
boutonAjouter est l'objet javascript associé à au bouton html. 
*/

const champAjouter = document.querySelector("#champ-ajouter");
/* valeur du champ à saisir */

const listAjouter = document.querySelector(".liste-ajouter");
/* objet javascript de la liste ul vide html. attention liste-ajouter 
est une classe alors que les autres sont des id */


boutonAjouter.addEventListener("click", function(event){
    event.preventDefault();
    if (champAjouter.value === ""){
        console.log("Champ vide: Aucune tache");
    } else{
        const eltList = document.createElement("li");
        /* crée un nouvel élt HTML li à chaque event clic */
        
        const boutonSupprimer = document.createElement("button");
        /* crée un nouvel élt HTML button à chaque clic */

        eltList.textContent = champAjouter.value;
        /* ajoute le texte input au nouvel élt li à chaque clic */

        boutonSupprimer.textContent = "Supprimer";
        /* ajoute le texte "Supprimer" au nouvel élt button à chaque clic */

        champAjouter.value = "";
        /* vide le input apès chaque clic */

        listAjouter.appendChild(eltList);
        /* ajoute cet élt li à chaque clic */

        listAjouter.appendChild(boutonSupprimer);
        /* ajoute cet élt button à chaque clic */
    }
}
);

listAjouter.addEventListener("click", function(event){
    if (event.target.textContent ==="Supprimer"){
        const li = event.target.previousElementSibling;
        li.remove();
        event.target.remove();
    }
    event.target.style.textDecoration = "line-through";
}
);
