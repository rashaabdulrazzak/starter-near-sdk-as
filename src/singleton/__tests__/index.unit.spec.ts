import { Contract } from "../assembly";

let contract: Contract

beforeEach(() => {
  contract = new Contract()
})

describe("Contract", () => {
  // VIEW method tests

  it("gives the value of one near", () => {
    expect(contract.getNear()).toStrictEqual(contract.ONE_NEAR)
  })
})
