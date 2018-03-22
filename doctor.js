export class Doctor {
    // Définition des propriétés
    constructor(nom, argent) {
        this.nom = nom;
        this.argent = argent;
        this.cabinet = [];
        this.salleDattente = [];
    }
    // methode pour diagnostiquer un patient
    diagnostiquer() {

        switch (this.cabinet[1].maladie) {
            case "mal indenté":
                this.cabinet[1].traitement = "ctrl+maj+f";
                break;
            case "unsave":
                this.cabinet[1].traitement = "saveOnFocuxChange";
                break;
            case "404":
                this.cabinet[1].traitement = "CheckLinkRelation";
                break;
            case "azmatique":
                this.cabinet[1].traitement = "Ventoline";
                break;
            case "syntaxError":
                this.cabinet[1].traitement = "f12+doc";
                break;
            default:
                console.log("je ne sait pas ce que vous avez");

        }
        // on passe la propriété etatSante du patient à "diagnostiqué"
        this.cabinet[1].etatSante = "diagnostiqué";

    }

    // Le doctor fait entré le patient dans son cabinet
    patientIn(patient) {
        // le doctor met le patient dans le cabinet
        this.cabinet.push(patient);
        // le doctor sort le patient de la salle d'attente
        this.salleDattente.shift()
    }
    // le doctor fait sortir le patient de sont cabinet
    patientOut() {
        this.cabinet.pop();
    }

}