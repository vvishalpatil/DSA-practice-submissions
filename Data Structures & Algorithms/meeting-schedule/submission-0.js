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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((int1,int2)=>int1.start-int2.start)
        for(let i = 1;i<intervals.length;i++){
            if(intervals[i-1].end>intervals[i].start){
                return false
            }
        }
        return true
    }
}
