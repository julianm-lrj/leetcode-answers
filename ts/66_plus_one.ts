const plusOne = (digits: number[]): number[] => {
    let num = BigInt(digits.join(''));
    num++;
    return num.toString().split('').map(Number);
}