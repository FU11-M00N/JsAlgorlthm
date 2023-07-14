// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution(arr) {
   let min = arr[0];

   for (let i = 0; i < arr.length; i++) {
      if (min > arr[i + 1]) {
         min = arr[i + 1];
      }
   }
   return min;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
console.log(solution([1241, 2142, 2417, 4411, 1242, 12415, 12144217]));
