'use strict';

class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed += speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}`);
    }
}

const dog = new Animal('Reddie');

dog.run(50);

class Rabbit extends Animal {
    jump() {
        // super.run(speed);
        
        this.speed++;
        console.log(`${this.name} прыгает, скорость ${this.speed}`);
    }
}

const krol = new Rabbit('Jack');

krol.run(50);

krol.jump();
