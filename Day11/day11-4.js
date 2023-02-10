function solution(numbers) {
    var answer = [];
    for(var i=0; i<numbers.length; i++) {
        for(var j=0; j<numbers.length; j++) {
            if(i !== j) {
                answer.push(numbers[i] * numbers[j]);
            }
        }
    }
    return Math.max(...answer);;
}