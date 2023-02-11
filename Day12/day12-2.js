function solution(n) {
    var answer = [];
    for(var i=0; i<=10000; i++) {
        if(n%i===0) {
           answer.push(i); 
        }
    }
        answer.sort((a,b)=>a-b);
    return answer;
}