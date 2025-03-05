const strStr = (haystack:string, needle: string) : number => {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i).startsWith(needle)){
            return i
        }
    }
    return -1
}

console.log(strStr("leetcode", "leeto"))