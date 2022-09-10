var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  score: () => score
});
function score(secret, guess) {
  let secretWord = secret;
  let result = new Array(5);
  for (let i = 0; i < guess.length; i++) {
    if (secretWord[i] === guess[i]) {
      result[i] = 2;
      secretWord = secretWord.replace(secretWord.charAt(i), "#");
    } else if (secretWord.includes(guess[i])) {
      result[i] = 1;
    } else {
      result[i] = 0;
    }
  }
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  score
});
//# sourceMappingURL=wordle.js.map
