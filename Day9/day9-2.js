//commit 메세지 수정
function solution(my_string) {
    const str = 'aeiou'
    
    let newString = my_string.split('')
    
    for(let i = 0; i<str.length; i++){
        for(let j = 0; j<my_string.length; j++){
            if(newString.includes(str[i])){
            newString.splice(newString.indexOf(str[i]), 1)
            } 
        }  
    }
    
    return newString.join('');
}