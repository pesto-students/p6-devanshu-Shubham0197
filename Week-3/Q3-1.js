//Reducer method
function add(...args){
  let sum = 0;
  args.forEach((num) => {
      sum += num;
  })
  return sum;
}
function memoize(fn){
const cache= new Map();
return function(...args){
  const key = args.toString();
  if (cache.has(key)){
    return cache.get(key);
  }
  cache.set(key,fn(...args));
  return cache.get(key);
};
}

const memoizeAdd = memoize(add);
console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,200,300));
memoizeAdd(100.,200);