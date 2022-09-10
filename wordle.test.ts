import {score} from "./wordle"

const secret: string = "allow";

test("correct guess should return array of 2's", () => { 
  const guess: string = "allow";
  const result: number[] = [2, 2, 2, 2, 2];
  expect(score(secret, guess)).toEqual(result)
});

test("totally incorrect guess should return array of 0's", () => {
  const guess: string = "bcdef";
  const result: number[] = [0, 0, 0, 0, 0];
  expect(score(secret, guess)).toEqual(result)
});

test("guess with correct letter at wrong order should return an array of 1's", () => {
  const guess: string = "woall";
  const result: number[] = [1, 1, 1, 1, 1];
  expect(score(secret, guess)).toEqual(result);
});

test("if a guessed letter is marked as correct, it should not be used for further scoring", () => {
  const guess: string = "aaaaa";
  const result: number[] = [2, 0, 0, 0, 0];
  expect(score(secret, guess)).toEqual(result);
});

test("if a guessed letter is marked as present at incorrect position, it should not be used for further scoring", () => {
  const guess: string = "baaaa";
  const result: number[] = [0, 1, 0, 0, 0];
  expect(score(secret, guess)).toEqual(result);
});