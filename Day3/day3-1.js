//commit 메세지 수정
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    var denom = denom1 * denom2
    var numer = (numer1 * denom2) + (numer2 * denom1)
    
    let a = 1
 
    for(let i = 1 ; i <= numer ; i ++) {
        if(numer%i === 0 && denom%i === 0) {
            a = i
        }
    }
    return [numer/a, denom/a]
    
}