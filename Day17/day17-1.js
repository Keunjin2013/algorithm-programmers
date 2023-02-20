function solution(my_str, n) {
    var my_strArr = my_str.split("");
    var answer = [];
    
    while(my_strArr.length > 0) {
        answer.push(my_strArr.splice(0,n).join(""))
    }
    return answer;
}