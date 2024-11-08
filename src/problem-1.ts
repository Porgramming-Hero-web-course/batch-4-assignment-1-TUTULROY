function sumArray (numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([10, 23, 30, 47, 50]));