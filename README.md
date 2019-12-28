<p align="center">
    <img src="https://img.shields.io/badge/platform-node-lightgrey.svg?style=flat" alt="platform">
    <img src="https://img.shields.io/badge/app-reactjs-blue.svg?style=flat" alt="React JS">
    <img src="https://img.shields.io/badge/license-Apache2-red.svg?style=flat" alt="Apache 2"> 
</p>

# Create and deploy a Node.js React application

React is a popular framework for creating user interfaces in modular components. In this sample application, you will create a web application using Express and React to serve web pages in Node.js, complete with standard best practices, including a health check and application metric monitoring.

This app contains an opinionated set of components for modern web development, including:

- [React](https://react-bootstrap.github.io/)
- [Webpack](https://webpack.github.io/)
- [Sass](http://sass-lang.com/)
- [Styled-Components](https://www.styled-components.com//)

## Steps

You can [build it locally](#building-locally) by cloning this repo first. Once your app is live, you can access the `/health` endpoint to build out your cloud native application.

### Building Locally

To get started building this application locally, you can either run the application natively or use Cloud runtime from any Cloud Provider for containerization and easy deployment.

#### Native Application Development

Install the latest [Node.js](https://nodejs.org/en/download/) 8.17.0+ LTS version.

Once the Node toolchain has been installed, you can download the project dependencies with:

```bash
npm install
```

Modern web applications require a compilation step to prepare your E6/ES2015 (or higher) JavaScript or Sass stylesheets into compressed JavaScript ready for a browser. Webpack is used for bundling your JavaScript sources and styles into a `bundle.js` file that your `index.html` file can import.

To run your application locally:

```bash
npm run start
```

Your application will be running at `http://localhost:3000`. You can access the `/health` endpoint at the host.

## License

This sample application is licensed under the Apache License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1](https://developercertificate.org/) and the [Apache License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache License FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
