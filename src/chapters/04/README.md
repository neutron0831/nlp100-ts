# Chapter 4: POS tagging

The zip archive [alice.zip](https://nlp100.github.io/data/alice.zip) contains the novel, _Alice's Adventures in Wonderland_ (written by Lewis Carroll) distributed on [Project Gutenberg](https://www.gutenberg.org/), as a text file `alice.txt`. Apply a part-of-speech (POS) tagger to the text file, and store the result in another file. Implement programs that read the POS tagging result and perform the jobs.

For your convenience, the zip archive also includes `alice.txt.conll`, the novel with part-of-speech labels predicted by [Stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/). It may be a good idea to use [matplotlib](http://matplotlib.org/) or [Gnuplot](http://www.gnuplot.info/) for the problems 37, 38, and 39.

## 30. [Reading the result](./ex30.ts)

Implement a program that reads the result of part-of-speech tagging. Here, represent a sentence as a list of mapping objects, each of which associates a surface form, lemma (base form), part-of-speech tag with the keys `text`, `lemma`, `pos`. Use this representation in the rest of the problems.

## 31. [Verbs](./ex31.ts)

Extract surface forms of all verbs appearing in the text.

## 32. [Base forms of verbs](./ex32.ts)

Extract lemmas of all verbs appearing in the text.

## 33. [A of B](./ex33.ts)

Extract noun phrases in the form of "A of B", where A and B are nouns.

## 34. [A B](./ex34.ts)

Extract the longest noun phrase consisting of consecutive nouns.

## 35. Frequency of words

Obtain the list of words and frequencies of their occurrences sorted by descending order of frequency.

## 36. Top-ten frequent words

Visualize the top-ten frequent words and their frequencies with a chart (e.g., bar chart).

## 37. Top-ten words co-occurring with 'Alice'

Extract the list of words that co-occur with the word "Alice". Visualize with a chart (e.g., bar chart) the top-ten words co-occurring with the word "Alice" and their frequencies.

## 38. Histogram

Draw a histogram of word frequency (x-axis is a scalar range representing a frequency ranging from 1 to the largest frequency of a given word in the entire corpus, and the y-axis is the count of unique words that fall into the count of the x value).

## 39. Zipf's law

Plot a log-log graph with the x-axis being rank order and the y-axis being frequency.
