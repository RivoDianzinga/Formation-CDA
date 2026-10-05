// JavaScript
function fibonacci(n) { // fibonacci récursive naive
    if (n <= 0) return 0;    // cas de base 1
    if (n === 1) return 1;   // cas de base 2
    // console.log(`Compteur ${n}`);
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemo(n, memo = {}) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (memo[n] !== undefined) return memo[n]; // Deja calcule ? On retourne le cache

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

n = 50;
console.log(fibonacciMemo(n));
console.log(fibonacci(n));