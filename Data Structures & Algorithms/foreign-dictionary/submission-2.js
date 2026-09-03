class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adj = {}
        for(let word of words){
            for(let c of word){
                if(!adj[c]){
                    adj[c]= new Set()
                }
            }
        }
        for(let i =0;i<words.length-1;i++){
            let w1 = words[i]
            let w2 = words[i+1]
            let min = Math.min(w1.length,w2.length)
            if(w1.length>w2.length && w1.startsWith(w2)) return ""// invalid not sorted
            for(let j=0;j<min;j++){
                if(w1[j]!==w2[j]){
                    adj[w1[j]].add(w2[j])
                    break;
                }
            }

        }
        let visited={}
        let result = []
        for(let c in adj){
            if(dfs(c)) return ""
        }
        function dfs(c){
           if (visited[c] === true) return true   // 🔴 cycle
            if (visited[c] === false) return false // already processed     
            visited[c] = true
            for(let nc of adj[c]){
                if(dfs(nc)) return true
            }
            visited[c] = false
            result.push(c)
            return false
        }
        return result.reverse().join("")
    }
}
