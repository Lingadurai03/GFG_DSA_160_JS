// Directed Graph Cycle
// Difficulty: MediumAccuracy: 27.88%Submissions: 472K+Points: 4
// Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
// The graph is represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge from verticex u to v.

// Examples:

// Input: V = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 0], [2, 3]]

// Output: true
// Explanation: The diagram clearly shows a cycle 0 → 2 → 0
// Input: V = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 3]

// Output: false
// Explanation: no cycle in the graph
// Constraints:
// 1 ≤ V, E ≤ 105

// Expected Complexities
// Company Tags
// FlipkartAmazonMicrosoftSamsungMakeMyTripOracleGoldman SachsAdobeBankBazaarRockstand

function solution(V, edges) {
  let adj = Array.from({ length: V }, () => []);

  for (let [u, v] of edges) {
    adj[u].push(v);
  }

  let vArr = Array(V).fill(0);
  let pArr = Array(V).fill(0);

  for (let i = 0; i < V; i++) {
    if (!vArr[i]) {
      if (dfs(i, vArr, pArr, adj)) return true;
    }
  }
  return false;
}
function dfs(node, vArr, pArr, adj) {
  vArr[node] = 1;
  pArr[node] = 1;

  for (let adjNode of adj[node]) {
    if (!vArr[adjNode]) {
      if (dfs(adjNode, vArr, pArr, adj)) return true;
    } else if (vArr[adjNode] && pArr[adjNode]) {
      return true;
    }
  }
  pArr[node] = 0;
  return false;
}
console.log(
  solution(4, [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 0],
    [2, 3],
  ]),
);
