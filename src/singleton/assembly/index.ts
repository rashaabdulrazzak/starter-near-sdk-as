import { u128 } from "near-sdk-as";
@nearBindgen
export class Contract {
  // Define Near depending on yoctonear
  // 1 near = 10^24 yoctoNear

  public ONE_NEAR: u128 = u128.from("1000000000000000000000000");

  getNear(): u128 {
    return this.ONE_NEAR;
  }
}
