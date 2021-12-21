import * as contract from "../assembly";

describe("Contract", () => {
  // VIEW method tests

  it("get counter value", () => {
    expect(contract.getCounter()).toStrictEqual(0)
  })

   // CHANGE method tests

  it("increment counter by one", () => {
    contract.incrementCounter(1)
    expect(contract.getCounter()).toStrictEqual(1)
  })
  
  it("decrement counter by one", () => {
    contract.decrementCounter(1)
    expect(contract.getCounter()).toStrictEqual(-1)
  })

  it("resets counter to zero", () => {
    contract.resetCounter()
    expect(contract.getCounter()).toStrictEqual(0)
  })
})
