# ReadMe for Akkadu devs



## Requirement
* Typscript
* Vue Cli

**Package manager** : Yarn.


## How to start the project

*  **Installation** : in the root folder run:
* 1- `yarn install` 
<details>
  <summary> What it does :</summary>
  <p> - It installs packages in all the modules of the folder packages </p>
  <p> - It creates symlinks </p>
</details>

* 2- `yarn build` 🚨 **!! Important**

* Running a package : 
  * `cd packages`
  * `cd the_package_to_run`
  * `yarn start` (yarn start should start any of our packages)



3- When **Publishing** you will need to add an `.env file` in the root folder, with your AWS access keys. See the .env.example. 🚨

## How to work with typescript dependency and react/vue dependency at the same time ?

Example: We want to work with `rsi-interpretation-player` and `rsi-vue`.

1- Go the folder `rsi-interpretation-player` and run `yarn start`

2- In a second terminal go to the folder `rsi-vue` and run `yarn start`

When making change to `rsi-interpretation-player` **typecript file** it will build new **javacripts files**. and that will update the **node_modules of the root folder**.

📌 Since `rsi-vue` dependencies are **symlinked** to the root node_modules, you will get the changes made on `rsi-interpretation-player` without the need to re-build anything.


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
* or you can also simply do `npm login` in the terminal and you should not have to add the .npmrc file, if you are a collaborator of akkadu.

3- Once your PR is reviewed /accepted. Use the command :  `yarn release` in the root folder.

* Once released it should push the new json packages version to your current branch.

## Dev deployment:
**TypeScript**
* `rsi-base`
* `rsi-interpretation-manager`
* `rsi-interpretation-player`

> To regenerate CSS files in dist dir after changing .scss file you can run `yarn start:css` in another terminal tab.

**VueJs**
* `rsi-vue`
  * That package includes a VueJs test server you can run with `yarn start`.

**ReactJs**
* `rsi-react`
  * That package includes a ReactJs test server you can run with `yarn start`.

**!Important** `rsi-react-example` and `rsi-vue-example` are not made for development. 
You should not have to use them. To get a Vue/react preview see the comments above.

## Possible bugs
* The change made on `rsi-vue`, `rsi-interpretation-player` are not showing on `rsi-vue-example` on `rsi-react-example` during development ?
  * Theses two packages : `rsi-vue-example` and `rsi-react-example` are not made for development.
    * If you want to have a **vue preview** you should use `yarn start` in the package `rsi-vue`
    * If you want to have a **react preview** you should use `yarn start` in the package `rsi-react`
    * When releasing the packages, `rsi-react` and `rsi-vue` should be updated with the new packages on production.
       * if you still want to have a preview of the change you made on theses 2 packages, run `yarn pre-release`.




* The packages are not symlinked together ? I have some dependencies error,
  * When setting up the project, did you run in the root `yarn install` and `yarn build` ?
  * If yes, you can manually create symlinks.
<details>
    <summary> How to add one of our package to a dependency of an other package using symlinks ? </summary>
    <p>If we wanted to add the my-design-system-button as a dependency to our my-design-system-form and have Lerna symlink them, we can do so by cd into that package</p>
    <p></p>
    <p><i> cd my-design-system-form</i> </p>
    <p>and then running the following:</p>
    <p> <i> lerna add @my-scope-name/design-system-button --scope=@my-scope-name/my-design-system-form </i><p>
    <p>This will update the package.json of @my-scope-name/my-design-system-form.</p>
</details>




