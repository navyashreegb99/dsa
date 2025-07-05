function reverseNo(n) {
    let reverse = 0;
    let temp = Math.abs(n);
    while (temp > 0) {
        reverse = (reverse * 10) + temp % 10;
        temp = Math.floor(temp / 10);
    }
    let limit = Math.pow(2, 31);//limit=2**31;
    if (reverse < -limit || reverse > limit) return 0;
    return (n < 0) ? reverse * -1 : reverse;
}

console.log(reverseNo(12321))
console.log(reverseNo(-12321))
console.log(reverseNo(0))
console.log(reverseNo(10))