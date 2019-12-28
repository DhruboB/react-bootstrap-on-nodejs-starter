#!/bin/bash

# TODO Script needs to be enhanced based on various logic
echo "=====>> Removing exisitng local node modules , if any"
rm -rf node_modules
echo "=====>> node modules are successfully removed"
npm config set registry https://registry.npmjs.org/
npm config rm proxy
npm config rm https-proxy
echo "=====>> npm config are successfully set"
echo "=====>> npm installation is in progress"
npm i
echo "=====>> node modules including dev dependencies are installd"
echo "=====>> Starting DEV mode workspace. Open a browser at http://localhost:3000
to work in dev mode. Please kill the server when you are done with your changes ..."
npm run dev
