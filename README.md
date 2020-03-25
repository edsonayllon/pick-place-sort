---
author: Edson Ayllon
category: algorithm
tags: 
- sorting
twitter: https://twitter.com/relativeread
---

## Algo 6-2020

# pick-place-sort


Algorithm for sorting based on pick place parameters on a string.

## Description

A pick place operation is when sorting is done by moving an element to the end of a line. The number of options to move to the back from the start of the line is denoted by K. Considering a line of characters, if K is one, then only the first character can be moved to the back of the line. If K is two, then either the first or second character can be moved to the back of the line. 

The challenge is to output a lowest lexographically sorted string from an original K value and original string, for a sequence of these K and string parameters. 

## Algorithm

If K is greater than one, the lowest lexigraphically sorted string will be a sorted string. 

If K is one, the lowest lexigraphically sorted string will be the string shifted to where the lowest lexigraphical string starts. The lowest lexigraphical is determined by comparing the following characters of each lowest character, where lowest is alphabetical (ie. 'a' is absolute smallest). 

## Running

Requires Node.js. In the console in the directory of the project, run:

```powershell
node app.js
```