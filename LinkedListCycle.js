/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (head == null) {
        return false
    }

    let nodesSeen = new Set();
    
    while (head.next !== null) {
        if (nodesSeen.has(head)) {
            return true
        }
        else {
            nodesSeen.add(head)
            head = head.next
        }
    }
        
    return false
};