var largestOddNumber = function (num) {
  let i = num.length - 1;
  while (i >= 0) {
    if (num[i] % 2 != 0) return num.slice(0, i + 1);
    i--;
  }
  return "";
};
//TC=O(n);
//SC=O(1)
