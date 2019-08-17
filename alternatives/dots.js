function convert(code) {
  const encoded = code.split('').map(c => c
    .charCodeAt(0)
    .toString(2)
    .padStart(7, 0)
    .replace(/0/g, '._')
    .replace(/1/g, '.__')
  );
  return ['_', ... encoded, '.___'].join('\n')
}

console.log(convert('alert(1)'));

(function(){

  let code = '';
  let binary = '';

  function handle(value){
    binary += value;

    if (binary.length == 7) {
      const charCode = parseInt(binary, 2);
      code += String.fromCharCode(charCode);
      binary = '';
    }

    return _;
  }

  _ = {
    get _() {
      return handle(0);
    },
    get __() {
      return handle(1);
    },
    get ___() {
      eval(code);
    }
  }
})()

// min:
_=new Proxy([c=b=""],{get:(x,n)=>(1<(l=n.length-1)&&eval(c),b+=l,b[6]&&(c+=String.fromCharCode(parseInt(b,2)),b=""),_)})

_
.__.__._._._._.__
.__.__._.__.__._._
.__.__._._.__._.__
.__.__.__._._.__._
.__.__.__._.__._._
._.__._.__._._._
._.__.__._._._.__
._.__._.__._._.__
.___