# Chapter 3: Regular Expression

The file [enwiki-country.json.gz](../../assets/enwiki-country.json.gz) stores Wikipedia articles in the format:

- Each line stores a Wikipedia article in JSON format
- Each JSON document has key-value pairs:
  - Title of the article as the value for the `title` key
  - Body of the article as the value for the `text` key
- The entire file is compressed by gzip

Write codes that perform the following jobs.

## 20. [Read JSON documents](./ex20.ts)

Read the JSON documents and output the body of the article about the United Kingdom. Reuse the output in problems 21-29.

## 21. [Lines with category names](./ex21.ts)

Extract lines that define the categories of the article.

## 22. [Category names](./ex22.ts)

Extract the category names of the article.

## 23. [Section structure](./ex23.ts)

Extract section names in the article with their levels. For example, the level of the section is 1 for the MediaWiki markup `"== Section name =="`.

## 24. [Media references](./ex24.ts)

Extract references to media files linked from the article.

## 25. [Infobox](./ex25.ts)

Extract field names and their values in the Infobox "country", and store them in a dictionary object.

## 26. Remove emphasis markups

In addition to the process of the problem 25, remove emphasis MediaWiki markups from the values. See [Help:Cheatsheet](https://en.wikipedia.org/wiki/Help:Cheatsheet).

## 27. Remove internal links

In addition to the process of the problem 26, remove internal links from the values. See [Help:Cheatsheet](https://en.wikipedia.org/wiki/Help:Cheatsheet).

## 28. Remove MediaWiki markups

In addition to the process of the problem 27, remove MediaWiki markups from the values as much as you can, and obtain the basic information of the country in plain text format.

## 29. Country flag

Obtain the URL of the country flag by using the analysis result of Infobox. (Hint: convert a file reference to a URL by calling [imageinfo](https://www.mediawiki.org/wiki/API:Imageinfo) in [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page))
