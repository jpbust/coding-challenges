/*

Inputs:
  -Array of integer nums [1,2,3,4,5], sorted ascending
  -integer target

output: index of target or -1 if doesnt exist


desire time complexity: O(log n)


*/

const arrayLook = [1,2,3,4,5,6,7,8];
const target = 1;

var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((high+low)/2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid -1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};


console.log(search(arrayLook, target));