let nums = [1, 5, 3, 67, 8, 9, 0, 32];

let arr = [];

for (let i = 0; i<nums.length; i++){
  if (nums[i] > 5) {
  arr.push(nums[i]);
    }
}
console.log(arr);