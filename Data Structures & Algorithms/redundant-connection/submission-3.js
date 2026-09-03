class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
   
 findRedundantConnection(edges) {
    let parent = new Array(edges.length+1)
    for(let i =1;i<=edges.length;i++){
        parent[i]=i
    }
    for (let [u, v] of edges) {
    if (!union(u, v)) {
            return [u, v]
        }
    }
    function find(x){
        if(parent[x]!=x){
            parent[x] = find(parent[x])
        }
        return parent[x]
    }
    function union(x,y){
        let rootX= find(x)
        let rootY = find(y)
        if(rootX===rootY){
            return false
        }
        parent[rootX]= rootY
        return true
    }

};
}
