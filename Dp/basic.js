// Fibonacci series

// 0(n) O(n)
/**
function fibanacciSeries(n, memo = {}) {
  if (n == 0) return 0;
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];

  memo[n] = fibanacciSeries(n - 1, memo) + fibanacciSeries(n - 2, memo);

  return memo[n];
}
// O(n) O(n)
function fibanacciSeries(n) {
  let dp = Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
*/

function fibanacciSeries(n) {
  if (n == 0) return 0;
  let prev = 1;
  let sPrev = 1;
  for (let i = 3; i <= n; i++) {
    let temp = prev;
    prev = prev + sPrev;
    sPrev = temp;
  }
  return prev;
}
console.log(fibanacciSeries(0));
