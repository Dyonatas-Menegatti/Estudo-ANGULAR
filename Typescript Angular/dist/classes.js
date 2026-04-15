"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    name;
    stregth;
    skill;
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
class Magician extends Character {
    magicPoints;
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.skill = 12;
//# sourceMappingURL=classes.js.map