import { fizzBuzz } from "../fizzBuzz";

describe("fizzBuzz", () => {
  describe.each([
    {
      name: "when sequence length allows for multiples of fizz, buzz, and fizz and buzz",
      actual: fizzBuzz(6, 2, 3),
      expected: [1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"],
    },
    {
      name: "when sequence length only allows for multiples of fizz and multiples of buzz",
      actual: fizzBuzz(5, 2, 3),
      expected: [1, "Fizz", "Buzz", "Fizz", 5],
    },
    {
      name: "when sequence length only allows for multiples of fizz",
      actual: fizzBuzz(5, 3, 6),
      expected: [1, 2, "Fizz", 4, 5],
    },
    {
      name: "when sequence length only allows for multiples of buzz",
      actual: fizzBuzz(5, 6, 3),
      expected: [1, 2, "Buzz", 4, 5],
    },
    {
      name: "when fizz and buzz are the same number",
      actual: fizzBuzz(5, 3, 3),
      expected: [1, 2, "FizzBuzz", 4, 5],
    },
  ])("$name", ({ actual, expected }) => {
    it("should produce correct sequence", () => {
      expect(actual).toEqual(expected);
    });
  });

  describe.each`
    field         | sequence | fizz   | buzz   | expected
    ${"sequence"} | ${6.5}   | ${2}   | ${3}   | ${[1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]}
    ${"fizz"}     | ${6}     | ${2.5} | ${3}   | ${[1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]}
    ${"buzz"}     | ${6}     | ${2}   | ${3.5} | ${[1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]}
  `(
    "when $field is not a whole number",
    ({ sequence, fizz, buzz, expected }) => {
      it("should produce correct sequence using whole part of number", () => {
        expect(fizzBuzz(sequence, fizz, buzz)).toEqual(expected);
      });
    },
  );

  describe.each`
    field         | sequence | fizz  | buzz
    ${"sequence"} | ${-1}    | ${1}  | ${1}
    ${"fizz"}     | ${1}     | ${-1} | ${1}
    ${"buzz"}     | ${1}     | ${1}  | ${-1}
  `("when $field is not a positive number", ({ sequence, fizz, buzz }) => {
    it("should produce empty array", () => {
      expect(fizzBuzz(sequence, fizz, buzz)).toEqual([]);
    });
  });

  describe.each`
    field         | sequence | fizz   | buzz
    ${"sequence"} | ${"a"}   | ${1}   | ${1}
    ${"fizz"}     | ${1}     | ${"a"} | ${1}
    ${"buzz"}     | ${1}     | ${1}   | ${"a"}
  `("when $field is not a number", ({ sequence, fizz, buzz }) => {
    it("should produce empty array", () => {
      expect(fizzBuzz(sequence, fizz, buzz)).toEqual([]);
    });
  });

  describe.each`
    field         | sequence     | fizz         | buzz
    ${"sequence"} | ${undefined} | ${1}         | ${1}
    ${"fizz"}     | ${1}         | ${undefined} | ${1}
    ${"buzz"}     | ${1}         | ${1}         | ${undefined}
  `("when $field is not provided", ({ sequence, fizz, buzz }) => {
    it("should produce empty array", () => {
      expect(fizzBuzz(sequence, fizz, buzz)).toEqual([]);
    });
  });
});
