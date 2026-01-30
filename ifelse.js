const prompt=require('prompt-sync')();

let marks = prompt("Enter your marks:")
marks=Number(marks)

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}


// const prompt=require('prompt-sync')();

// let num=prompt("Check the number is even or odd: ")

// if(num%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
    
// }

function checkEntrance(name,score){
    if(score>50){
        return "welcome "+(name)+",you passed the test";
    }
    else{
        return "sorry "+name
    }
}

console.log(checkEntrance('deepak',99));
console.log(checkEntrance('mike',36));

