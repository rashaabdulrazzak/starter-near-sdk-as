import { Context } from "near-sdk-core"

@nearBindgen
export class Contract {
  // State variables are stored on the blockchain.
   message: string = 'hello world' 

  // Here are some global variables
   created_at: u64 = Context.blockTimestamp;
   sender = Context.sender;  

   doMeSomthing():void{
   // Local variables are not saved to the blockchain.
    let i: i32 = 0;
   }  
}

