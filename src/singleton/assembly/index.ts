@nearBindgen
export class Contract {
  myValue:i32 = 10;

  isGreater(val:i32):bool {
    if(val > this.myValue){
      return true
    }else{
      return false;
    }
  }

  // Ternary if-else
  // this example exists in https://www.assemblyscript.org/examples/snippets.html#switch-case
  isTrue(a: i32): i32 {
    let response = a > 0 ? 1 : 0;
    return response;
  }

  
}

