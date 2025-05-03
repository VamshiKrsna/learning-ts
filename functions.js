var greet;
greet = function (name) {
    return "Hello ".concat(name);
};
console.log(greet("Candy"));
var factorial;
factorial = function (i) {
    var result = 1;
    for (var _i = 1; _i <= i; _i++) {
        result *= _i;
    }
    return result;
};
console.log(factorial(10));
console.log("Hello");
