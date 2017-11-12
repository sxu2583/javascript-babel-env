import mult from './math';
import {fellowship, total} from './fellowship';
import Animal from './Animal';

class Lion extends Animal{
  constructor(name, height, color){
    super(name, height);
    this.color = color;
  }

  hello(){
    console.log(`Hi im ${this.name} from Pride Rock!`);
  }
}

let son = new Lion("Simba", 2, "Gold");
console.log(son);
son.hello();
