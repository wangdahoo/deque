class DequeIterator {
  constructor (deque) {
    this.deque = deque
    this.current = deque.head
  }

  next () {
    let _next
    
    if (this.current === null) {
      _next = { done: true, value: undefined }
    } else {
      _next = { done: false, value: this.current.data }
      this.current = this.current.next
    }

    return _next
  }
}

module.exports = DequeIterator
