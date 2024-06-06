function checkforContigousArray(arr, sum) {
  let startPointer = 0; // this is a pointer to the starting index of the subarray
  let currentSum = 0; //  sum of the current window(subarray)
  for (let endPointer = 0; endPointer < arr.length; endPointer++) {
    currentSum += arr[endPointer]; // add the sum to the currentsum

    /*
     * if the sum is greater than the sum and the there is still values in the array
     * reduce the sum by the start value of the window , move the pointer to the next index,
     * then the sum will be increamented again in the for loop. untill the if condition down hold
     * */
    while (currentSum > sum && startPointer <= endPointer) {
      currentSum = currentSum - arr[startPointer];
      startPointer++;
    }

    if (currentSum === sum) {
      return true;
    }
  }
  return false;
}

//test cases
console.log(checkforContigousArray([4, 2, 7, 1, 9, 5], 17)); // true
console.log(checkforContigousArray([4, 2, 7, 1, 5], 17)); // false
