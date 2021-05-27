# ReadMe for Akkadu devs



## Requirement
* Typscript
* Vue Cli

**Package manager** : Yarn.


## How to start the project

* Installation : in the root folder run `yarn` 
<details>
  <summary> What it does :</summary>
  <p> - It installs packages in all the modules of the folder packages </p>
  <p> - It creates symlinks </p>
</details>

* Running a package : 
  * `cd packages`
  * `cd the_package_to_run`
  * `yarn start` (yarn start should start any of our packages)



## How to work with typescript dependency and react/vue dependency at the same time ?

Example: We want to work with `rsi-api-interpretation-player` and `rsi-api-vue`.

1- Go the folder `rsi-api-interpretation-player` and run `yarn start`

2- In a second terminal go to the folder `rsi-api-vue` and run `yarn start`

When making change to `rsi-api-interpretation-player` **typecript file** it will build new **javacripts files**. and that will update the **node_modules of the root folder**.

📌 Since `rsi-api-vue` dependencies are **symlinked** to the root node_modules, you will get the changes made on `rsi-api-interpretation-player` without the need to re-build anything.


## How to publish packages and when ? 

### When to publish packages ?

Packages can be published once your PR was reviewed and accepted.
<details>
    <summary> Lerna is not publishing ? </summary>
    <p>  Lerna will not release anything if the changes made were not pushed to github first.</p>
</details> 

### How to publish packages ?

Packages must be published form the `root` folder. with the command `year release` only. 

!! Do not publish package individually.


<details>
    <summary> Why ? </summary>
    <p>  When one package version change we want all the other packages having this dependency to also update and be published. Lerna does that for us.</p>
</details>

**Steps:**

1- Push you changes on Github.

2- `npm login` (if it's not already done)

3- Add `.npmrc` in the root folder : 
  ```
  //registry.npmjs.org/:_authToken=YOUR_NPM_AUTH_TOKEN
  ```

3- Once your PR is reviewed /accepted. Use the command :  `yarn release` in the root folder.


## Dev deployment:
**TypeScript**
* `rsi-api-base`
* `rsi-api-interpretation-manager`
* `rsi-api-interpretation-player`

**VueJs**
* `rsi-api-vue`
  * That package includes a VueJs test server you can run with `yarn start`.

**ReactJs**
* `rsi-api-react`
  * That package includes a ReactJs test server you can run with `yarn start`.

**!Important** `rsi-api-react-example` and `rsi-api-vue-example` are not made for development. 
You should not have to use them. To get a Vue/react preview see the comments above.

## Possible bugs
* The change made on `rsi-api-vue`, `rsi-api-interpretation-player` are not showing on `rsi-api-vue-example` on `rsi-api-react-example` during development ?
  * Theses two packages : `rsi-api-vue-example` and `rsi-api-react-example` are not made for development.
    * If you want to have a **vue preview** you should use `yarn start` in the package `rsi-api-vue`
    * If you want to have a **react preview** you should use `yarn start` in the package `rsi-api-react`
    * When releasing the packages, `rsi-api-react` and `rsi-api-vue` should be updated with the new packages on production.
       * if you still want to have a preview of the change you made on theses 2 packages, run `yarn pre-release`.