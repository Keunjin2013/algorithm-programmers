function solution(id_pw, db) {
    let answer = "";
    db.forEach((([id,pw]) => {
        if(id_pw[0] === id){
            if(id_pw[1] === pw){
                answer = "login";
            }else{
                answer = "wrong pw";
            }
        }
    }))
    return answer ? answer : "fail";
}