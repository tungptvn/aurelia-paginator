# aurelia-paginator

A pagination plugin for [Aurelia](http://aurelia.io)

# Installation


#### Install via JSPM
Go into your project and verify it's already `npm install`'ed and `jspm install`'ed. Now execute following command to install the plugin via JSPM:

```
jspm install github:tungptvn/aurelia-paginator
```

#### Migrate from aurelia-app to aurelia-app="main"
You'll need to register the plugin when your aurelia app is bootstrapping. If you have an aurelia app because you cloned a sample, there's a good chance that the app is bootstrapping based on default conventions. In that case, open your **index.html** file and look at the *body* tag.
``` html
<body aurelia-app>
```
Change the *aurelia-app* attribute to *aurelia-app="main"*.
``` html
<body aurelia-app="main">
```
The aurelia framework will now bootstrap the application by looking for your **main.js** file and executing the exported *configure* method. Go ahead and add a new **main.js** file with these contents:
``` javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(a => a.setRoot('app', document.body));
}

```

#### Load the plugin
During bootstrapping phase, you can now include the validation plugin:

``` javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('tungptvn/aurelia-paginator'); //Add this line to load the plugin

  aurelia.start().then(a => a.setRoot('app', document.body));
}
```
# Use :
ViewModel (.js)

``` javascript
export class TestPagination{
    constructor() {
      this.current=1;
      this.total=1234;
      this.itemperpage=15;
      this.pagesize=6;

    }

}

```
Use in view

``` html

 <template>
  <section>
    <h2>test pagination</h2>
    <form action="">
      <div class="form-group">
        <label for=""></label>
        <input type="text" class="form-control" id="" placeholder="" value.bind="itemperpage">
      </div>
      <div class="form-group">
        <label for=""></label>
        <input type="text" class="form-control" id="" placeholder="" value.bind="total">
      </div>
    </form>
    <pagination page-size.bind="pagesize" total.bind="total" item-per-page.bind="itemperpage" current-page.bind="current"></pagination>
    ${current}

  </section>
</template>

```

##Documentation
## Dependencies


* [aurelia-framework]



## Used By

This library isn't used by Aurelia. It is an optional plugin.

## Platform Support

This library can be used in the **browser**.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

	```shell
	npm install
	```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

	```shell
	npm install -g gulp
	```
4. To build the code, you can now run:

	```shell
	gulp build
	```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

	```shell
	npm install -g karma-cli
	```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

	```shell
	npm install -g jspm
	```
3. Install the client-side dependencies with jspm:

	```shell
	jspm install
	```

4. You can now run the tests with this command:

	```shell
	karma start
	```
