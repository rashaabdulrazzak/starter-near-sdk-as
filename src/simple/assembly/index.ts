import { u128 } from "near-sdk-as"


export const ONE_NEAR =  u128.from("1000000000000000000000000");

/**
 * 
 * @param amount integer
 * @returns amount in yocto Ⓝ as an unsigned 128-bit integer
 */
 
export function convertToYocto(amount: i32): u128 {    
  return u128.mul(ONE_NEAR, u128.from(amount))
}

