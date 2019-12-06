import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PyramidService {
  findIfPyramid(myStr: string) {
    const findCount = (map, val) => {
      let count = 0;
      for (let [k, v] of map) {
        if (v === val) {
          count++;
        }
      }
      return count;
    };

    // We'll return this boolean
    // lets start at true and later set to false if pyramid "rules" are broken
    let isPyramid = true;

    // This is the map we'll use to keep track of letters
    let letterMap = new Map();

    // little helper var
    let currLetter;

    // First, lets go through and add each letter to the letterMap
    for (let i = 0; i < myStr.length; i++) {
      currLetter = myStr.substring(i, i + 1);
      if (letterMap.has(currLetter)) {
        //Letter is already in the map, lets adjust the letter count
        letterMap.set(currLetter, letterMap.get(currLetter) + 1); // Update the count in the map
      } else {
        // Letter is not in the map, lets add it
        letterMap.set(currLetter, 1);
      }
    }

    // Now lets make sure its a pyramid
    // For each letter in the array, there should be exactly one instance of a count
    for (var key of letterMap.keys()) {
      if (findCount(letterMap, letterMap.get(key)) != 1) {
        isPyramid = false;
      }
    }

    return isPyramid;
  }
}
