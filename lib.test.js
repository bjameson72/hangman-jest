const { stringify, createBlankWordArray, isWordSolved, print, randomlySelectWord } = require("./lib");

describe("stringify", () => {
  it("should convert an arbitrary string array to a string", () => {
    const stringArray = ["h", "e", "l", "l", "o"];
    const result = stringify(stringArray);

    expect(result).toBe("hello");
  });

  it("should maintain case", () => {
    const stringArray = ["H", "e", "l", "l", "o"];
    const result = stringify(stringArray);

    expect(result).toBe("Hello");
  });

  it("should maintain white-space", () => {
    const stringArray = "Hello world".split();
    const result = stringify(stringArray);

    expect(result).toBe("Hello world");
  });

  it("should return empty string when given an empty array", () => {
    expect(stringify([])).toBe("");
  });

  it("should properly handle array entries with multiple characters", () => {});
});

describe("createBlankWordArray", () => {
  it("should return an array of arbitrary length full of underscores", () => {
    const result = createBlankWordArray(10);
    //   test the length
    expect(result.length).toBe(10);
    expect(result).toHaveLength(10); // does the same thing
    //   if they are all underscores
    expect(result).toEqual(["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    //   toEqual can check deep equality
    expect(result.every(letter => letter === "_")).toBeTruthy();
  });

  it("should return an empty array when passed a length of 0", () => {
    expect(createBlankWordArray(0)).toHaveLength(0);
  });

  it("should gracefully handle undefined input", () => {
    const result = createBlankWordArray();
    expect(result).toHaveLength(0);
  });
});

describe("isWordSolved", () => {
  it("should return false if there are at least one underscores remaining", () => {
    const input = "a_b".split("");
    const result = isWordSolved(input);
    expect(result).toBe(false);
    expect(result).toBeFalsy();
    expect(result).not.toBeTruthy();
  });

  it("should return true if there are no underscores", () => {
    const input = "abc".split("");
    const result = isWordSolved(input);
    expect(result).toBeTruthy();
  });

  it("should throw a TypeError if passed undefined input", () => {
    expect.assertions(1);
    try {
      isWordSolved();
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError);
    }
  });
});

// describe("print", () => {
//   it("should log output to the console", () => {
//     console.log = jest.fn();
//     print("some input");
//     expect(console.log).toBeCalledTimes(1);
//     expect(console.log).toBeCalledWith("Some Input");
//     console.log.mockClear();
//   });

  it("should output an empty string to the console", () => {
    print("");
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toBeCalledWith("");
  });
});

// describe("randomlySelectWord", () => {
//   //   Math.random = jest.fn(() => 0.5);
//   Math.random = jest.fn();
//   it("should return the middle word", () => {
//     Math.random
//       .mockReturnValueOnce(0)
//       .mockReturnValueOnce(0.5)
//       .mockReturnValueOnce(0.9);

//     const firstResult = randomlySelectWord(["first", "second", "third"]);
//     const secondResult = randomlySelectWord(["first", "second", "third"]);
//     const thirdResult = randomlySelectWord(["first", "second", "third"]);
//     const result = randomlySelectWord(["first", "second", "third"]);
//     expect(result).toBe("second");
//   });
// });
