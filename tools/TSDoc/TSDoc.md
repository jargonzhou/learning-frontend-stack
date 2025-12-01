# TSDoc
* https://tsdoc.org/
* https://github.com/microsoft/tsdoc

> TSDoc is a proposal to standardize the doc comments used in TypeScript code, so that different tools can extract content without getting confused by each other's markup.
```ts
export class Statistics {
  /**
   * Returns the average of two numbers.
   *
   * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The arithmetic mean of `x` and `y`
   *
   * @beta
   */
  public static getAverage(x: number, y: number): number {
    return (x + y) / 2.0;
  }
}
```
> We are developing a library package [@microsoft/tsdoc](https://www.npmjs.com/package/@microsoft/tsdoc) that provides an open source reference implementation of a parser. Using this library is an easy way to ensure that your tool is 100% compatible with the standard.

# Spec
* https://tsdoc.org/pages/spec/overview/


declaration references
- old syntax: https://github.com/microsoft/tsdoc/blob/main/spec/code-snippets/DeclarationReferences.ts
- new syntax: https://github.com/microsoft/tsdoc/blob/main/tsdoc/src/beta/DeclarationReference.grammarkdown

Tag kinds
* **block tags/块标记**: Block tags should always appear as the first element on a line. In normalized form, a block tag should be the only element on its line, except for certain tags that assign special meaning to the first line of text. All text following a block tag, up until the start of the next block tag or modifier tag, is considered to be the block tag's **tag content**. The content may include Markdown elements and inline tags. Any content appearing prior to the first block tag is interpreted as **the special "summary" section**.
```ts
/**
 * This is the special summary section.
 *
 * @remarks
 * This is a standalone block.
 *
 * @example Logging a warning
 * ```ts
 * logger.warn('Something happened');
 * ```
 *
 * @example Logging an error
 * ```ts
 * logger.error('Something happened');
 * ```
 */
```
* **modifier tags/修饰符标记**: Modifier tags indicate a special quality of an API. Modifier tags are generally parsed the same as block tags, with the expectation that their tag content is empty. If tag content is found after a modifier tag, a parser may choose to discard it, or (in situations where it improves compatibility) to associate it with the previous block tag. In normalized form, the modifier tags appear on a single line at the bottom of the doc comment.
```ts
/**
 * This is the special summary section.
 *
 * @remarks
 * This is a standalone block.
 *
 * @public @sealed
 */
```
* **inline tags/内联标记**: Inline tags appear as content elements along with Markdown expressions. Inline tags are always surrounded by `{` and `}` characters.
```ts
class Book {
  /**
   * Writes the book information into a JSON file.
   *
   * @remarks
   * This method saves the book information to a JSON file conforming to the standardized
   * {@link http://example.com/ | Example Book Interchange Format}.
   */
  public writeFile(options?: IWriteFileOptions): void {
    . . .
  }

  /**
   * {@inheritDoc Book.writeFile}
   * @deprecated Use {@link Book.writeFile} instead.
   */
  public save(): void {
    . . .
  }
}
```

Standardization groups
- core
- extended
- descretionary/实现特定的

# Tag

- `@alpha`
- `@beta`
- `@decorator`
- `@deprecated`
- `@defaultValue`
- `@eventProperty`
- `@example`
- `@experimental`
- `@inheritDoc`
- `@internal`
- `@label`
- `@link`
- `@override`
- `@packageDocumentation`
- `@param`
- `@privateRemarks`
- `@public`
- `@readonly`
- `@remarks`
- `@returns`
- `@sealed`
- `@see`
- `@throws`
- `@typeParam`
- `@virtual`

# See Also
* TypeDoc
* DocFX
* API Extractor
* ESLint