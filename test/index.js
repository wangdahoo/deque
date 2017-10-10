const Deque = require('../lib/Deque')
const DequeIterator = require('../lib/DequeIterator')

function print (deque) {
  while (deque.length) {
    console.log(deque.shift() + '\t')
  }
}

describe('module', () => {
  describe('Deque', () => {
    it('Deque() should success', () => {
      const deque = new Deque()
      deque.push(3.14)
      deque.push('hello')
      deque.push(false)

      const dequeIt = new DequeIterator(deque)

      let next = { done: false }
      while (!next.done) {
        next = dequeIt.next()
        console.log(next.value)
      }
    })
  })
})
