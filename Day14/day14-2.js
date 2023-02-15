function solution(num_list, n) {
    var answer = [];
    for(var i=0; i<num_list.length;) {
        var result = [];
        for(var j=0; j<n; j++) {
            result.push(num_list[i]);
            i++;
        }
        answer.push(result)
    }
    return answer;
}