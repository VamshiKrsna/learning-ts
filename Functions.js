// Simple Function in JS : 
function greet(name){
    console.log(`Hello, ${name}!`);
}
greet("Candy");
console.log("*".repeat(10));

// Function Expression : 
const greet1 = function (name){
    console.log(`Hello, ${name}`)
}
greet1("Candy");

// Arrow Function : 
// """
// const function_name = (params) => {
//     function_body    
// }
// """


const greet2 = (name) => {
    console.log(`Hello, ${name}`);
}
greet2("Candy")

// Function Closure : 
function outer(){
    let x = 10;
    function inner(){
        console.log(x);
    }
    return inner;
}
const innerfunc = outer();
innerfunc();

// Function Binding : 
const obj = {
    name:"John",
    age:27,
    greet: function(){
        console.log(`Hello, ${this.name}`);
    },
};
const boundGreet = obj.greet.bind(obj);
boundGreet();

// Function calling : 
const obj1 = {
    name:"John",
    age:27,
    greet: function(){
        console.log(`Hello, ${this.name}`);
    },
};
obj1.greet.call(obj1);

// spread operator : `...`

function sum(a,b,c){
    return a + b + c;
}
const args = [1,2,3];
console.log(sum(...args));