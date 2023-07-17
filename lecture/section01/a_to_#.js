// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

function solution(data) {
   answer = data;
   answer = data.replace(/A/g, '#');
   return answer;
}
console.log(solution('BANANA'));

// function solution(data) {
//    let answer = '';
//    for (let i = 0; i < data.length; i++) {
//       if (data[i] === 'A') {
//          answer += '#';
//       } else {
//          answer += data[i];
//       }
//    }
//    return answer;
// }
// console.log(solution('BANANA'));
