const grade = (score) => {
  if (score < 0 || score > 100) {
    console.log("Invalid input. Score must be between 0 and 100.");
    return; // break
  }

  if (score >= 80) {
    console.log("You got A.");
  } else if (score >= 70) {
    console.log("You got B.");
  } else if (score >= 60) {
    console.log("You got C.");
  } else if (score >= 50) {
    console.log("You got D.");
  } else {
    console.log("You got F.");
  }
};

grade(79.9);

// * Grade function with rounded score
const grade2 = (score) => {
  const rounded = Math.round(score);

  if (rounded < 0 || rounded > 100) {
    console.log("Invalid input. Score must be between 0 and 100.");
    return; // break
  }

  if (rounded >= 80) {
    console.log("You got A.");
  } else if (rounded >= 70) {
    console.log("You got B.");
  } else if (rounded >= 60) {
    console.log("You got C.");
  } else if (rounded >= 50) {
    console.log("You got D.");
  } else {
    console.log("You got F.");
  }
};

grade2(79.9);
