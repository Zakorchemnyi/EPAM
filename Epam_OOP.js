//Create 2 objects: animal and cat, add move property to animal object,
// cat object must inherit move property from object animal
class Animal {
    constructor(move){
        this.move = move;
    }
}

const Cat = new Animal(5);

console.log(Cat)