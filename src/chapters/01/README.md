# Chapter 1: Warm-up

## 00. [Reversed string](./ex00.ts)

Obtain the string that arranges letters of the string "stressed" in reverse order (tail to head).

## 01. ["schooled"](./ex01.ts)

Obtain the string that concatenates the 1st, 3rd, 5th, and 7th letters in the string "schooled".

## 02. ["shoe" + "cold" = "schooled"](./ex02.ts)

Obtain the string "schooled" by concatenating the letters in "shoe" and "cold" one after the other from head to tail.

## 03. Pi

Split the sentence "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics". into words, and create a list whose element presents the number of alphabetical letters in the corresponding word.

## 04. Atomic symbols

Split the sentence "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can". into words, and extract the first letter from the 1st, 5th, 6th, 7th, 8th, 9th, 15th, 16th, 19th words and the first two letters from the other words. Create an associative array (dictionary object or mapping object) that maps from the extracted string to the position (offset in the sentence) of the corresponding word.

## 05. n-gram

Implement a function that obtains n-grams from a given sequence object (e.g., string and list). Use this function to obtain word bi-grams and letter bi-grams from the sentence "I am an NLPer".

## 06. Set

Let the sets of letter bi-grams from the words "paraparaparadise" and "paragraph" $X$ and $Y$, respectively. Obtain the union, intersection, difference of the two sets. In addition, check whether the bigram "se" is included in the sets $X$ and $Y$.

## 07. Template-based sentence generation

Implement a function that receives arguments, `x`, `y`, and `z` and returns a string "{y} is {z} at {x}", where "{x}", "{y}", and "{z}" denote the values of `x`, `y`, and `z`, respectively. In addition, confirm the return string by giving the arguments `x=12`, `y="temperature"`, and `z=22.4`.

## 08. cipher text

Implement a function `cipher` that converts a given string with the specification:

- Every alphabetical lowercase letter `c` is converted to a letter whose ASCII code is (219 - [the ASCII code of `c`])

- Keep other letters unchanged

Use this function to cipher and decipher an English message.

## 09. Typoglycemia

Write a program with the specification:

- Receive a word sequence separated by space
- For each word in the sequence:
  - If the word is no longer than four letters, keep the word unchanged
  - Otherwise,
    - Keep the first and last letters unchanged
    - Shuffle other letters in other positions (in the middle of the word)

Observe the result by giving a sentence, e.g., "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind".
