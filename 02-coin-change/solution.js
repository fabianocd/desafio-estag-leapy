const fs = require("fs");

const input = fs.readFileSync(0, "utf8");
const { coins, amount } = JSON.parse(input);

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

const result = { minCoins: coinChange(coins, amount) };
console.log(JSON.stringify(result));
