//class patient
class Patient {
    // Définition des paramêtres
    constructor(name, maladie, argent) {
        this.name = name;
        this.maladie = maladie;
        this.argent = argent;
        this.traitement;
        this.etatSante = "malade";
        this.localisation;

    }
    // méthode pour changer la localisation de l'objet
    goTo(endroit) {
        this.localisation = endroit;
    }

    paye(personne, montant) {
        personne.argent += montant;
        this.argent -= montant;
    }
}

export { Patient };