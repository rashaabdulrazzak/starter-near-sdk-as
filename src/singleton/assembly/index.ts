import { u128 } from "near-sdk-as";
@nearBindgen
export class Contract {
  // Define Near depending on yoctonear
  // 1 near = 10^24 yoctoNear

  public ONE_NEAR: u128 = u128.from("1000000000000000000000000");
 
  // return the amount in yocto Ⓝ as an unsigned 128-bit integer
  convertToYocto(amount: i32): u128 {    
    return u128.mul(this.ONE_NEAR, u128.from(amount))
  }
    
}