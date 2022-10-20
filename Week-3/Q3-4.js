function createStack() {
  let item = [];

  function push(data) {
      return item.push(data);

  }
  function pop() {
      return item.pop();
  }
  return { push, pop }
}


const stack = createStack();
console.log(stack.push( 10 ));
console.log(stack.push( 5 ));
console.log(stack.pop());
console.log(stack.item);
stack.item = [10,100,1000];
console.log(stack.item);
