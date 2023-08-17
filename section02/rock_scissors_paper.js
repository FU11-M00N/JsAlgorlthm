// A, B 두 사람이 가위바위보 게임을 합니다.
// 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

function solution(cnt, Adata, Bdata) {
   const answer = [];

   for (let i = 0; i < cnt; i++) {
      console.log(Adata[i]);
      if (Adata[i] === 1) {
         if (Bdata[i] === 1) {
            answer.push('D');
         } else if (Bdata[i] === 2) {
            answer.push('B');
         } else if (Bdata[i] === 3) {
            answer.push('A');
         }
      }
      if (Adata[i] === 2) {
         if (Bdata[i] === 1) {
            answer.push('A');
         } else if (Bdata[i] === 2) {
            answer.push('D');
         } else if (Bdata[i] === 3) {
            answer.push('B');
         }
      }
      if (Adata[i] === 3) {
         if (Bdata[i] === 1) {
            answer.push('B');
         } else if (Bdata[i] === 2) {
            answer.push('A');
         } else if (Bdata[i] === 3) {
            answer.push('D');
         }
      }
   }
   return answer;
}

const data1 = [2, 3, 3, 1, 3];
const data2 = [1, 1, 2, 2, 3];

console.log(solution(5, data1, data2));
