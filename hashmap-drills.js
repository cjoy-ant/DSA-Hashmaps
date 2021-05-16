const HashMap = require("./hashmap");

// 1. Create a HashMap Class
const main = () => {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  // add items to hash map
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  console.log(lotr._hashTable);
  // length is 8
  console.log("Hobbit: " + lotr.get("Hobbit"));
  // Frodo
  console.log("Maiar: " + lotr.get("Maiar"));
  // Sauron
  // these are only showing the most recently ones added
};

// 2. WhatDoesThisDo

const WhatDoesThisDo = () => {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

WhatDoesThisDo();
// ANSWER
// collision
// keys are the same
// it returns the most recently inserted value

// 3. Demonstrate understanding of hash maps

// 4. Remove Duplicates

// 5. Any permutation a palindrome

// 6. Anagram grouping

// 7. Separate Chaining

module.exports = main;
