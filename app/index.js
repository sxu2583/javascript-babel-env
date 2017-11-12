import mult from './math';
import {fellowship, total} from './fellowship';


class Animal{
  constructor(name, height){
    this.name = name;
    this.height = height;
  }

  hello() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

let king = new Animal("Mufasa", 4.5);

console.log(king);
king.hello();
