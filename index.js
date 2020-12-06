import part1 from "./part1.js";
import part2 from "./part2.js";
import readFileSorted from "./readFileSorted.js";

const inputData = await readFileSorted();
part1(inputData);
part2(inputData);
