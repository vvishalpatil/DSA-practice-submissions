class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = height[0]
    let rightMax = height[height.length - 1]
    let left = 0
    let right = height.length - 1
    let total = 0
    while (left < right) {
        leftMax = Math.max(height[left], leftMax)
        rightMax = Math.max(rightMax, height[right])
        if (leftMax < rightMax) {
            if (leftMax > height[left]) {
                total += leftMax - height[left]
            }
            left++
        } else {
            if (rightMax > height[right]) {
                total += rightMax - height[right]
            }
            right--
        }
    }
    return total
    }
}
