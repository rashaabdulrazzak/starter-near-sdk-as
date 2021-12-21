import * as contract from "../assembly";

describe("Contract", () => {
  // VIEW method tests

  it("gives the value of one near", () => {
    expect(contract.getNear()).toStrictEqual(contract.ONE_NEAR)
  })

  
})
