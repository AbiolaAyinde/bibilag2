function output(num){
    let numArr = [];
    for (let i=1; i<= num; i++){
        if (i % 2==0){
            numArr.push("yu");
        }else if (i % 3==0){
            numArr.push("gi");
        }else if (i % 5==0){
            numArr.push("oh");
        }else if (i % 3==0 && i % 5 == 0){
            numArr.push("gi-oh"); 
        }else if (i % 2==0 && i % 3 == 0){
            numArr.push("yu-gi"); 
        }else if (i % 2==0 && i % 5==0){
            numArr.push("yu-oh");
        }else if (i % 2==0 && i % 3==0 && i % 5==0){
            numArr.push("yu-gi-oh");
        }else{
            numArr.push(i);
        }
    }
    return numArr;
}
console.log(output(100));
console.log(output(35));

