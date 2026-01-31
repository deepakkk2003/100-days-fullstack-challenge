let marks = [70, 80, 60, 90];

console.log(marks[0]);

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
    
}

const random = ["tree", 795, [0, 1, 2]];
console.log(random[2][2]);


const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1


const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities);

cities.push("Bradford", "Brighton");
console.log(cities); 

const citys = ["Manchester", "Liverpool"];
const newLength = citys.push("Bristol");
console.log(citys);
console.log(newLength);

const towns = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(towns);

const villages = ["Manchester", "Liverpool"];
const removedVillage = villages.pop();
console.log(removedVillage);


let integers=[1,2,3,4,5,6]

let evenCount=0
let oddCount=0

for(let i=0;i<integers.length;i++){
    if(integers[i]%2==0){
        evenCount++;
    }
    else{
        oddCount++;
    }
}

console.log("Count of even numbers: ",evenCount);
console.log("Count of odd numbers: ",oddCount);

let birdss = ["Parrot", "Falcon", "Owl"];

for (let bird of birdss) {
  console.log(bird);
}
