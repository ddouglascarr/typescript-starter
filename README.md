# Typescript Starter

## usage

to set up, just install dependencies

```
$ npm install
```

### client developmenbt

Will run webpack dev server with hot reloading.

Entry config is at `src/clientEntry.tsx`

```
$ npm run watch-client
```

### node server

Will compile the typescript into a server JS bundle.

Does not have hot reloading, you've got to kill and restart manually.

Access on `:3001`.

Entry is `src/serverApp/index.tsx`.

```
$ npm run dev-server
```

## Features

- typscript with `ts-loader` webpack plugin (no babel)
- node express server
- react
- redux
- styled components

## domain pattern

- each domain is a directory under `src`
- domains can only import from other domain roots
- circular imports are to be avoided (except typescript types)
- there might be a README in the root of a domain for stuff specific to it
