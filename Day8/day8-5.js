//commit 메세지 수정
function solution(my_string) {
    var answer = 0;
    var regex = /[^0-9]/g;
    var result = my_string.replace(regex, "");
    for(var i=0; i<result.length; i++) {
        answer = answer + parseInt(result[i])
    }
    
    return answer;
}