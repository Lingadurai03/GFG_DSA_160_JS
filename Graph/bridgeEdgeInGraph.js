// Bridge edge in a graph
// Difficulty: MediumAccuracy: 34.61%Submissions: 72K+Points: 4
// Given an undirected graph with V vertices numbered from 0 to V-1 and E edges, represented by 2d array edges[][], where edges[i]=[u,v] represents the edge between the vertices u and v. Determine whether a specific edge between two vertices (c, d) is a bridge.

// Note:

// An edge is called a bridge if removing it increases the number of connected components of the graph.
// if there’s only one path between c and d (which is the edge itself), then that edge is a bridge.
// Examples :

// Input: V = 4, edges[][] = [[0, 1], [1, 2], [2, 3]], c = 1, d = 2

// Output: true
// Explanation: From the graph, we can clearly see that blocking the edge 1-2 will result in disconnection of the graph.
// Hence, it is a Bridge.
// Input: V = 5, edges[][] = [[0, 1], [0, 3], [1, 2], [2, 0], [3, 4]], c = 0, d = 2

// Output: false
// Explanation:

// Blocking the edge between nodes 0 and 2 won't affect the connectivity of the graph.
// So, it's not a Bridge Edge. All the Bridge Edges in the graph are marked with a green line in the above image.
// Constraints:
// 1 ≤ V, E ≤ 105
// 0 ≤ c, d ≤ V-1

class Solution {
  isBridge(V, edges, c, d) {
    // code here
    let adj = Array.from({ length: V }, () => []);
    let vArray = Array(V).fill(0);
    for (let [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    this.dfs(c, adj, c, d, vArray);
    return !vArray[d] ? 1 : 0;
  }
  dfs(node, adj, c, d, visited) {
    visited[node] = true;
    for (const neighbor of adj[node]) {
      if (
        !visited[neighbor] &&
        !((node == c && neighbor == d) || (node == d && neighbor == c))
      ) {
        this.dfs(neighbor, adj, c, d, visited);
      }
    }
  }
}
