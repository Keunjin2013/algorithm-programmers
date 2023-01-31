function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    var mo = denom1 * denom2
    var ja = (numer1 * denom2) + (numer2 * denom1)
    
    var max = Math.max(mo, ja);
    var min = Math.min(mo, ja);
    
    while(min!=0) {
        var a = max%min;
        max = min;
        min = a;
    }
    
    answer[0] = mo/max;
    answer[1] = ja/max;
    
    return answer;
    
    //다시풀어야하는문제
}