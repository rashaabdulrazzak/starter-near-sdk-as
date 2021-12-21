import { u128 } from "near-sdk-as"

// when exporting the variable we can use it in another files 
export const ONE_NEAR =  u128.from("1000000000000000000000000");
export function getNear():u128{
  return ONE_NEAR
}
