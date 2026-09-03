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
        let count = 0
        let heap = new MyHeap()
        intervals.sort((cur,next)=>cur.start-next.start)
        for(let {start,end} of intervals){
            if(heap.size()){
                if(heap.peek().end<=start){
                    heap.remove()
                }else{
                    count++
                }
            }
            if(count==0){
                count++
            }
            heap.add({start,end})
        }
        return count
    }
}

class MyHeap {

    constructor(){
        this.heap=[]
    }

    add(item){
        this.heap.push(item)
        this.upheap(this.heap.length-1)
    }
    upheap(cur){
        let parent = Math.floor((cur-1)/2)
        if(parent>=0&& this.heap[parent].end>this.heap[cur].end ){
            [this.heap[cur],this.heap[parent]] = [this.heap[parent],this.heap[cur]]
            this.upheap(parent)
        }
    }
    peek(){
        return this.heap[0]
    }
    size(){
        return this.heap.length
    }
    remove(){
        if(this.heap.length==1){
            return this.heap.pop()
        }
        if(this.heap.length==0){
            return null
        }
        let item = this.heap[0]
        this.heap[0] = this.heap.pop() // removing the last element and pushing to front
        this.downheap(0)
    }
    downheap(cur){
        let left = cur*2+1
        let right = cur*2+2
        let min =cur
        if(left<this.heap.length && this.heap[left].end<this.heap[min].end){
            min = left
        }
        if(right<this.heap.length && this.heap[right].end<this.heap[min].end){
            min = right
        }
        if(cur!==min){
            [this.heap[cur],this.heap[min]]= [this.heap[min],this.heap[cur]]
            this.downheap(min)
        }
    }
}
