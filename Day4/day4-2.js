//commit 메세지 수정
function solution(n) {
    return n % 7 === 0 ? n / 7 : Math.floor(n / 7 )+1 ;
}