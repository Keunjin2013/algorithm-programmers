//commit 메세지 수정
function solution(my_string) {

    let result = ""
    for (i=0;i<my_string.length;i++) {
        if(my_string[i] === my_string[i].toUpperCase()) {
            result += my_string[i].toLowerCase() 
        }
        else if(my_string[i] === my_string[i].toLowerCase()) {
            result += my_string[i].toUpperCase()
        }
    }
    return result;
    
}