function solution(before, after) {
    var beforeArr = before.split('').sort().join('');
    var afterArr = after.split('').sort().join('');
    var answer = 0;
    if (beforeArr === afterArr) {
        answer = 1;
    }
    else {
        answer = 0;
    }
    return answer;
}