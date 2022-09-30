const fibonacci = function(n) 
{ 
    //lista para los resultados
    let result=[0,1];
        //iteramos desde  2 hasta n con la formula de fibonacci
        for (let i = 2; i < n; i++) {
            result[i] = result[i - 2] + result[i - 1];
        }

        //retornamos la lista
        return result;

};

//imprimimos la serie
console.log("serie de fibonacci: ")
console.log(fibonacci(4));
