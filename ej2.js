const divisores = function(n)
{
    let result=[];
 
    for (let i=1; i<=n; i++) {
        if (n%i==0) {
            result.push(i);
            
        }
    }

    result.sort((a,b)=>a-b);
    var set = new Set(result);
    return set;
};

console.log(divisores(110));
console.log(divisores(10));
console.log(divisores(5));
console.log(divisores(27));
console.log(divisores(16));