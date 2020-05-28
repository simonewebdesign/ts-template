import { strict as assert } from 'assert';

function Foo(str: string): string {
  return str
    .split('')
    .map(c => isLetter(c) ? String.fromCharCode(c.charCodeAt(0) + 1) : c)
    .map(c => /[aeiou]/i.test(c) ? c.toUpperCase() : c)
    .join('')
}

function isLetter(str: string): boolean {
  return /[a-z]/i.test(str);
}

const input1 = "hello*3";
const expected1 = "Ifmmp*3";
console.log('\u001b[' + 32 + 'm' + '### EVALUATING input1 ###' + '\u001b[0m')
console.log("Input:", input1);
console.log("Output:", Foo(input1));
assert.deepStrictEqual(Foo(input1), expected1);

const input2 = "fun times!";
const expected2 = "gvO Ujnft!";
console.log('\u001b[' + 32 + 'm' + '### EVALUATING input2 ###' + '\u001b[0m')
console.log("Input:", input2);
console.log("Output:", Foo(input2));
assert.deepStrictEqual(Foo(input2), expected2);
