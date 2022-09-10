export function score(secret: string, guess: string): number[] {
  let secretWord = secret
  let result: number [] = new Array(5);
  for (let i = 0; i < guess.length; i++) {
    if (secretWord[i] === guess[i]) {
      result[i] = 2;
      secretWord = secretWord.replace(secretWord.charAt(i), "#")
    }
    else if(secretWord.includes(guess[i])) {
      result[i] = 1;
    }
    else {
      result[i] = 0;
    }
  }
  return result
}
