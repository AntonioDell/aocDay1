import findPair from "./findPair.js";

export default async function (inputData) {
  const target = 2020;

  const [summand1, summand2] = findPair(target, inputData);

  console.log(
    `Part 1: Found entries summing up to 2020: ${summand1} + ${summand2} = ${
      summand1 + summand2
    }`
  );
  console.log(
    `Multiplicating these two results in... ${summand1 * summand2}`
  );
}
