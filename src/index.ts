export class SimpleLetters {
  letters: string;
  constructor(cstmLetters?: string) {
    this.letters = cstmLetters || "abcdefghijklmnopqrstuvwxyz";
  }
  get array() {
    return this.letters.split("");
  }
  get upper() {
    return this.letters.toLocaleUpperCase();
  }
  get upperArray() {
    return this.upper.split("");
  }
  get fullArray() {
    return this.array.concat(this.upperArray);
  }
  get random() {
    return this.letters[
      Math.floor(Math.random() * this.letters.length)
    ];
  }
  isLetter(letter: string, arr = this.fullArray) {
    return arr.includes(letter);
  }
}

export default SimpleLetters;
