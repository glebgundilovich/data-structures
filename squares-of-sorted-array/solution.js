/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;
    let square;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            square = nums[right];
            right--;
        } else {
            square = nums[left];
            left++;
        }

        result[i] = Math.pow(square, 2);
    }

    return result;
};