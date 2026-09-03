/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = intervals.map(interval=>interval.start).sort((a,b)=>a-b)
        let end = intervals.map(interval=>interval.end).sort((a,b)=>a-b)
        let s=0,e=0,count=0
        let res = 0
        while(s<start.length){
            if(start[s]<end[e]){
                s+=1
                count+=1
            }else{
                e+=1
                count-=1
            }
            res = Math.max(count,res)

        }
        return res
    }
}
