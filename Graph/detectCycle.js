// Undirected Graph Cycle
// Difficulty: MediumAccuracy: 30.13%Submissions: 555K+Points: 4Average Time: 20m
// Given an undirected graph with V vertices and E edges, represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge between vertices u and v, determine whether the graph contains a cycle or not.

// Examples:

// Input: V = 4, E = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 3]]
// Output: true
// Explanation:

// 1 -> 2 -> 0 -> 1 is a cycle.
// Input: V = 4, E = 3, edges[][] = [[0, 1], [1, 2], [2, 3]]
// Output: false
// Explanation:

// No cycle in the graph.
// Constraints:
// 1 ≤ V ≤ 105
// 1 ≤ E = edges.size() ≤ 105

// Using BFS
// const solution = (vertex, mat) => {
//   let adj = Array.from({ length: vertex }, () => []);

//   for (let [u, v] of mat) {
//     adj[u].push(v);
//     adj[v].push(u);
//   }
//   let vArray = Array(vertex).fill(0);
//   for (let i = 0; i < vertex; i++) {
//     if (detectLoop(i, adj, vArray)) {
//       return true;
//     }
//   }
//   return false;
// };
// function detectLoop(src, adj, vArray) {
//   let q = [];
//   q.push({ node: src, parent: -1 });
//   vArray[src] = 1;

//   while (q.length) {
//     let { node, parent } = q.shift();

//     for (let adjNode of adj[node]) {
//       if (!vArray[adjNode]) {
//         vArray[adjNode] = 1;
//         q.push({ node: adjNode, parent: node });
//       } else if (adjNode != parent) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// Using DFS
function solution(vertex, mat) {
  let adj = Array.from({ length: vertex }, () => []);

  for (let [u, v] of mat) {
    adj[u].push(v);
    adj[v].push(u);
  }
  let vArray = Array(vertex).fill(0);
  for (let i = 0; i < vertex; i++) {
    if (detectLoop(i, adj, vArray)) {
      return true;
    }
  }
  return false;
}
function detectLoop(src, adj, vArray) {
  function recursion(src, parrent) {
    for (let neighbour of adj[src]) {
      if (!vArray[neighbour]) {
        vArray[neighbour] = 1;
        if (recursion(neighbour, src)) {
          return true;
        }
      } else if (neighbour != parrent) {
        return true;
      }
    }
    return false;
  }
  return recursion(src, -1);
}

console.log(
  solution(4, [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
  ]),
);
