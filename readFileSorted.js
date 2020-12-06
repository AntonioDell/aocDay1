export default async function () {
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
    return inputData;
}
