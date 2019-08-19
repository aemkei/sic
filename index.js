// converts a given string into a sequence of [] symbols
function convert(code) {
  const undefined = '[][[][[]]]';
  return undefined + (code + String.fromCharCode(0)).split('').map(c => c
    .charCodeAt(0)
    .toString(2)
    .padStart(7, 0)
    .replace(/0/g, '[[][[]]]')
    .replace(/1/g, '[[]]')
  ).join('');
}

const library = `[C=B=[]].__proto__[C.B]=T=new Proxy(B,{get:(_,N)=>(B+=+!N,B[6]&&(+B||eval(C),C+=String.fromCharCode(parseInt(B,2)),B=[]),T)});

// later in you code …
`

function convertInput(){
  const newValue = convert(document.getElementById('input').value);
  document.getElementById('output').value = library + '\n' + newValue;
}

document.getElementById('input').addEventListener('input', (event) => {
  convertInput();
});

document.getElementById('convert').addEventListener('click', (event) => {
  convertInput()
  event.preventDefault();
});

document.getElementById('run').addEventListener('click', (event) => {
  event.preventDefault();
  eval(document.getElementById('output').value);
});

convertInput();