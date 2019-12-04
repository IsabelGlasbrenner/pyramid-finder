import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PyramidService {
  findIfPyramid(myStr: string) {
    // We'll return this boolean, lets start at true and later set to false if pyramid "rules" are broken
    let isPyramid = true;

    // Arrays and maps we'll fill up
    let letterMap = new Map(); // This is the map we'll use to keep track of letters
    let letterArray = []; // Still need an array of letters, since map wont let us access it without knowing the first val
    let countArray = []; // Keep an array of the counts in here

    // Some little helper variables
    let currLetter;
    let letterCount;
    let currCount;

    // First, lets go through and add each letter to the letterArray and letterMap with its count
    for (let i = 0; i < myStr.length; i++) {
      currLetter = myStr.substring(i, i + 1);
      if (letterMap.has(currLetter)) {
        //Letter is already in the map, lets adjust the letter count
        letterCount = letterMap.get(currLetter); // will return the current mapped val
        letterMap.delete(currLetter); // Remove the old map
        letterMap.set(currLetter, letterCount + 1); // Add the knew one, incrementing the count
      } else {
        // Letter is not in the map, lets add it
        letterMap.set(currLetter, 1);
        letterArray.push(currLetter);
      }
    }
    // Now, we need to find out if we have one of each size, lets try and make an array with counts, in order
    for (let j = 0; j < letterMap.size; j++) {
      currCount = letterMap.get(letterArray[j]);
      if (countArray[currCount - 1] == currCount) {
        // It was already set, which means there was already a letter with this count
        // So its not a pyramid
        isPyramid = false;
      } else {
        // No letter with this count yet, lets add it
        countArray[currCount - 1] = currCount; //Let's set the count to its index
      }
    }

    for (let k = 0; k < countArray.length; k++) {
      if (countArray[k] != k + 1) {
        // There must be a missing number, not a pyramid
        isPyramid = false;
      }
    }

    return isPyramid;
  }
}
