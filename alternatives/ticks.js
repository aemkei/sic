function convert(code) {
  const entry = '_';
  return entry + (code + String.fromCharCode(0)).split('').map(c => c
    .charCodeAt(0)
    .toString(2)
    .padStart(7, 0)
    .replace(/0/g, '``')
    .replace(/1/g, '`_`')
  ).join('\n');
}

console.log(convert('alert(1)'));

(function(){

  let code = '';
  let binary = '';

  _ = function([length]){
    // compose an ASCII binary code
    binary += Number(!!length);
    if (binary.length == 7){
      // if binary is not '0000000'
      if (binary !== '0000000') {
        // add more chars to the final code
        const charCode = parseInt(binary, 2);
        code += String.fromCharCode(charCode);
        binary = '';
      } else {
        // otherwise eval the code
        Function(code)();
      }
    }
    return _;
  }

})()

// min:

_ = function([length]){
  // compose an ASCII binary code
  binary += Number(!!length);
  if (binary.length == 7){
    // if binary is not '0000000'
    if (binary !== '0000000') {
      // add more chars to the final code
      const charCode = parseInt(binary, 2);
      code += String.fromCharCode(charCode);
      binary = '';
      console.log(code);
    } else {
      // otherwise eval the code
      Function(code)();
    }
  }
  return _;
}

// min
C=B='';_=(([l])=>(B+=+!!l,B[6]&&(+B||eval(C),C+=String.fromCharCode(parseInt(B,2)),B=[]),_))


_`_``_``````````_`
`_``_````_``_`````
`_``_``````_````_`
`_``_``_``````_```
`_``_``_````_`````
```_````_```````
```_``_````````_`
```_````_``````_`
``````````````