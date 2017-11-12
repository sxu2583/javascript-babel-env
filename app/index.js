let a = new Set();

a.add(5);
a.add(43);
a.add("WhooHoo");
a.add({x: 50, y:200});
console.log(a.size);

for(let x of a.values()){
  console.log(x);
}


let y = {
  hello: 1,
  world: 2
};

console.log(y);
console.log(y.hello);

var length = a.length();
