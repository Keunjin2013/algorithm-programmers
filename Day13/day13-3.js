function solution(my_string) {
    const result = my_string.split("");

    const answer = Array.from(new Set(result));

    return answer.join("");
}