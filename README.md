# simple-letters

A lightweight utility class for working with the English or custom alphabet.

## Features

- Get a string of the alphabet
- Get arrays of lowercase, uppercase, or both sets of letters
- Fully written in TypeScript with types included

## Installation

```
npm install simple-letters
```

## Usage

```
import SimpleLetters from 'simple-letters';

const letters = new SimpleLetters();

console.log(letters.letters);      // "abcdefgh...z"
console.log(letters.array);        // ['a', 'b', ..., 'z']
console.log(letters.upper);        // "ABCDEFGH...Z"
console.log(letters.upperArray);   // ['A', 'B', ..., 'Z']
console.log(letters.fullArray);    // ['a', ..., 'z', 'A', ..., 'Z']
console.log(letters.random);       // "m"

letters.letters = 'abc'
console.log(letters.array);        // ['a', 'b', 'c']

console.log(letters.isLetter('a')) //true, searches in full array by default

console.log(letters.isLetter('a',letters.upperArray)) //false


```

### or if not using modules

```
const { SimpleLetters } = require("simple-letters")
```
