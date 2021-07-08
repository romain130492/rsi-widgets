# RSI API Interpretation Player


### How to start the project

```
yarn start
```
it will fire `tsc --watch`, which will build the javascript files from the `lib` folder when making changes in src.

> For some reason running both scrips to build the .js and .css files takes so long for other modules to apply the changes, so we need to run the following command in a sapearate terminal to watch for css changes.

```
yarn start:css
```
When you run the above command, every time you change the `.scss` file in `src` diretory it will regenrate new `.css` file in the `dist` directory.

### Produciton
For production you can use `yarn build` which will use rollup to create the bundles, the generated code can be found in `dist` directory.
**Remember** `yarn build` will generate both the `.js` and `.css` files so no need to run other commands beside it.