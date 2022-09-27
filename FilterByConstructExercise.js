let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr = [];

for (let i = 0; i<nums.length; i++){
  if (nums[i] > 4 && nums[i]< 10) {
  arr.push(nums[i]);
    }
}
console.log(arr);