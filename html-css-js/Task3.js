function numToPhrase(num){
    const arr = [];
    let item = 1;    

    // initializing loop from 1-num
    while(num >= item){
        if((item % 2 == 0) && (item % 3 == 0)){
            arr.push("yu-gi");
        }
        else if((item % 2 == 0) && (item % 5 ==0)){
            arr.push("yu-oh");
        }
        else if((item % 3 == 0) && (item % 5 ==0)){
            arr.push("gi-oh");
        }
        else if((item % 2 == 0) && (item % 3 == 0) && (item % 3 == 0)){
            arr.push("yu-gi-oh");
        }
        else{
            if(item % 2 == 0){
                arr.push("yu");
            }
            else if(item % 3 == 0){
                arr.push("gi");
            }
            else if(item % 5 == 0){
                arr.push("oh");
            }
            else{
                arr.push(item);
            }
        }
        item++;
    }
    return arr;
}


let number = prompt("Enter a number");
while(true){
    try {
        typeof(number) != "number";
    }
    catch(error){
        console.log(error.message);
        continue;
    }
    break;
}

//calling numToPhrae function
console.log(numToPhrase(number));
