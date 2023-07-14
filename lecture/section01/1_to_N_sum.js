// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

function solution(num) {
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum = sum + i;
   }
   return sum;
}
console.log(solution(6));
console.log(solution(10));
