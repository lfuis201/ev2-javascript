const factorial = function(n)
{
    if (n === 0) {
        return 1;
    };

    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    };
    
    return fact;
};

const factorialrecursivo = function(n)
{
    if (n === 0) {
        return 1;
    }else{
        return n * factorialrecursivo(n - 1);
    }
};

console.log("factoriales: ");
console.log(factorial(5));
console.log(factorial(7));

console.log(factorialrecursivo(7));