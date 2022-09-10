# Wordle kata

## Scoring

In Wordle the goal is to correctly guess a secret word. Implement a function that determines this score:
- [ ] A correct guessed letter in the correct position is marked in green
- [ ] A guessed letter that is part of the secret word but in some other position is marked in yellow
- [ ] When a guessed letter does not appear in the secret word it will be marked gray.
- [ ] Each guessed letter may only be scored once, so repeated letters are only scored green or yellow as many times as they appear in the secret word, the remaining guessed letters are scored gray.
- [ ] For a repeated guessed letter in the wrong position it should score them from left to right, unless one of these guessed letter also in the correct position. In that case the green score will take precedence

\
**Example:**
\
Secret: ```A L L O W```
\
Guess: ```L O L L Y```
\
Score: 🟨🟨🟩⬛⬛

## The gameplay
You have 6 guesses to score a 5 lettered secret word. After each guess it will be scored. If you are not able to guess the secret word after the fifth guess you lose the game. After we have the score we can implement this game. Firstly, define below the constraints for this game:
- [ ] TODO
- [ ] TODO

