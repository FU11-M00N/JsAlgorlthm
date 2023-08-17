// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
// 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
// 이들 중 홀수는 77, 41, 53, 85이므로 그 합은
// 77 + 41 + 53 + 85 = 256 이 되고,
// 41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.

// ---------- 풀이 02 ---------
function solution(data) {
   let sum = 0;
   let min = Number.MAX_SAFE_INTEGER;
   data.forEach(element => {
      if (element % 2 !== 0) {
         sum += element;
         if (min > element) {
            min = element;
         }
      }
   });
   return [sum, min];
}
const answer = solution([12, 77, 38, 41, 53, 92, 85]);
console.log(answer.join('\n'));

// ---------- 풀이 01 ---------

// function solution(data) {
//    let oddData = [];
//    let min,
//       sum = 0;
//    for (let i = 0; i < data.length; i++) {
//       if (data[i] % 2 !== 0) {
//          oddData.push(data[i]);

//       }
//    }
//    min = oddData[0];

//    for (let i = 0; i < oddData.length; i++) {
//       sum += oddData[i];
//       if (min > oddData[i + 1]) {
//          min = oddData[i + 1];
//       }
//    }
//    return [sum, min];
// }

// const answer = solution([12, 77, 38, 41, 53, 92, 85]);
// console.log(answer.join('\n'));
// const [sum, min] = solution([12, 77, 38, 41, 53, 92, 85]);
// console.log(sum);
// console.log(min);

// ---------- 풀이 01 ---------
