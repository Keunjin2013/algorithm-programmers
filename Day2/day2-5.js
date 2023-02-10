//commit 메세지 수정
function solution(array) {

    const mid_num = Math.floor(array.length / 2);
  
  
    const jjin_array = array.sort((a, b) => a - b);
  
    return jjin_array[mid_num];
  }