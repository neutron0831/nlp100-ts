import { ngram } from './ex05'
import { union, intersectionWith, difference, isEqual } from 'lodash'

/**
 * ### 06. Set
 * Let the sets of letter bi-grams from the words "paraparaparadise" and "paragraph" $X$ and $Y$, respectively. Obtain the union, intersection, difference of the two sets. In addition, check whether the bigram "se" is included in the sets $X$ and $Y$.
 *
 * @param {string} x
 * @param {string} y
 * @param {string} z
 * @returns {(string[][] | boolean)[]}
 */
function ex06(
  x: string = 'paraparaparadise',
  y: string = 'paragraph',
  z: string = 'se',
): (string[][] | boolean)[] {
  const X: string[][] = ngram(2, [...x])
  const Y: string[][] = ngram(2, [...y])
  const Union = union(X, Y)
  const Intersection = intersectionWith(X, Y, isEqual)
  const Difference = difference(X, Y)
  const Z = [...z]

  return [
    Union,
    Intersection,
    Difference,
    X.some((x) => isEqual(x, Z)),
    Y.some((y) => isEqual(y, Z)),
  ]
}

export { ex06 }
