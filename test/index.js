const assert = require('assert')
const Deque = require('../')

describe('module', () => {
  describe('Deque', () => {
    it('Deque() should success', () => {
      const deque = new Deque([3.14, 'hello', false])
      const dequeIt = deque.iterator()

      let next = dequeIt.next()
      while (!next.done) {
        console.log(next.value)
        next = dequeIt.next()
      }

      deque.shift()
      deque.push(200)

      console.log(deque.values())
      console.log(deque.nodes())

      assert.equal(deque.head.data, 'hello', '头元素错误')
      assert.equal(deque.tail.data, 200, '尾元素错误')
    })
  })
})

describe('module', () => {
  describe('Deque operations should success', () => {
    it('Deque() should success', () => {
      let deque = new Deque()
      let e
      console.log(deque.nodes(), deque.head, deque.tail)
      
      deque.push(1)
      console.log(deque.nodes(), deque.head, deque.tail)
      e = deque.shift()
      console.log(deque.nodes(), deque.head, deque.tail)

      deque.unshift(2)
      console.log(deque.nodes(), deque.head, deque.tail)
      e = deque.pop()
      console.log(deque.nodes(), deque.head, deque.tail)
    })
  })
})