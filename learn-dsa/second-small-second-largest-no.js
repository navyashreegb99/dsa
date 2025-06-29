//find second largest element in array
/* 
corner cases:
if the array length is lessthan 2 return null
if all array elements are equal return -1
if array is empty, arr has 1 elem, arr has 2 elem
if array contains -ve nos */

function findSecLargestNo(arr) {
  if (arr.length < 2) return null;
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (
      arr[i] > thirdLargest &&
      arr[i] != firstLargest &&
      arr[i] != secondLargest
    ) {
      thirdLargest = arr[i];
    }
  }
  if (secondLargest === -Infinity) return "-1";
  return secondLargest;
}

console.log(findSecLargestNo([4, 9, 0, 2, 8, 7, 1])); //array has different ele(o/p :8)
console.log(findSecLargestNo([4])); //array has 1 ele(o/p:null)
console.log(findSecLargestNo([4, 4, 4, 4, 4])); //array has same elements(o/p:-1)
console.log(findSecLargestNo([4, 4, 3])); //array has duplicates(o/p:3)

console.log("-----------------------------------");

//second smallest element in array

function findSecondSmallest(arr) {
  if (arr.length < 2) return null;
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] != firstSmallest) {
      secondSmallest = arr[i];
    }
  }
  if (secondSmallest === Infinity) return -1;
  return secondSmallest;
}

console.log(findSecondSmallest([4, 9, 0, 2, 8, 7, 1])); //array has different ele(o/p :1)
console.log(findSecondSmallest([4])); //array has 1 ele(o/p:null)
console.log(findSecondSmallest([4, 4, 4, 4, 4])); //array has same elements(o/p:-1)
console.log(findSecondSmallest([4, 4, 3])); //array has duplicates(o/p:3)
