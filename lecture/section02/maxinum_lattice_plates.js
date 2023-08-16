// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

function solution(data) {
   let tmp = 0;

   let Rmax = -1;
   let Cmax = -1;
   let Ldiag = 0;
   let Rdiag = 0;
   let n = 5;

   for (let i = 0; i < data.length; i++) {
      // 왼쪽 대각선 계산
      // 0,0 1,1, 2,2 3,3 4,4
      Ldiag += data[i][i];

      // 오른쪽 대각선 계산
      // 0,4 1,3 2,2 3,1 4,0
      Rdiag += data[i][n - 1 - i];

      // 행 계산
      for (let j = 0; j < data.length; j++) {
         tmp += data[i][j];

         if (tmp > Rmax) {
            Rmax = tmp;
         }
      }
      tmp = 0;

      // 열 계산
      for (let j = 0; j < data.length; j++) {
         tmp += data[j][i];

         if (tmp > Cmax) {
            Cmax = tmp;
         }
      }
      tmp = 0;
   }

   const arr = [Rmax, Cmax, Ldiag, Rdiag];

   arr.sort(function (a, b) {
      return b - a;
   });
   return arr[0];
}

const data = [
   [10, 13, 10, 12, 15], //60
   [12, 39, 30, 23, 11], //115
   [11, 25, 50, 53, 15], // 154
   [19, 27, 29, 37, 27], // 139
   [19, 13, 30, 13, 19], //  94,
];
console.log(solution(data));
