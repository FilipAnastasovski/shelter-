function Pets(name = 0, type = 0, breed = 0, preferredFood = 0, age = 0, isHealthy = true, owner = false) {
    let checkValidation = (name && type && breed && preferredFood && age);

    if ((isHealthy === 0) || (isHealthy === "No") || (isHealthy === "NotHealthy"))
     { isHealthy = false; }

    else { isHealthy = true; }

    if (checkValidation)
     {
        this.breed = breed;

        this.age = age;

        this.name = name;

        this.type = type;

        this.preferredFood = preferredFood;

        this.isHealthy = isHealthy;

        this.owner = owner;

        this.eat = function () {

            let statement = `The ${this.type} ${this.name} is eating ${this.preferredFood}`;
            return statement;

        },

            this.adopt = function (person) {
                this.owner = person;
            };

        this.isAdopted = function () {

            if (this.owner) { return true; }
            else { return false; }
        }
    }
    else { console.log("enter proper values") };
}


function person(first, last, age) {
    
    let object =
    {
        firstName: first,
        lastName: last,
        age: age,

        pets: [],

        adopt: function (petType) {

            let ifFound = 0;

            for (let i = 0; i < Shelter.length; i++) {
                if (Shelter[i].type === petType) {

                    this.pets.push(Shelter[i]);
                    Shelter.splice(i, 1);
                    ifFound += 1;
                    break;
                }
            }

            if (!ifFound) { console.log(" type of animal not in shelter"); }
        },

        abandon: function (nameOfabandonedPet) {
            
            let ownersPets = this.pets;

            let ifFound = 0;
            for (let i = 0; i < ownersPets.length; i++) {
                if (ownersPets[i].name === nameOfabandonedPet) {

                    Shelter.push(ownersPets[i]);
                    ownersPets.splice(i, 1);
                    ifFound += 1;
                    break;
                }
            }
            if (!ifFound) { console.log("type of animal not in shelter"); }
        }
    }

    return object;
}

let Shelter = [];

let dog = new Pets("jack-russel", "dog", "Affenpinscher", "socks", 2, true);

let cat = new Pets("orlando", "cat", "persian", "box", 6, false);

let horse = new Pets("mr. ed", "horse", "arabian horse", "hay", 3, true);

let lizard = new Pets("slick", "lizard", "iguana", "fly", 4, true);

let parrot = new Pets("koko", "parrot", "african grey", "seeds", 5, false);

Shelter.push(dog);
Shelter.push(cat);
Shelter.push(horse);
Shelter.push(lizard);
Shelter.push(parrot);

let person1 = person("Nikola", "Eftimov", 23);
let person2 = person("Dimitar", "Spasov", 21);
