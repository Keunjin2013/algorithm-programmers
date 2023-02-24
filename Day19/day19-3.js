function solution(a, b) {
    var answer = 0;
    var G = 1;
    for (let i = 1; i<= b; i++) {
        if(a%i ===0 && b%i ===0) G = i;
    }
    
    b = b/G    

    while (b%2 === 0){
        b = b/2
    }
    while (b%5 === 0){
        b = b/5
    }
    
    if (b===1) {
        answer = 1;
    }
    else {
        answer = 2;
    }
    return answer
}