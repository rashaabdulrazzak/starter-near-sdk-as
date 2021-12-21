import { Contract } from "../assembly";
import { u128 } from "near-sdk-as"
let contract: Contract

beforeEach(() => {
  contract = new Contract()
})

describe("Contract", () => {
  // VIEW method tests

  it("convert to Near", () => {   
    const result = contract.convertToNear(u128.from('7000000000000000000000000'))
    expect(result).toStrictEqual('7')
  })

})
