const Deque = require('../')

describe('module', () => {
  describe('Deque', () => {
    it('Deque() should success', () => {
      const deque = new Deque()
      deque.push(3.14)
      deque.push('hello')
      deque.push(false)

      const dequeIt = deque.iterator()

      let next = { done: false }
      while (!next.done) {
        next = dequeIt.next()
        console.log(next.value)
      }
    })
  })
})
