class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let visited = {}
        let count=0;
        let adj = {}
        for( let i =0;i<n;i++){
            adj[i] = []
        }
        for(let [u,v] of edges){
            adj[u].push(v)
            adj[v].push(u)
        }
        for(let i =0;i<n;i++){
            if(!visited[i]){
                dfs(i,-1)
                count++
            }
        }
        return count
        function dfs(node,parent){
            if(visited[node]) return 

            visited[node] = true
            for(let i =0;i<adj[node].length;i++){
                let next = adj[node][i]
                if(next!==parent){
                    dfs(next,node)
                }
            }
        }
    }
}
