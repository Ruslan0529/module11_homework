function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

let add5 = createAdder(5);
console.log(add5(3));