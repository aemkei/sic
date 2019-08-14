
// assign method 'undefined' to all arrays
Object.assign(Array.prototype, {
  get undefined() {
    let binary = ''; // the binary representation for every char
    let code = ''; // the final code to execute

    // return a Proxy for every access to ['undefined'] or ['']
    const sic = new Proxy({}, {
      get: function(_, name) {
        // compose an ASCII binary code
        binary += Number(!name);
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
        return sic;
      }
    });

    return sic;
  }
});