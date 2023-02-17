function solution(my_string) {
    let answer = 0
    for(let i = 0 ; i < my_string.length;i++) {
        let result = ''
        while(!Number.isNaN(Number(my_string[i]))) {
            result+= my_string[i]
            i++
        }
        answer+= +result
    }
    return answer
}