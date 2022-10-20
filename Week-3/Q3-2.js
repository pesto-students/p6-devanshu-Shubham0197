function sum(c,d){
	console.log(this.a + this.b+c+d)
  return this.a + this.b;
}

const sumB = sum.bind({a: 10, b: 20},30,40);
const sumC = sum.call({a: 10, b: 20},30,40);
args = [30,40]
const sumA = sum.apply({a: 10, b: 20},args);

console.log(sumB, sumC, sumA);
console.log(sumB == sumC);
console.log(sumA == sumC);