function solution(n) {
    let result = new Set();
    for(let i = 1; i <= n; i++){
        for(let j = 2; j < i; j++){
            if(i % j === 0)
                result.add(i);
        }
    }
    return result.size;
}