function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    
    for(var i = max-min+1 ; i <= max ; i ++) {
        answer++;
    }
    
    for(var i = max+1 ; i < max+min ; i ++) {
        answer++;
    }
    return answer;
}