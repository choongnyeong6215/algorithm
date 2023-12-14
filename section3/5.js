function solution(words) {
    let answer = "";
    let repeatCnt = 1;
    let wordsArr = words.split("");

    for(let i = 0; i < wordsArr.length; i++) {
        if(wordsArr[i] === wordsArr[i+1]) {
            repeatCnt++;
        }
        else {
            answer += wordsArr[i];

            if(repeatCnt > 1) {
                answer += repeatCnt.toString();
            }
            
            // 중복 체크 값 초기화
            repeatCnt = 1;
        }
    }
    return answer;
}


// test case
console.log(solution("KKHSSSSSSSE"));
console.log(solution("GGGOOd!!!"));