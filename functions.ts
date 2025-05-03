let greet : (name:string) => string;
greet = function(name:string){
    return `Hello ${name}`;
}
console.log(greet("Candy"));

let factorial:(i:number) => number;
factorial = function(i:number){
    let result = 1;
    for(let _i=1;_i<=i;_i++){
        result *= _i;
    }
    return result;
}

console.log(factorial(10));
console.log("Hello");
