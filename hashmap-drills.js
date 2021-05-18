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

  /*1) Show your hash map after the insertion of keys 
10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map 
of length 11 using open addressing and a hash function 
k mod m, where k is the key and m is the length.*/

  //[ 22, 88, null, null, 4, 15, 28, 17, 59, 31, 10]

  /*Show your hash map after the insertion of the keys 
5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map 
with collisions resolved by separate chaining. 
Let the hash table have a length m = 9, and 
let the hash function be k mod m.*/

  // [ null, [28, 19, 10], 20, 12, null, 5, [15, 33], null, 17]

  // 4. Remove Duplicates

  const removeDupes = (str) => {
    const noDupes = new HashMap();
    noDupes.MAX_LOAD_RATIO = 0.5;
    noDupes.SIZE_RATIO = 3;

    str = str.toLowerCase().split("");
    for (let i = 0; i < str.length; i++) {
      noDupes.set(str[i], str[i]);
    }

    let newString = "";
    let letters = noDupes._hashTable;
    for (let j = 0; j < letters.length; j++) {
      if (letters[j]) {
        newString += letters[j].key;
      }
    }

    return newString;
  };

  console.log(removeDupes("mississippi"));


  // 5. Any permutation a palindrome

  const palindrome = (str) => {
    const table = new Map()

    for (let i=0; i<str.length; i++){
      if (!table.delete(str[i])) {
        table.set(str[i], 1)
      }
    }

    console.log(table.size, table)
    if (table.size <= 1) {
      return true
    } 
    return false
  }

  console.log(palindrome("racecar"))

  // 6. Anagram grouping

  // 7. Separate Chaining
};

module.exports = main;
