import { logging } from "near-sdk-core";

@nearBindgen
export class Contract {
  loop(): void {
    // for loop
    for (let i: i32 = 0; i < 10; i++) {
      logging.log("current i value is:" + i.toString());
      if (i == 3) {
        // Skip to next iteration with continue
        continue;
      }
      if (i == 5) {
        // Exit loop with break
        break;
      }
    }

    // while loop
    let j: i32 = 0;
    while (j < 10) {
      logging.log("current j value is:" + j.toString());
      j++;
    }
  }
}
