import * as contract from "../assembly";

describe("Contract", () => {
  // VIEW method tests
  it("convert to yocto", () => {
    const result = contract.convertToYocto(7)
    expect(result.as<String>()).toHaveLength(25)
    expect(result.as<String>()).toStrictEqual('7000000000000000000000000')
  })

})
