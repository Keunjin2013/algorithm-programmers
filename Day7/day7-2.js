function solution(my_string, n) {
    var answer = [];
    var result = [];
    
    for (var i=0; i<my_string.length; i++) {
        answer.push(my_string[i].repeat(n));
    }
    return answer.join("");
}