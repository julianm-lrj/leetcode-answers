const searchInsert = (nums: number[], target: number): number => {
    const index = nums.findIndex((num) => num >= target)
    return index !== -1 ? index : nums.length
}

console.log(searchInsert([1, 3, 5, 6], 7))