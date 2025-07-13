function reverseString(s) {
    let n = s.length;
    for (let i = 0; i < n / 2; i++) {
        [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]]//swap values;
    }
    return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))