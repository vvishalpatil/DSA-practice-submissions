class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adjList = {}
        for(let [u,v] of edges){
            if(adjList[u]==undefined){
                adjList[u] = new Array()
            }
            if(adjList[v]==undefined){
                adjList[v] = new Array()
            }
            adjList[u].push(v)
            adjList[v].push(u)
        }

        let visited = new Set()
        let result = dfs(-1,0)
        if(visited.size!==n){
            return false
        }
        return result 
        function dfs(prev, cur){
            if(visited.has(cur)){
                return false
            }
            visited.add(cur)
            for(let next of (adjList[cur]||[])){
                if(next==prev){
                    continue
                }
                if(!dfs(cur,next)){
                    return false
                }
            }
            return true
        }
    }
}
