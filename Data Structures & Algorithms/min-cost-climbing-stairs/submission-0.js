class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let nextNext = 0 
        let next = cost[cost.length-1]

        for(let i = cost.length-2;i>=0;i--){
            let cur = Math.min(next,nextNext) + cost[i]
            nextNext = next
            next= cur
        }
        return Math.min(next,nextNext)
    }
}
