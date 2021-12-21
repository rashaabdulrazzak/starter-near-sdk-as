import * as contract from "../assembly";
import { u128 } from "near-sdk-as"
describe("Contract", () => {
  // VIEW method tests
  it("convert to Near", () => {
    const result = contract.convertToNear(u128.from('7000000000000000000000000'))   
    expect(result).toStrictEqual('7')
  })

})
