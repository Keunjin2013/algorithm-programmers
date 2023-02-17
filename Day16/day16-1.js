function solution(array, n) {
    var answer = [];
    
    for(var i=0; i<array.length; i++) {
        answer.push(Math.abs(array[i]-n));
    }
        
    var min = Math.min(...answer);
        
    var result = [];
        
    for(let index = 0; index < answer.length; index++){
        if(answer[index] === min){
            result.push(array[index]);
            }
    }
    return Math.min(...result);
}