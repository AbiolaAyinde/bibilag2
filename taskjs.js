let name = "AbiolaAyinde";
let courses =["HTML", "CSS", "JS"];
var numOfCourses = courses.length;
let numDisplay ="";
for (let i=1; i<=200; i++){
    if (numOfCourses % 2== 1){
        if (i%2 ==1){
            if (i==200-1){
                break;
            }
            numDisplay += i + 2 + "";
        }

    } 
    
}
console.log(numDisplay)
