//commit 메세지 수정
function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0] * numbers[1];
}