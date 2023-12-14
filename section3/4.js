function solution(s, t) {
    let answer = [];
    let dist = 1000;

    // → 방향 체크
    for(let item of s) {
        if(item === t) {
            dist = 0;
            answer.push(dist);
        }
        else {
            dist++;
            answer.push(dist);
        }
    }

    // 거리 초기화
    dist = 1000;

    // ← 방향 체크
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === t) {
            dist = 0;
        }
        else {
            dist++;

            answer[i] = Math.min(answer[i], dist);
        }
    }
    return answer;
}


// test case
console.log(solution("teachermode", "e"));