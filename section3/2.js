function solution(words) {
    let answer = "";
    let wordsArr = words.toLowerCase().split("");

    for(let item of wordsArr) {
        if(/[0-9]/.test(item)) {
            wordsArr.splice(wordsArr.indexOf(item), 1);
        }
    }

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
console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));