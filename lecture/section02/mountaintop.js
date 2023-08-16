// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다.
// 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
// 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

function solution(data) {
   const n = 5;
   let cnt = 0;
   const board = [];
   // 격자판 가장자리 0 초기화

   board.push([0, 0, 0, 0, 0, 0, 0]);
   for (let i = 0; i < 5; i++) {
      board.push([0, ...data[i], 0]);
   }
   board.push([0, 0, 0, 0, 0, 0, 0]);

   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
         if (
            board[i][j] > board[i - 1][j] &&
            board[i][j] > board[i + 1][j] &&
            board[i][j] > board[i][j - 1] &&
            board[i][j] > board[i][j + 1]
         ) {
            cnt++;
         }
      }
   }
   return cnt;
}

const data = [
   [5, 3, 7, 2, 3],
   [3, 7, 1, 6, 1],
   [7, 2, 5, 3, 4],
   [4, 3, 6, 4, 1],
   [8, 7, 3, 5, 2],
];
//        0,1
//  1,0 | 1,1 | 1,2
//        2,1
console.log(solution(data));
