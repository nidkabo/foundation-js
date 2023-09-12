function normalLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  // for (let i = 0; i < 5; i++) {
  //   console.log(i);
  // }
}

function reverseLoop() {
  for (let i = 3; i >= 0; i--) {
    console.log(i);
  }
}

// reverseLoop()

function loopThroughArray() {
  const tripLocation = ["London", "Bali", "Amstersdam", "Paris"];

  // for (let i = 0; i < tripLocation.length; i++) {
  //   console.log(tripLocation[i]);
  // }

  // * Reverse Loop through array
  // for (let i = tripLocation.length - 1; i >= 0; i--) {
  //   console.log(tripLocation[i]);
  // }

  // * Break keyword
  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "Bali") {
      break;
    }

    console.log(tripLocation[i]);
  }

  // * Continue keyword
  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "Bali") {
      continue;
    }

    console.log(tripLocation[i]);
  }
}

// loopThroughArray();

// While Loop: Don’t know how many times the loop needs to repeat
function whileLoop() {
  // let i = 0;
  // while (i < 5) {
  //   console.log(i);
  //   i++;
  // }

  let count = 1;
  while (count < 100) {
    count += 2;
  }

  console.log(count);
}

// whileLoop();

function nestedLoop() {
  for (let i = 0; i < 3; i++) {
    console.log("i", i);
    for (let j = 0; j < 3; j++) {
      console.log("j", j);
    }
  }
}

// nestedLoop();

// * Exercise:
// * Write a code that will loop from 0 to 15. For each loop, it will check if the current index number is odd or even, and display a message to the console.

// * Example Output:
// * > 0 is even
// * > 1 is odd
// * > 2 is even

// * > 15 is odd

function oddEven() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i, "is even");
    } else {
      console.log(i, "is odd");
    }
  }
}

oddEven();
