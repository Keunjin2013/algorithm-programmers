function solution(s) {
    var result = s.split(" ");
    
    var answer = [];
    
    for(var i = 0; i < result.length; i++){
        if(result[i] === "Z"){
            answer.pop();
            
            continue;
        }
        
        answer.push(result[i]);
    }
    
    var sum = answer.reduce((acc, cur) => {
        return acc + Number(cur);
    }, 0);
    
    return sum; 
}