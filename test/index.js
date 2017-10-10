const assert = require('assert')
const Deque = require('../')

describe('module', () => {
  describe('Deque', () => {
    it('Deque() should success', () => {
      const deque = new Deque([3.14, 'hello', false])
      const dequeIt = deque.iterator()

      let next = { done: false }
      while (!next.done) {
        next = dequeIt.next()
        console.log(next.value)
      }

      deque.shift()
      deque.push(200)

      assert.equal(deque.head.data, 'hello', '头元素错误')
      assert.equal(deque.tail.data, 200, '尾元素错误')
    })
  })
})
