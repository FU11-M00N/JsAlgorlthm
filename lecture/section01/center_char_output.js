// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
// 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(data) {
   let cnt = 0;
   let answer = '';
   if (data.length % 2 === 0) {
      cnt = data.length / 2;
      answer += data[cnt - 1];
      answer += data[cnt];
      return answer;
   } else {
      cnt = Math.floor(data.length / 2);
      answer = data[cnt];

      return answer;
   }
}
console.log(solution('studyd'));
