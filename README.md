# @x12i/client-config usage example

Framework-agnostic browser runtime config: typed schemas, validation, local persistence, sensitive-field handling, and optional encryption.

This consuming application demonstrates **save and reload typed runtime settings in memory** using the published npm package, pinned to `1.5.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- A consumer needs the following capability: Framework-agnostic browser runtime config: typed schemas, validation, local persistence, sensitive-field handling, and optional encryption.
- A Client integration needs to reuse the capabilities of @x12i/client-config inside a larger application.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/client-config)
- [Implementation monorepo](https://github.com/x12i/client-config)
- [Reviewed package source](https://github.com/x12i/client-config/tree/36851b480fa9796774bfd70d45a3e59dadb1ec60/.)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
