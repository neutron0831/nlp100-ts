# Chapter 2: UNIX Commands

The file [popular-names.txt](../../assets/popular-names.txt) stores names of babies born in US with their genders, numbers of births, and years of births in tab-separated format. Create a program with the specifications below. Run the program with [popular-names.txt](../../assets/popular-names.txt) as an input. Furthermore, confirm that the same (similar) result can be obtained by running a UNIX command.

## 10. [Line count](./ex10.ts)

Count the number of lines of the file. Confirm the result by using `wc` command.

## 11. [Replace tabs into spaces](./ex11.ts)

Replace every occurrence of a tab character into a space. Confirm the result by using `sed`, `tr`, or `expand` command.

## 12. [col1.txt from the first column, col2.txt from the second column](./ex12.ts)

Extract the value of the first column of each line, and store the output into `col1.txt`. Extract the value of the second column of each line, and store the output into `col2.txt`. Confirm the result by using `cut` command.

## 13. [Merging col1.txt and col2.txt](./ex13.ts)

Join the contents of `col1.txt` and `col2.txt`, and create a text file whose each line contains the values of the first and second columns (separated by tab character) of the original file. Confirm the result by using `paste` command.

## 14. [First N lines](./ex14.ts)

Receive a natural number $N$ from a command-line argument, and output the first $N$ lines of the file. Confirm the result by using `head` command.

## 15. [Last N lines](./ex15.ts)

Receive a natural number $N$ from a command-line argument, and output the last $N$ lines of the file. Confirm the result by using `tail` command.

## 16. [Split a file into N pieces](./ex16.ts)

Receive a natural number $N$ from a command-line argument, and split the input file into $N$ pieces at line boundaries. Confirm the result by using `split` command.

## 17. [Distinct strings in the first column](./ex17.ts)

Find distinct strings (a set of strings) of the first column of the file. Confirm the result by using `cut`, `sort`, and `uniq` commands.

## 18. Sort lines in descending order of the third column

Sort the lines in descending numeric order of the third column (sort lines without changing the content of each line). Confirm the result by using `sort` command.

## 19. Frequency of a string in the first column in descending order

Find the frequency of a string in the first column, and sort the strings by descending order of their frequencies. Confirm the result by using `cut`, `uniq`, and `sort` commands.
