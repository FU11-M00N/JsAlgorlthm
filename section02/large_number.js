// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)

function solution(data) {
   const answer = [];
   answer.push(data[0]);
   for (let i = 0; i < data.length; i++) {
      if (data[i] < data[i + 1]) {
         answer.push(data[i + 1]);
      }
   }
   return answer;
}

const data = [7, 3, 9, 5, 6, 12];

console.log(solution(data));
