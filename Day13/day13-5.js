function solution(num, k) {
    const arr = Array.from(String(num)).map(Number);
    const index = arr.indexOf(k)
    return index >= 0 ? index+1 : index ;
}