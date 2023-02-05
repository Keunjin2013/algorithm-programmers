function solution(my_string, letter) {
    var answer = '';
    var replace = my_string
    
    for (var i=0; i<my_string.length; i++) {
        if (my_string[i] === letter) {
            answer = my_string[i]
            replace = replace.replace(answer, '');
        }
    }
    return replace;
}