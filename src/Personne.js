// définition de la classe personne
export class Personne {
    // constructeuer de la class Personne, prend le nom et l'age comme paraemtre
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method pour afficher un message de salutation
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}