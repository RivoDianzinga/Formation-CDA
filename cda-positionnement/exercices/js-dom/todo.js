/* Contrairement au HTML qui a une certaine structure, le javascript et le css
n'ont pas de structure. Avec javascript, on commence directement les commandes
*/

const boutonAjouter = document.querySelector("#bouton-ajouter");
/* 
A l'image du CCS, Javascript va prendre un élt du HTML, et produit 
une réponse à la suite d'un event associé à cet élt. Le navigateur 
transforme le html en un document qui une class. Ce document 
contient les balises du html. Autrement dit, chacun des élts de 
document est un attribut html ou une méthode de cette class. 
Javascript construit son objet à partir de l'attribut de ce document 
associé à l'élt html. Une méthode de recherche de ce document qu'on 
utilise souvent est << document.querySelector("#...") >>. C'est 
plus pratique d'utiliser un sélecteur CSS associé. Autrement dit, 
boutonAjouter est l'objet javascript associé à au bouton html. 
La hiérarchie du DOM : d'abord le document, puis les élts (balises 
html), ensuite les attibuts des balises html et enfin le texte.
On rappelle que les attributs html sont les informations 
supplémentaires qu'on ajoute à une balise pour préciser son 
comportement ou ses caractéristiques (type, class, id, etc. 
d'une balise).
*/

const champAjouter = document.querySelector("#champ-ajouter");
/* sélectionne la valeur du champ à saisir...pour les formulaires, 
javascript comprend la valeur du champ comme "input.value" */

const listAjouter = document.querySelector(".liste-ajouter");
/* objet javascript de la liste ul vide html. attention liste-ajouter 
est une classe alors que les autres sont des id */


boutonAjouter.addEventListener("click", function(event){
/*
  attribut ---> écouteur --->  event  ---> fonction de réponse
  - L'attribut est l'élt du DOM ou html concerné par l'event ;
  - L'écouteur le plus utilisé est la fonction addEventListener ;
  - L'event est soit un mouvement de la souris, du clavier, de 
  la fenètre d'écran, du toucher de l'écran. A chaque event, 
  correspond une mot-clé approprié en javascript à connaitre ;
  - La fonction de réponse qui est le plus dur à définir.
*/
    event.preventDefault();
    /* empèche l'event par défaut du navigateur */
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

        listAjouter.append(eltList);
        /* ajoute cet élt li à la fin à chaque clic */

        listAjouter.append(boutonSupprimer);
        /* ajoute cet élt button à la fin à chaque clic */
    }
}
);

listAjouter.addEventListener("click", function(event){
    if (event.target.textContent ==="Supprimer"){
        /* target est la cible de l'event */
        const li = event.target.previousElementSibling;
        /* ici on regarde l'arborescence du DOM où li vient avant 
        le bouton "supprimer */ 
        li.remove();
        /* on enlève totalement la balise */
        event.target.remove();
        /* on enlève la cible */
    }
    event.target.style.textDecoration = "line-through";
    /* ici, on change le style css du target de l'event */
}
);
