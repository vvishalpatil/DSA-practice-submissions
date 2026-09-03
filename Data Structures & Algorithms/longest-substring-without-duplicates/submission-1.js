class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0
        let map = {}
        let start = 0
        if(s.length<=1){
            return s.length
        }
        for(let i = 0;i<s.length;i++){
            let ch = s[i]
            let count = i-start
            if(map[ch]!==undefined){
                start = map[ch]
            }
            map[ch]=i
            max = Math.max(max,i-start)

        }
        return max
    }
}
