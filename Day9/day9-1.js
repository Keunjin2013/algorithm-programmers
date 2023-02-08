function solution(hp) {
    var first = parseInt(hp/5);
    var second = parseInt((hp-first*5)/3);
    var third = hp - ((first*5) + (second*3))
    var answer = first + second + third;
    
    return answer;
}