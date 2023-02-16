function solution(s) {
    let answer = [];
    
    let sArr = s.split("");
    
    sArr.forEach((a) => {
        if(s.indexOf(a) === s.lastIndexOf(a)){
            answer.push(a);
        }
    })
    
    return answer.sort().join("");
}