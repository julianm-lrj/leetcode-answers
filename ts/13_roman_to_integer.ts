const romanToInt = (s: string) => {
    let total: number = 0;
    const map:{[key: string]: number} = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i+1]];
        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
}

console.log(romanToInt("MCMXCIV"))