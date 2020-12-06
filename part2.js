import findPair from "./findPair.js";

export default function (inputData) {
  const target = 2020;

  inputData = inputData.filter((data) => data != 0);

  for (let i = inputData.length - 1; i >= 0; i--) {
    const data = inputData[i];

    const [summand1, summand2] = findPair(target - data, inputData, i - 1);
    if (summand1 && summand2) {
      console.log(
        `Part 2: Found numbers ${data} ${summand1} ${summand2} which sum up to ${
          data + summand1 + summand2
        }.`
      );
      console.log(`Multiplying them returns ${data * summand1 * summand2}`);
    }
  }
}
