function solution(array) {
    var answer = [];
    var result = Math.max(...array);
    for (var i=0; i<array.length; i++) {
        if (result === array[i])
        answer = [result, i]
    }
    return answer;
}