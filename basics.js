var x = "ngu";
var y = null;
var z; //undefined

// == compares types not values
console.log(y == z);

// === compares types
console.log(y === z);

//objects map properties, also known as: associative array
var ngu = {
  colour: "green",
  name: "sniper",
  accuracy: 92,
};

console.log(ngu);

// an array is also an object
var ty = [1, 2, 3, 4, 5, "howdy"];

console.log(typeof ngu);
console.log(typeof ty);

//turing complete: loop, conditionals, storage

/*
 * arguments: x: number, y: number
 * returns number
 */
//declaration (is hoisted)
function mul(x, y) {
  return x * y;
}

//expression (is not hoisted)
const subt = function (n, i) {
  return n - i;
};

// const and let only exist within the scope they are declared
