import { storage, Context } from "near-sdk-core"

@nearBindgen
export class Contract {
   message: string = 'hello world'
   symbolVal:symbol = Symbol('foo')

  // return the string 'hello world'
  helloWorld(): string {
    return this.message
  }
  
  getSymbolKey(key:string):symbol{
    return this.symbolVal
  }
  
}

