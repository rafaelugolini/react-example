# React Example

https://react-example-ayuajctpkc.now.sh/

An example of a react project using:

**UI**

- material-ui

**Store**

- redux
- redux-saga
- whatwg-fetch

**Test & Linter**

- enzyme
- eslint-config-airbnb
- fetch-mock
- redux-mock-store
- redux-saga-test-plan

## Running the app

Clone the repository, install the packages and run the app.

```sh
git clone https://github.com/rafaelugolini/react-example.git
cd react-example
npm install
npm start
```

The app is now accessible at <http://localhost:3000>

### Containers

<<<<<<< HEAD
[main](./src/containers/main)
=======
[main](../src/containers/main)
>>>>>>> 02deda603e89e2590991bb4398853cd0155c6898

The app has only one container which access the store and dispatch the actions

### Components

<<<<<<< HEAD
[profileList](./src/components/profileList)

This component is called in the main container and it renders a profile component for each `stock`

[profile](./src/components/profile)

Displays the stock information and renders the [profileDetails](./src/components/profileDetails/) with more details

[profileDetails](./src/components/profileDetails)

Displays `stock` details received from [profile](./src/components/profile/)

## Tests

All of the tests are located under [\_\_test\_\_](./src/__test__/) and its mocked data located under [\_\_mocks\_\_](./src/**mocks**)
=======
[profileList](../src/components/profileList)

This component is called in the main container and it renders a profile component for each `stock`

[profile](../src/components/profile)

Displays the stock information and renders the [profileDetails](../src/components/profileDetails/) with more details

[profileDetails](../src/components/profileDetails)

Displays `stock` details received from [profile](../src/components/profile/)

## Tests

All of the tests are located under [\_\_test\_\_](../src/__test__/) and its mocked data located under [\_\_mocks\_\_](../src/**mocks**)
>>>>>>> 02deda603e89e2590991bb4398853cd0155c6898

To run the tests

```sh
npm test
```

To see the coverage

```sh
npm test -- --coverage
```

## Deploy

I'm using [now](https://zeit.co/now) from [zeit.co](https://zeit.co)

```sh
npm run deploy
```
