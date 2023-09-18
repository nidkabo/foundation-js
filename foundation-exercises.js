// * 1.Write a function mapRevertSign(arr)

const mapRevertSign = (arr) => {
  const a = [];

  arr.forEach((elem) => {
    a.push(0 - elem);
  });

  return a;
};

console.log(mapRevertSign([1, -4, 2, 0]));

// const mapRevertSign2 = (arr) => {
//   return arr.map((elem) => {
//     return 0 - elem;
//   });
// };

// console.log(mapRevertSign2([1, -4, 2, 0]));

// * 2.Write a function reverse(arr)

const reverse = (arr) => {
  const a = [];

  for (let i = 1; i <= arr.length; i++) {
    a.push(arr[arr.length - i]);
  }
  return a;
};

console.log(reverse([1, 2, 3, 4, 5]));

// * 3.Write a function isMember(mem, arr)

const isMember = (mem, arr) => {
  let a = false;

  for (let i = 0; i < arr.length; i++) {
    if (mem === arr[i]) {
      a = true;
    }
  }
  return a;
};

console.log(isMember(5, [1, 3, 7, 12]));
console.log(isMember("john", ["jane", "jim", "john"]));

// * 4.Write a function unique(arr)
const unique = (arr) => {
  const a = [];

  for (let i = 0; i < arr.length; i++) {
    if (isMember(arr[i], a)) {
      continue;
    } else {
      a.push(arr[i]);
    }
  }
  return a;
};

console.log(unique([10, 20, 10, 20, 30, 50, 60, 100]));

// * 5.Write a function draw(n)
const draw = (n) => {
  a = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      a += "*";
    }
    a += "\n";
  }
  return a.trim();
};

console.log(draw(5));

// * 6.Write a function drawNg(n)
const drawNg = (n) => {
  a = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      a += "*";
    }
    a += "\n";
  }
  return a.trim();
};

console.log(drawNg(5));

// * 7.Write a function mutual(arr1, arr2)
const mutual = (arr1, arr2) => {
  a = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        a.push(arr2[j]);
      }
    }
  }
  return a;
};

const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

console.log(mutual(class1, class2));

// * 8.Write a fizzBuzz(n) function
const fizzBuzz = (n) => {
  const a = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      a.push("FizzBuzz");
    } else if (i % 3 === 0) {
      a.push("Fizz");
    } else if (i % 5 === 0) {
      a.push("Buzz");
    } else {
      a.push(i.toString());
    }
  }
  return a.join("\n");
};

console.log(fizzBuzz(20));

// * 9.Write a GCD function gcd(a, b)
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

console.log(gcd(10, 15));

// * 10.Write a function filterLt(n, arr)
