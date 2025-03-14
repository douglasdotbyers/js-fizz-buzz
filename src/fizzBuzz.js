/**
 * Generate a range of numbers, from start to end.
 * @param {number} start The number with which to start.
 * @param {number} end The number with which to end.
 * @returns A range of numbers, from start to end.
 */
function* range(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

/**
 * Generate the fizz buzz sequence as far as the specified sequence length.
 * @param {number} sequenceLength The sequence length.
 * @param {number} fizzNumber The fizz number.
 * @param {number} buzzNumber The buzz number.
 * @returns The fizz buzz sequence as far as the specified sequence length.
 */
export function fizzBuzz(sequenceLength, fizzNumber, buzzNumber) {
  if (
    Math.sign(buzzNumber) !== 1 ||
    Math.sign(fizzNumber) !== 1 ||
    Math.sign(sequenceLength) !== 1
  )
    return [];

  return [...range(1, Math.trunc(sequenceLength))].map((x) => {
    let result = "";
    if (x % Math.trunc(fizzNumber) === 0) result += "Fizz";
    if (x % Math.trunc(buzzNumber) === 0) result += "Buzz";
    return result || x;
  });
}
