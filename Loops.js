for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log("*".repeat(10));

let j = 1
while (j < 11){
    console.log(j);
    j += 1;
}
console.log("*".repeat(10));

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
console.log("*".repeat(10));

const colors = ["Violet","Indigo","Blue","Green","Yellow","Orange","Red"]
for (const color of colors){
    console.log(color);
}
console.log("*".repeat(10));

const numbers = new Set([1, 2, 3, 4, 5]);
for (const num of numbers) {
    console.log(num);
}
console.log("*".repeat(10));
