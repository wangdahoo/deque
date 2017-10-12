# Double-ended Queue

> 简单的双向队列实现

### Install

```bash
$ yarn simple-deque
```

### How to Use

```js
const Deque = require('simple-deque')
const deque = new Deque([3.14, 'hello, deque.', false])
const it = deque.iterator()
let next = it.next()
while (!next.done) {
  next = it.next()
  console.log(next.value)
}
```

### API

- `unshift(obj)` - insert from the head
- `shift()` - delete from the head
- `push(obj)` - insert from the tail
- `pop()` - delete from the tail 
- `values()` - return all data values in array
- `nodes()` - return all nodes in array 
