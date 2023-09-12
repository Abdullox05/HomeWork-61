var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//N-1 (Median of Two Sorted Arrays)
function findMedianSortedArrays(nums1, nums2) {
    var nums = __spreadArray(__spreadArray([], nums1, true), nums2, true).sort(function (a, b) { return a - b; });
    var result = 0;
    if (nums.length % 2 === 0) {
        var left = nums[(nums.length / 2) - 1];
        var right = nums[nums.length / 2];
        result = (left + right) / 2;
    }
    else {
        result = nums[Math.floor(nums.length / 2)];
    }
    ;
    return result;
}
;
//N-2 (Pow(x, n)): Hard
/*
function myPow(x: number, n: number): number {
  if (x === 1 || x === -1 && n % 2 === 0) return 1;

  if (x === -1) return -1;

  let result: number = 1;
  const abs_n: number = Math.abs(n);
  
  for (let i: number = 0; i < abs_n; i++) result *= x;

  return n < 0 ? 1 / result : result;
};
*/
//N-2 (Pow(x, n)): Simple-1
/*
function myPow(x: number, n: number): number {
  if (x === 1 || x === -1 && n % 2 === 0) return 1;

  if (x === -1) return -1;

  return Math.pow(x, n);
};
*/
//N-2 (Pow(x, n)): Simple-2
function myPow(x, n) {
    if (x === 1 || x === -1 && n % 2 === 0)
        return 1;
    if (x === -1)
        return -1;
    return Math.pow(x, n);
}
;
//N-3 (Multiply Strings): 1
/*
function multiply(num1: string, num2: string): string {
  return String(Number(num1) * Number(num2));
};
*/
//N-3 (Multiply Strings): 2
function multiply(num1, num2) {
    return "".concat(+num1 * +num2);
}
;
