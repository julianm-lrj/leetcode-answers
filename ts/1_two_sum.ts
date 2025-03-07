const twoSum = (nums: number[], target: number): number[] | undefined => {
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)!]
        }
    }
}

console.log(twoSum([2,7,11,15], 9))