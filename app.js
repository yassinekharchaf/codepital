// import de classes
import { Patient } from "./patient.js";
import { Doctor } from "./doctor.js";
import { Chat } from "./chat.js";
import { Pharmacie } from "./pharmacie.js";

// Création des objets étape par étape

// Créer le doctor
var doctor = new Doctor("Debugger", 0);
// Créer le chat
var chat = new Chat("sphynx");
// Créer la pharmacie
var pharmacie = new Pharmacie();
// créer une référence pour le patient en traitement
var patientEnTraitement;
// créer un tableau park pour les patients guérries
var parc = [];
// Créer un cimetière
var cimetiere = [];
// On met le chat dans le cabinet du doctor
doctor.cabinet.push(chat);

// Créer les patients et les mettres dans le cabinet du docteor
doctor.salleDattente.push(
    new Patient("marcus", "mal indenté", 100),
    new Patient("Optimus", "unsave", 200),
    new Patient("Sangoku", "404", 80),
    new Patient("DarthVader", "azmatique", 110),
    new Patient("Semicolon", "syntaxError", 60)

);
// ON FAIT UN BOUCLE TANT QU'IL Y A DES PERSONNES DANS LA SALLE D'ATTENTE
while (doctor.salleDattente.length != 0) {
    // Le doctor faire rentrer un patient
    doctor.patientIn(doctor.salleDattente[0]);
    // Le Doctor diagnostique le patient
    doctor.diagnostiquer();
    // Le patient paye le doctor
    doctor.cabinet[1].paye(doctor, 50);
    // Le doctor fait sortir le patient
    patientEnTraitement = doctor.cabinet[1];
    doctor.patientOut();
    // Le patient va à la pharmacie
    patientEnTraitement.goTo('pharmacie');
    // La pharmacie donne le remède
    pharmacie.donnerTraitement(patientEnTraitement);
    // Si le patient est guérrie il va au parc sinon au cimetiere
    if (patientEnTraitement.etatSante == "bonne santé") {
        parc.push(patientEnTraitement);
    } else {
        cimetiere.push(patientEnTraitement);
    }
}// fin de la boucle
// Etat des lieux
console.log(parc);
console.log(cimetiere);
console.log(pharmacie);
console.log(doctor);