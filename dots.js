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

    return ___;
  }

  ___ = {
    get _() {
      return handle(0);
    },
    get __() {
      return handle(1);
    },
    get ___() {
      Function(code)();
    }
  }
})()



___
.__.__._._._._.__
.__.__._.__.__._._
.__.__._._.__._.__
.__.__.__._._.__._
.__.__.__._.__._._
._.__._.__._._._
._.__.__._._._.__
._.__._.__._._.__
.___


function convert(code) {
  return (code + String.fromCharCode(0)) .split('').map(c => c
    .charCodeAt(0)
    .toString(2)
    .padStart(7, 0)
    .replace(/0/g, '._')
    .replace(/1/g, '.__')
  ).join('\n')
}


console.log(convert('alert(1)'))