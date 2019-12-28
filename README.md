<p align="center">
    <img src="https://img.shields.io/badge/platform-node-green.svg?style=flat" alt="platform">
    <img src="https://img.shields.io/badge/app-reactjs-blue.svg?style=flat" alt="React JS">
    <img src="https://img.shields.io/badge/license-Apache2-red.svg?style=flat" alt="Apache 2">
    <img src="https://img.shields.io/badge/packaging-webpack-9cf.svg?style=flat" alt="Webpack"> 
</p>

# Create and deploy a Node.js React Bootstrap application

React is a popular framework for creating user interfaces in modular components. Specifically, after Facebook announced it as open source library in year of 2013.

In this sample application, we provide a web application using Express and React to serve web pages in Node.js, complete with standard best practices, including a health check and application metric monitoring.

This app contains an opinionated set of components for modern web development, including:

- [React](https://react-bootstrap.github.io/)
- [Sass](http://sass-lang.com/)
- [Styled-Components](https://www.styled-components.com/)
- [Webpack](https://webpack.js.org/)

## Steps

You can [build it locally](#building-locally) by cloning this repo first. Once your app is live, you can access the `/health` endpoint to build out your cloud agnostic application.

### Building Locally

To get started building this application locally, you can either run the application natively or use Cloud runtime from any Cloud Provider for containerization and easy deployment.

### Native Application Development

Install the latest [Node.js](https://nodejs.org/en/download/) 8.17.0+ LTS version. We are not using latest to make it compatible with node js version with available Node container from Docker Hub. Otherwise, latest version should also be fine.

Once the GIT has been installed, you can download the project with:

```bash
git clone git@github.com:DhruboB/react-bootstrap-on-nodejs-starter.git
```

Once you are set to start development of React JS app, just run below command in your local system to set up your dev workspace

```bash
npm run setup
```

This will set up everything for you in local system and trigger a development mode server. Your application will be running at `http://localhost:3000`. You can access the health endpoint at `http://localhost:3100/health`. If you don't like to continue any development work now, then just kill the running console command by using ctrl+C.

Wnat to explore the application locally ? Run following command and open the above url in a browser, otherwise go to [developer section](#developer-guide) section.

```bash
npm run start
```

Modern web applications require a compilation step to prepare your E6/ES2015 (or higher) JavaScript or Sass stylesheets into compressed JavaScript ready for a browser. Webpack is used for bundling your JavaScript sources and styles into a `bundle.js` file that your `index.html` file can import.

Note: This is not tutorial of React JS or Node JS or any other technology. Primary purpose of this is to help you quickly kick start a React JS web app with all possible market standard set up. This only helps to save your time and accelerates your learning curve.

### Developer Guide

If you are in this section then you are ready to kick start reactjs development with nodejs server and necessary framework and tools. Assuming you have already set up development workspace as mentioned above, else run the command and continue as shown below

```bash
npm run setup
```

If you killed the server before asa instrcuted, you can continue with below command each time when you feel to start developing

```bash
npm run dev
```

Above command will create a running nodejs server in development mode and UI access at `http://localhost:3000`. It is expected that if you make any changes to Source Code , change will imemdiatly(circa) be reflected on running browser. Not only this, dev mode will automatically takes care of compiling your source code and production level packaging. Webpack is used to organize, compress and create static output assets as mentioned above. This considerably improves UI experience.

### Naming Convention - File

**js** - Only use this file extension when you use javascript syntax only.

**jsx** - Use this extension when you mix up javascript and xml code e.g. React JS component.

**json** - Use this extension to store config or user data. It is also wise to use this while exchanging data with different technical components. It is almost standardized now.

**\*.test.js** - Use this extension for all your test scripts including integration and unit testing.

**css** - If you want to stick to old stylesheet use this.

**scss** - Like to use enhanced and modern way of wrtting stylesheet files, feel free to use this extension.

### File & Folder Structure

There are few important parent folders under root of this project as listed below...

**client** - This folder is the client UI pages which will interact with backend server either locally or remotely. Thereofre, this folder is actual root of reactjs development and contain all source code & assets related to UI development.

**server** - This folder holds all source code related to ui backend/runtime a.k.a server serving ui features only. For example, this can hold any mock API implementation.

**test** - This folder contains source code related to integration testing of client and server side of the app.

**Files** under root, client & server directories of the projects are all standard files and you will find extensive information in internet to find out the purpose of those files. Now lets discuss about few sub-folders under client and server.

**clinet/app** - this folder contains all ReactJS assets starting compionents, continers, forms, pages etc. and ase well as the starting App.jsx file.

**clinet/assets** - This folder contains all UI assets e.g. images, css, scss files or any other static assets which are not directly being used by React jsx components.

**clinet/app/components** - This directory holds all React JS custom components e.g. navbar, jumbotron, button etc.

**clinet/app/config** - This folder contains a config.js file where developer can define any dynamic configurable attributes which are envirnment specific.

**clinet/app/containers** - This folder holds custom containers of a page e.g. Layout or any other type of hidden React JS container.

**clinet/app/forms** - This directory contains custom FORMs where UI users are supposed to enter data, e.g. login form.

**clinet/app/images** - This folder contains custom react components created from image(s) or any background holder(s).

**clinet/app/pages** - This directory keeps main page components built using one or more default or custom React components. e.g. Home, About, Contact etc.

### Best Practices & Standards

It is always wise to follow best practices which are proven in industries and battle tested. There are few standard development patterns and standard which ease developer's experience if followed. Below is a list of few such best practices

- Try to follow DRY principle and Do not Repeat yourself while creating or using any piece of source code.
- Use YAGNI principle wisely where ever possible.
- Always, consider scalability and dynamicity of your code and execution components while coding. Hence, try to use Environment Variables as much as possible for variables that may change across environments or based on other criteria.
- Create re-usable components often when you feel that other team memebrs may need it for developing future/other components.
- Try to use TDD methodology.
- Often think from overall integration perspective and impact of your deliverable on the same.
- All Source code must be managed by version control tool. Better to adhere standard DevOps platform across organization.
- Use local feature branch for your daily development activities.
- Often upload changes to GIT remote repository, try to do it daily basis before you log off.
- All Source code must be managed by version control tool. Better to adhere standard DevOps platform across organization.
- Always provide meaningful feature specific comment while committing changes to version control.
  Start comment with a standard format e.g. “<JIRA Tracking ID> actual comment”. This is required for traceability matrix.
- set up CI/CD pipleine for your project and enhance `Jenkinsfile` as per your project requirement.
- Integrated code review, quality and security analysis process should be in place through automated and periodic DevOps pipelines.
- Analysis report must be reported to all stakeholders including developers for further action.
- Not only source code, but also all deployable artifacts should be version controlled. However, these binaries should be managed by artifact management tool e.g. Artifactory.
- All feature branch and associated development environment set up should be self-service.
- Pull, merge or rebase often before making any further changes in your local branches.
- Try to commit related changes at once. Likewise, different type of, feature specific changes should have different commit points.
- Feel free to commit and persist your changes often. However, do not commit incomplete work.
- Do not upload any additional files as backup which are not allowed to go to Production environment.
  Use repo specific ignore file mechanism (.gitignore for GIT) to ignore all unnecessary files which need not to be uploaded to remote repo.
- All dependencies should be configurable and plugged into source code only. Do not assume that those dependencies will be available in another environment.
  Use meaningful tagging for any release from main branches e.g. master, release, develop.
- Master branch must be always sync with Production.
  Similarly, source code of other branches must be in sync with corresponding environments where binary artifacts generated from the source code are deployed.
- While submitting merge request (MR), try to select All team memebrs or at least multiple reviewers, possibly ALL from predefined reviewer list.
- Write Unit test cases and cover all the possible scenarios before coding the actual functionality. Better to adhere TDD or BDD approach.

### Testing Guideline

It is usual practice that developers write test scripts after developing functional code. However, it is recommended to addeher `TDD` i.e. Test Drive Development practice and write test script with all possible edge case scenario even before writting functional implementation.

Thereofer, all necessary supporting test module and framework is pre-installed. Just start writting your server or ui-client side unit test cases under individual folder with `\*.test.js` extension.

It is advised for UI client code to create test file with same name, for example if you are writting a component `Home.jsx` then create `Home.test.js` file to write unit testcases under same directory.

In case of unit testing of server side code, there is a test folder `server/test/` already provided where you can create equivalent folder structure to replicate unit test scripts with `\*.test.js` extension.

`Integration Testing` - write all integration testcases under `test/client/` or `test/server/` folder corresponding clinet or server side of the app as requried.

## License

This sample application is licensed under the Apache License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1](https://developercertificate.org/) and the [Apache License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache License FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
