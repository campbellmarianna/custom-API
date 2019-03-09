# Deploy Docs

This app is intended to help developer easily find commands they need to deploy their applicaiton such as Heroku and Flask.
**_Deploy Docs_** was created with Node, Express, JWT for Authentication and Bootstrap.

Website: https://deploy-docs.herokuapp.com/readmes/index

## Running Locally
Make sure you have [Node.js](http://nodejs.org/) >= 10.11.0 installed.

```sh
git clone https://github.com/campbellmarianna/custom-API.git
cd custom-API
npm i && nodemon
```

The app should now be running on [localhost:3000](http://localhost:3000/).

A user can view readmes for deployment software and post READMEs.

```
Index - https://deploy-docs.herokuapp.com/readmes/index
Create - https://deploy-docs.herokuapp.com/readmes/new
Show - https://deploy-docs.herokuapp.com/readmes/:id
Edit -https://deploy-docs.herokuapp.com/readmes/:id/edit
Delete - https://deploy-docs.herokuapp.com/readmes/:id
```

## Installing
Mocha and Chia will need to be installed for running tests.

```sh
npm install mocha
npm install chia
```

## Running the tests

Make sure you have [Mocha](https://mochajs.org/) & [Chia](https://www.chaijs.com/) installed.

Inside the project directory type `mocha` to run the tests.
