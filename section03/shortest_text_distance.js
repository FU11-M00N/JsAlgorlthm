// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

function solution(data) {
   const [s, t] = data.split(' ');
   let p = 1000;
   answer = [];

   for (let i = 0; i < s.length; i++) {
      if (s[i] === t) {
         p = 0;

         answer.push(p);
      } else {
         p++;
         answer.push(p);
      }
   }

   for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === t) {
         p = 0;
         answer[i] = p;
      } else {
         p++;
         answer[i] = Math.min(answer[i], p);
      }
   }
   return answer;
}

console.log(solution('teachermode e'));
