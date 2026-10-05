class Athlete{
    constructor(nom,prenom,age,pays,equipe){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.pays = pays;
        this.equipe = equipe;
    }

    nompComplet(){
        return `${prenom} ${nom}`;
    }

    toString(){
        return `${this.prenom} ${this.nom} (${this.pays}, ${this.equipe})`;
    }
}

const bolt = new Athlete("Bolt", "Usain", 30, "Jamaique", "Lightning");
console.log(bolt.toString());