function isPalindrome(n) {
    if (n < 0) return false;
    let reverse = 0;
    let temp = n;
    while (n > 0) {
        reverse = (reverse * 10) + n % 10;
        n = Math.floor(n / 10);
    }
    return reverse === temp;
}

console.log(isPalindrome(12321))
console.log(isPalindrome(-12321))
console.log(isPalindrome(0))
console.log(isPalindrome(10))