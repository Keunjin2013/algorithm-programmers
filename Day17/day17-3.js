function solution(my_string) {
    let array = my_string.split(' ')
    let result = array[0] * 1;
    for(let i = 1; i< array.length; i++){
        if(array[i] === '+')
            result += array[i+1] * 1;
        else if(array[i] === '-')
            result -= array[i+1] * 1;
        else
            continue;
    }
    return result;
}