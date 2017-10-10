class Deque {
  /**
   * 双向队列
   */

  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * 头部插入
   * @param {Object} node 
   */
  unshift (node) {
    if (this.length === 0) {
      node.prev = null
      node.next = null

      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.prev = null
      node.next = this.head
      
      this.head = node
    }

    this.length++
  }

  /**
   * 尾部插入
   * @param {Object} node
   */
  push (node) {
    if (this.length === 0) {
      node.prev = null
      node.next = null

      this.head = node
      this.tail = node
    } else {
      this.tail.next = node

      node.prev = this.tail
      node.next = null

      this.tail = node
    }

    this.length++
  }

  /**
   * 头部删除
   * @return {Object} node data 
   */
  shift () {
    if (this.length === 0) return null
    
    let _head = this.head
    this.head = _head.next
    this.head.prev = null
    return _head.data
  }

  /**
   * 尾部删除
   * @return {Object} node data 
   */
  pop () {
    if (this.length === 0) return null
    
    let _tail = this.tail
    this.tail = _tail.prev
    this.tail.next = null
    return _tail.data
  }
}

module.exports = Deque
