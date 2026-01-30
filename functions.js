function greet(name){
    return "Hello" + name;
}

console.log(greet(" deepak"));


function add(a,b){
    return a+b;
}
console.log(add(9,9));
console.log(add(5,7));
console.log(add(6,6));


function checkRes(score){
    if (score>35){
        return "Pass";
    }
    else{
        return "false";
    }
}

console.log(checkRes(89));
console.log(checkRes(32));


function finalResult(name,marks,attendance){
    if(attendance>90){
        marks+=5;
    }

    if(attendance>45){
        console.log(name + " Marks are : " + marks );
    }
    else{
        console.log(name + " Marks are : "+ marks);
        
    }
}

finalResult("mike",50,90)
