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
