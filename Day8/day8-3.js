//commit 메세지 수정
function solution(n) {
    var answer = 0;
    var result = String(n)
    for(var i=0; i<result.length; i++) {
        answer = answer + parseInt(result[i]);
    }
    return answer;
}