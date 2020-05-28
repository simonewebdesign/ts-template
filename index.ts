import { strict as assert } from 'assert';

function Foo(str: string): string {
  return str.toUpperCase();
}


const input1 = "test input 123";
const expected1 = "TEST INPUT 123";
console.log('\u001b[' + 32 + 'm' + '### EVALUATING INPUT1 ###' + '\u001b[0m')
console.log("Output:", Foo(input1));
assert.deepStrictEqual(expected1, Foo(input1));
