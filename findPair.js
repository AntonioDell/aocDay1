export default function (target, list, upperLimit) {
  if (upperLimit === undefined) {
    upperLimit = list.length - 1;
  }
  // Add biggest number to smallest number, excluding already used entries, until a match is found
  let smallNumber = 0;
  let bigNumber = 0;
  for (let j = upperLimit; j >= 0 && bigNumber + smallNumber !== target; j--) {
    bigNumber = list[j];
    for (let i = 0; i <= upperLimit && bigNumber + smallNumber < target; i++) {
      smallNumber = list[i];
    }
  }

  if (smallNumber + bigNumber === target) {
    return [smallNumber, bigNumber];
  } else {
    return [null, null];
  }
}
