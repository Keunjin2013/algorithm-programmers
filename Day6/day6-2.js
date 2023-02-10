//commit 메세지 수정
function solution(slice, n) {
    var answer = parseInt(n / slice);
    if (n % slice > 0) {
        answer++;
    }
    return answer;
}