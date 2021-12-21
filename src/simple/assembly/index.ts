import { u128 } from "near-sdk-as"


export const ONE_NEAR =  u128.from("1000000000000000000000000");

/**
 * function convertToNear
 * @param amount {u128} - Yocto Ⓝ token quantity as an unsigned 128-bit integer
 * @returns {string}    - Amount in NEAR, as a string
 */
 
 export function convertToNear(amount: u128): string {
  return u128.div(amount, ONE_NEAR).toString();
}

