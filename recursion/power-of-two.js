//power of two

function powerOfTwo(n) {
    if (n === 2) return true;
    if (n % 2 !== 0 || n < 1) return false;
    else return powerOfTwo(n / 2);
}

console.log(powerOfTwo(1))