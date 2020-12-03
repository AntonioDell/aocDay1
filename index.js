const startTime = new Date().getTime();
const target = 2020;
// Load data from text file
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("data/input.txt");
// Create a sorted list of numbers
const inputData = decoder
  .decode(data)
  .split("\n")
  .map((dataString) => Number(dataString))
  .sort((a, b) => {
    return a - b;
  });

// Add biggest number to smallest number, excluding already used entries, until a match is found
let smallNumber = 0;
let bigNumber = 0;
for (
  let j = inputData.length - 1;
  j >= 0 && bigNumber + smallNumber !== target;
  j--
) {
  bigNumber = inputData[j];
  for (
    let i = 0;
    i < inputData.length && bigNumber + smallNumber < target;
    i++
  ) {
    smallNumber = inputData[i];
  }
}

if (smallNumber + bigNumber === target) {
  console.log(
    `Found entries summing up to 2020: ${smallNumber} + ${bigNumber} = ${
      smallNumber + bigNumber
    }`
  );
  console.log(
    `Multiplicating these two results in... ${smallNumber * bigNumber}`
  );
} else {
  console.log(`No entries match found, that sum up to ${target}`);
}

const endTime = new Date().getTime();
console.log(`The program ran ${endTime-startTime}ms`);