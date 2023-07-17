// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

function solution(data) {
   let max = -1;
   let answer = '';

   for (let i = 0; i < data.length; i++) {
      if (max < data[i].length) {
         max = data[i].length;
         answer = data[i];
      }
   }
   return answer;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
