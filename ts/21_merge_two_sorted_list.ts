/**
 * class ListNode {
 *  val: number
 *  next: ListNode | null
 *  constructor(cal?: number, next?: Listnode | null) {
 *   this.val = (val === undefined ? 0  : val)
 *   this.next = (next===undefined ? null : next)   
 * }
 * }
 * @param list1: ListNode | null
 * @param list2: Listnode | null
 */

type ListNode = {
    val: number,
    next: ListNode | null
}

class List {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0: val)
        this.next = (next === undefined? null: next)
    }
}

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    let a = new List(0)
    let b = a;

    while (list1 !== null && list2 !== null){
        if (list1.val < list2.val){
            b.next = list1
            list1 = list1.next
        } else {
            b.next = list2
            list2 = list2.next
        }

        b = b.next
    }
    if (list1 ! == null) { b.next = list1}
    if (list2 ! == null) { b.next = list2}

    return a.next

}