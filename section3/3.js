function solution(words) {
    let answer = 0;

    for(let item of words) {
        if(/[0-9]/.test(item)) {
            answer += item;
        }
    }
    return Number(answer);
}


// test case
console.log(solution("g0en2T0s8eSoft"));
console.log(solution("h1e2l3l4o5!0"));