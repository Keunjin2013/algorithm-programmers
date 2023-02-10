function solution(age) {
    var answer = '';
    var age = age.toString();
    var age962 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
     
    for (let i=0; i<age.length; i++) {
        answer += age962[age[i]];
    }
    return answer;
}