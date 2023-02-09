function solution(my_string) {
    var answer = [];
    const regex = /[^0-9]/g;
    var result = my_string.replace(regex, "");
    
    for(var i=0; i<result.length; i++) {
        answer.push(result[i]);
        
    }
    return answer.sort((a,b) => a - b).map((i) => Number(i));
}