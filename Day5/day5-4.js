//commit 메세지 수정
function solution(money) {
    var answer = [parseInt(money/5500), money%5500];
    return answer;
}