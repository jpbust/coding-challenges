

var searchInsert = function(nums, target) {
  let low = 0
  let high = nums.length-1;


  while (low<high) {

    let mid = Math.floor((low+high)/2);

    if(nums[mid] === target) {
      return mid;
    } else if (nums[mid]>target) {
      //reduce high
      high = mid -1;
    } else if (nums[mid]<target) {
      //increase low
      low = mid +1;
    } else {
      return mid
    }

  }


  for (var i = 0; i<nums.length; i++) {
    if (target - nums[i] <= 0 ) {
      // if the number is super low
      return i
    }
  }
  // return this if the number is at the end
  return nums.length


};


let array = [1,3,5,6];
let targetNum = 7;

console.log(searchInsert(array, targetNum))