const removeDuplicates = (nums: number[]): number => {
    const _nums = nums
    for (let i = 0; i < nums.length; i++) {
        if(_nums[i] === _nums[i + 1]){
            _nums.splice(i, 1)
            i = 0
        }
    }

    return _nums.length
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))