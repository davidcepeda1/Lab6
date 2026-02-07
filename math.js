/**
 * Calcula el factorial de un número de forma recursiva.
 * @param {number} n 
 * @returns {number}
 */
function factorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

/**
 * Calcula el n-ésimo número de la secuencia de Fibonacci.
 * @param {number} n 
 * @returns {number}
 */
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exportación de funciones para pruebas unitarias
module.exports = { factorial, fibonacci };