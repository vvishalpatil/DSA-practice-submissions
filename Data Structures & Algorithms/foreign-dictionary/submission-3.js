class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adjList = new Map()
        let visiting = new Map()
        let res = []
        for(let word of words){
            for(let c of word){
                if(!adjList.has(c)){
                    adjList.set(c,new Set())
                }
            }
        }

        for(let i = 0;i<words.length-1;i++){
            let word1 = words[i]
            let word2 = words[i+1]
            let minLength = Math.min(word1.length,word2.length)
            if(word1.length >word2.length && word1.slice(0,minLength) == word2.slice(0,minLength)){
                return ""
            }
            for(let j =0;j<minLength;j++){
                if(word1[j]!==word2[j]){
                    let set = adjList.get(word1[j])
                    set.add(word2[j])
                    adjList.set(word1[j],set)
                    break
                }
            }
        }

        for(let c of adjList.keys()){
            if(dfs(c)){
                return ""
            }
        }
        return res.reverse().join("")

        function dfs(c){
            if(visiting.has(c)){
                return visiting.get(c)
            }
            visiting.set(c,true)
            for(let next of adjList.get(c)){
                if(dfs(next)){
                    return true
                }
            }
            visiting.set(c,false)
            res.push(c)
            return visiting.get(c)
        }
    }
}
