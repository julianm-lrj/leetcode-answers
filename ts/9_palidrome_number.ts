const isPalidrome = (x: number): boolean => {
    if (x === Number(x.toString().split('').reverse().join(''))) {
    return true
    } else {
        return false    
    }
}

console.log(isPalidrome(121))