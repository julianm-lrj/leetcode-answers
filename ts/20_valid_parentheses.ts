const isValid = (s: string): boolean => {
    const stack: string[] = [];
    const bracketMap: {[key: string]: string} = {')':'(', '}': '{', ']': '['}

    for (const char of s){
        if (Object.values(bracketMap).includes(char)){
            stack.push(char)
        } else if(Object.keys(bracketMap).includes(char)) {
            if (stack.length > 0 && stack[stack.length - 1] === bracketMap[char]) {
                stack.pop()
            } else {
                return false;
            }
        }
    }

    return stack.length === 0
}

console.log(isValid('()[]([{])'))