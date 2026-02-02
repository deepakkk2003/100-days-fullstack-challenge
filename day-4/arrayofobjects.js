let students = [
  { name: "Ravi", marks: 75 },
  { name: "Amit", marks: 35 },
  { name: "Neha", marks: 90 }
];

console.log(students[0].name);
console.log(students[1].marks);


for (let i=0;i<students.length;i++){
    console.log(students[i].name,students[i].marks);
    
}


// Task:
// From the students array:
// Print Pass / Fail for each student
// Condition:
// marks ≥ 40 → Pass
// else → Fail

for(let i=0;i<students.length;i++){
    if(students[i].marks>40){
        console.log(students[i].name + " You are pass");
    }
    else{
        console.log(students[i].name + " You are fail");  
    }
}

for(let i=0;i<students.length;i++){
    if(students[i].marks>40){
        students[i].result="pass";
    }
    else{
        students[i].result="fail";
    }
}

console.log(students);
