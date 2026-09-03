class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let visited = new Set()
        let adjList = {}
        for(let i = 0 ;i<n;i++){
            adjList[i] = []
        }
        for(let [u,v] of edges){
            adjList[u].push(v)
            adjList[v].push(u)

        }
        if(!dfs(0,-1)){
            return false
        }
        return visited.size == n 
        function dfs(node,prev){
            if(visited.has(node)) return false
            visited.add(node)
            for(let i = 0;i<adjList[node].length;i++){
                let next = adjList[node][i]
                if(next!==prev){
                    if(!dfs(next,node)){ return false}
                }
            }
            return true
        }
    }
}
