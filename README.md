# Typed Tailwind · [typed-tailwind.com](https://typed-tailwind.com)

Brings types to [Tailwind CSS](https://tailwindcss.com).

Jump to: [What](#what) · [Usage](#usage) · [FAQ](#faq) · [License](#license)

## What

Typed Tailwind is a tool to generate a TypeScript class ([example](https://github.com/dvkndn/typed-tailwind/blob/master/src/style/index.ts)) whose methods help you use the utility classes from your Tailwind configuration conveniently:

<img width="693" alt="Code completion" src="https://user-images.githubusercontent.com/5953369/66266581-227b1f00-e851-11e9-8baf-9d986bf2cb35.png">

…and safely:

<img width="693" alt="Typo catching" src="https://user-images.githubusercontent.com/5953369/66266428-2017c580-e84f-11e9-990a-a9ed02b857ad.png">


Try it live at [typed-tailwind.com](https://typed-tailwind.com)!

## Usage

1. Go to [typed-tailwind.com](https://typed-tailwind.com) and paste your Tailwind [configuration](https://tailwindcss.com/docs/configuration) into the first panel.
2. Save the generated file in the second panel to your codebase.
3. Import the `Tw` function from that file and use its ([chain-able](https://en.wikipedia.org/wiki/Method_chaining)) methods:

```tsx
// In practice, the file should be imported using absolute path
import { Tw } from "./tw";

const Foo = () => (
  <p className={Tw().textBlue().fontBold().$()}>
    Bold, blue text
  </p>
);
```

Example usages: [https://github.com/dvkndn/typed-tailwind/search?l=TSX&q=Tw%28%29]()

## FAQ

+ [Where to put the generated file?](where-to-put-the-generated-file)
+ [Does it work without TypeScript?](#does-it-work-without-typescript)
+ [Does it work with PurgeCSS?](#does-it-work-with-purgecss)
+ [Does it work with custom plugins?](#does-it-work-with-custom-plugins)
+ [Does it work with custom classes?](#does-it-work-with-custom-classes)
+ [Is there any performance issue?](#is-there-any-performance-issue)
+ [Is there a CLI?](#is-there-a-cli)

### Where to put the generated file?

The file should be imported from many places in your codebase so place it where you can take advantage of absolute imports. For example, if you are using CRA and your [`baseUrl`](https://create-react-app.dev/docs/importing-a-component#absolute-imports) is `src` folder then you can place the file at `src/tw/index.ts`.

### Does it work without TypeScript?

Yes. You can always compile the generated file to JS, optionally with a [declaration file](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html):

```sh
tsc --declaration style.ts
```

This way, you still get full [code completion](https://code.visualstudio.com/docs/editor/intellisense), just no compile time type checking.

### Does it work with PurgeCSS?

Not yet. It requires a custom extractor, which is [planned](https://github.com/dvkndn/typed-tailwind/issues/2). In the meantime, try [remove unused values](https://tailwindcss.com/docs/controlling-file-size#removing-unused-theme-values).

### Does it work with custom plugins?

It's not officially supported yet but could work if your plugins are defined as inline anonymous functions (like in the [docs](https://tailwindcss.com/docs/plugins)). Also see: [Does it work with custom classes](#oes-it-work-with-custom-classes).

### Does it work with custom classes?

Yes. The result is simply a source file, so feel free to modify it anyway you want:

```typescript
// style.ts

class SStyle {
  /* ... */
  
  // Add your custom ones:
  textShadow(): SStyle { return this.add("text-shadow"); }
}
```

### Is there any performance issue?

Out of the box, it's a run time solution so it's slower and use more memory than typing the class strings directly. However, this can be improved:

- Move the calls out of the renders. The work is still done at run time, but just once at start-up instead of every render.

    ```tsx
    const styles = Style().fontBold().textBlue().$();
    
    const Foo = () => <p className={styles} />;
    ```
- Use a build plugin to handle all the works at compile time. It does not exist yet but is [planned](https://github.com/dvkndn/typed-tailwind/issues/1).

### Is there a CLI?

It's [planned](https://github.com/dvkndn/typed-tailwind/issues/3).

## License
[MIT](https://choosealicense.com/licenses/mit/)
