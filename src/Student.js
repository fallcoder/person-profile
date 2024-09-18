// importation de la classe Personne comme élément parent
import { Personne } from "./Personne.js";

// définition de la class Student qui hérite la classe Personne
export class Student extends Personne {
    constructor(name, age, school) {
        super(name, age); // appelle le constructeur de la class parente (Personne)
        this.school = school;
    }

    // rédefinition de la method greet pour afficher un message spécifique aux étudiants
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old, and I study at ${this.school}`)
    }
}