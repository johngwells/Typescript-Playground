"use strict";
// Classes
class Coder {
    // adding visibility modifiers in the constructor params then we don't need the redundancy. (only removed name, age & lang as an example using public, private etc.)
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
//  protected can only be accessed inside the class & subclasses it extends to as of private is only accessed within its class only.
// 4th param not necessary when you have a default param.
const NewCoder = new Coder("J", "modular", 41);
// extend a class
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const J = new WebDev("Mac", "J", "Hates Lofi", 41);
console.log(J.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("J", "keyboard");
console.log(Page.play("tickles"));
// Anoter class example
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.name = name;
        this.id == ++Peeps.count;
    }
}
// id: number;
Peeps.count = 0;
const JW = new Peeps("J");
const ST = new Peeps("ST");
const Amy = new Peeps("Amy");
console.log("ST Id", ST.id);
console.log(Peeps.count);
// Another Example
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ['A', 'Led'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Journey'];
console.log(MyBands.data);
