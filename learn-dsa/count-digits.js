function countNoOfDigits(n)
{
    if (n == 0) return 1;
    let count = 0;
    n= Math.abs(n)
    while (n>0)
    {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countNoOfDigits(123456789))
console.log(countNoOfDigits(-123456789))
console.log(countNoOfDigits(0))


 