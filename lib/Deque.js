const DequeNode = require('./DequeNode')
const DequeIterator = require('./DequeIterator')

class Deque {
  /**
   * 双向队列
   */
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0

    if (Array.isArray(arguments[0])) {
      let raw = arguments[0]
      for (let i = 0; i < raw.length; i++) {
        this.push(raw[i])
      }
    }
  }

  /**
   * 头部插入
   * @param {Object} data 
   */
  unshift (data) {
    let node = new DequeNode(data)

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
   * @param {Object} data
   */
  push (data) {
    let node = new DequeNode(data)

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
   * @return {Object} data 
   */
  shift () {
    if (this.length === 0) return null
    
    let _head = this.head
    this.head = _head.next
    this.head.prev = null

    this.length--

    return _head.data
  }

  /**
   * 尾部删除
   * @return {Object} data 
   */
  pop () {
    if (this.length === 0) return null
    
    let _tail = this.tail
    this.tail = _tail.prev
    this.tail.next = null

    this.length--

    return _tail.data
  }

  iterator () {
    return new DequeIterator(this)
  }

  nodes () {
    let nodes = []
    let it = this.iterator()
    let next = it.next()
    while (!next.done) {
      nodes.push(next.node)
      next = it.next()
    }

    return nodes
  }

  values () {
    let values = []
    let it = this.iterator()
    let next = it.next()
    while (!next.done) {
      values.push(next.value)
      next = it.next()
    }

    return values
  }
}

module.exports = Deque
