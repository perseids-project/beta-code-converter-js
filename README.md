# Beta Code Converter

This is an interactive website for converting between Greek unicode and beta code.

## Try it Out

[https://apps.perseids.org/beta-code/](https://apps.perseids.org/beta-code/)

### How to Use

Type a word in one of the columns and it will convert it to the other format.

### Beta code

Beta code is a system for encoding ancient Greek text using ASCII characters.
For more information, see:

- [https://en.wikipedia.org/wiki/Beta\_Code](https://en.wikipedia.org/wiki/Beta_Code)
- [http://www.tlg.uci.edu/encoding/](http://www.tlg.uci.edu/encoding/)

## Installation

`yarn install`

## Running the development server

`yarn start`

## Building for deployment

Before creating a production build you need to know the path where it will be accessed.
Then run the command `PUBLIC_URL='./path/of/app' yarn build`.
This will generate a set of static files in the `build/` directory that you can serve.

For example, if you want to deploy it at `www.example.com/` then run `PUBLIC_URL='./' yarn build`.
If you want to deploy it at `www.example.com/beta` then run
`PUBLIC_URL='./beta' yarn build`.

## Running tests

`yarn test`

## Linting the code

`yarn lint`

## Deploying a new version to github.io

`yarn deploy-github`

## Deploying a new version to Perseids

`yarn deploy-perseids`
