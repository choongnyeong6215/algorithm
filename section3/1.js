function solution(words) {
    let answer = "";
    let wordsArr = words.toLowerCase().split("");
    let revWordsArr = [...wordsArr].reverse();

    for(let i = 0; i < wordsArr.length; i++) {
        if(wordsArr[i] === revWordsArr[i]) {
            answer = "YES";
        }
        else {
            answer = "NO";
        }
    }
    return answer;
}


// test case
console.log(solution("gooG"));
console.log(solution("hallo"));