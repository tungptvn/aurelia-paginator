# aurelia-paginator sample

This library is part of the [Aurelia](http://www.aurelia.io/) platform and contains the aurelia framework which brings together all the required core aurelia libraries into a ready-to-go application-building platform.
## Dependencies

* [aurelia-dependency-injection](https://github.com/aurelia/dependency-injection)
* [aurelia-binding](https://github.com/aurelia/binding)
* [aurelia-metadata](https://github.com/aurelia/metadata)
* [aurelia-templating](https://github.com/aurelia/templating)
* [aurelia-loader](https://github.com/aurelia/loader)
* [aurelia-task-queue](https://github.com/aurelia/task-queue)
* [aurelia-logging](https://github.com/aurelia/logging)
* [aurelia-path](https://github.com/aurelia/path)

## Used By

* [aurelia-bootstrapper](https://github.com/aurelia/bootstrapper)

## Platform Support

This library can be used in the **browser** only.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Install the client-side dependencies with jspm

  ```shell
  jspm install
  ```
4. To run app: [src here](https://github.com/indexzero/http-server)

  NodeJS - To start up a simple web server in the app folder, first globally install the http-server command with
  ```shell
  npm install http-server -g
  ```
  . (In some environments you many need to use sudo). Once that is installed, change directory to the starter kit folder. You can now spin up the server from within the folder with the following command
  ```shell
  http-server -o -c-1
  ```
![alt tag](http://oi65.tinypic.com/nqpn9k.jpg)
