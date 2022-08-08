function avgNumber (n){
    let count = 0;
    let sum=0;
for(let i=0; i<=n;  i++){
    
    count = count+1;
    sum = sum+i;
    
}
const avg = sum / count;
return avg;
}
console.log(avgNumber(10));