import { storage, logging } from "near-sdk-core"

@nearBindgen
export class Contract {
  // Function to increment the counter by value
  incrementCounter(value: i32): void {
    const newCounter = storage.getPrimitive<i32>("counter", 0) + value;
    storage.set<i32>("counter", newCounter);
    logging.log("Counter is now: " + newCounter.toString());
  }

  // Function to decrement the counter by value
  decrementCounter(value: i32): void {
    const newCounter = storage.getPrimitive<i32>("counter", 0) - value;
    storage.set<i32>("counter", newCounter);
    logging.log("Counter is now: " + newCounter.toString());
  }

  // Function to get the current counter value 
  getCounter(): i32 {
    return storage.getPrimitive<i32>("counter", 0);
  }

  // Function to reset the counter to zero
  resetCounter(): void {
    storage.set<i32>("counter", 0);
    logging.log("Counter is reset!");
  }
}

