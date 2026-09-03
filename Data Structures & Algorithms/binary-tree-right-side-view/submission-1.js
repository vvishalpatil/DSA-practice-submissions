/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let res = new Array()
        let queue = new Array()
        if(!root){
            return []
        }
        queue.push(root)
        while(queue.length){
            let size = queue.length
            for(let i = 0;i<size;i++){
                let cur = queue.shift()
                if(i==size-1){
                    res.push(cur.val)
                }
                if(cur.left){
                    queue.push(cur.left)
                }
                if(cur.right){
                    queue.push(cur.right)
                }
            }
        }
        return res
    }
}
