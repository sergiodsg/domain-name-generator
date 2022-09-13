/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "five"];
let extensions = ["co", "com", "ve", "pt", "es", "org"];

window.onload = function() {
  //write your code here
  for (let pronounUsed of pronoun) {
    for (let adjUsed of adj) {
      for (let nounUsed of noun) {
        for (let extensionUsed of extensions) {
          if (nounUsed.endsWith(extensionUsed)) {
            console.log(
              pronounUsed +
                adjUsed +
                nounUsed.slice(0, -1 * extensionUsed.length) +
                "." +
                extensionUsed
            );
          } else {
            console.log(pronounUsed + adjUsed + nounUsed + "." + extensionUsed);
          }
        }
      }
    }
  }
};
