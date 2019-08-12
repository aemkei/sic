
const ONE = {
  binary: '',
  code: ''
};

const TWO = new Proxy(ONE, {
  get: function(target, name) {
    ONE.binary += +!name;
    if (ONE.binary.length == 7){
      if (!+ONE.binary) {
        console.log(ONE.code);
        eval(ONE.code);
      }
      ONE.code += String.fromCharCode(parseInt(ONE.binary, 2));
      ONE.binary = '';
    }
    return TWO;
  }
});

Array.prototype[[][[]]] = TWO;

[][[][[]]]
[[]][[]][[][[]]][[][[]]][[][[]]][[][[]]][[]]
[[]][[]][[][[]]][[]][[]][[][[]]][[][[]]]
[[]][[]][[][[]]][[][[]]][[]][[][[]]][[]]
[[]][[]][[]][[][[]]][[][[]]][[]][[][[]]]
[[]][[]][[]][[][[]]][[]][[][[]]][[][[]]]
[[][[]]][[]][[][[]]][[]][[][[]]][[][[]]][[][[]]]
[[][[]]][[]][[]][[][[]]][[][[]]][[][[]]][[]]
[[][[]]][[]][[][[]]][[]][[][[]]][[][[]]][[]]
[[][[]]][[][[]]][[][[]]][[][[]]][[][[]]][[][[]]][[][[]]]

console.log(x);

function convert(code) {
  return (code + String.fromCharCode(0)) .split('').map(c => c
    .charCodeAt(0)
    .toString(2)
    .padStart(7, 0)
    .replace(/0/g, '[[][[]]]')
    .replace(/1/g, '[[]]')
  ).join('\n')
}