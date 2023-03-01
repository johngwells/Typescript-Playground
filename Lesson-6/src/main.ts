// Classes
class Coder {
  music: string;

  // adding visibility modifiers in the constructor params then we don't need the redundancy. (only removed name, age & lang as an example using public, private etc.)
  constructor(
    public readonly name: string,
    music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

//  protected can only be accessed inside the class & subclasses it extends to as of private is only accessed within its class only.

// 4th param not necessary when you have a default param.
const NewCoder = new Coder("J", "modular", 41);

// extend a class
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const J = new WebDev("Mac", "J", "Hates Lofi", 41);
console.log(J.getLang());

// Applying an interface to a class
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("J", "keyboard");
console.log(Page.play("tickles"));

// Anoter class example
class Peeps {
  // id: number;
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  constructor(public name: string, public id?: number) {
    this.name = name;
    this.id == ++Peeps.count;
  }
}

const JW = new Peeps("J");
const ST = new Peeps("ST");
const Amy = new Peeps("Amy");

console.log("ST Id", ST.id);

console.log(Peeps.count);

// Another Example
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ['A', 'Led'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Journey']
console.log(MyBands.data);