function solution(array) {
    var answer = 0;
    
    let arrayStr = array.join("");
    
    for(let i = 0; i < arrayStr.length; i++){
        if(arrayStr[i] === '7') {
            answer++;
        }
    }
    
    return answer;
}