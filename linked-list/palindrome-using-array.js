var isPalindrome = function (head) {
    let curr = head;
    let arr = [];
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }

    let p1 = 0;
    let p2 = arr.length - 1;
    let middle = Math.floor(arr.length % 2)
    while (p2 > middle) {
        if (arr[p1] != arr[p2]) return false;
        p1++;
        p2--;
    }
    return true;
};