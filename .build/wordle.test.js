var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_wordle = __toModule(require("./wordle"));
const secret = "allow";
test("correct guess should return array of 2's", () => {
  const guess = "allow";
  const result = [2, 2, 2, 2, 2];
  expect((0, import_wordle.score)(secret, guess)).toEqual(result);
});
test("totally incorrect guess should return array of 0's", () => {
  const guess = "bcdef";
  const result = [0, 0, 0, 0, 0];
  expect((0, import_wordle.score)(secret, guess)).toEqual(result);
});
test("guess with correct letter at wrong order should return an array of 1's", () => {
  const guess = "woall";
  const result = [1, 1, 1, 1, 1];
  expect((0, import_wordle.score)(secret, guess)).toEqual(result);
});
test("if a guessed letter is marked as correct, it should not be used for further scoring", () => {
  const guess = "aaaaa";
  const result = [2, 0, 0, 0, 0];
  expect((0, import_wordle.score)(secret, guess)).toEqual(result);
});
//# sourceMappingURL=wordle.test.js.map
