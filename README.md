# Employee App Assignment

## How to run

1. (Optional) You can use VS Code dev container feature to set up environment (node.js and yarn version)
1. Open console in root folder
1. Go to server folder and run `yarn && yarn dev`
1. Go to client folder and run `yarn && yarn dev`
   - Or you can product-build and preview client app with `yarn && yarn build && yarn preview`

- To run tests, run `yarn && yarn test` in client folder

## Assumptions

1. Since the application contains personal information, I assume it will be hidden behind authorization and hence no SSR will be needed.
1. Building API server is not the focus, hence I am using json-server with mocked data.
1. No data caching needed, hence I will use `react-router` build-in data handling.

## Project Structure

- server
  - server.js - API server implementation
- client
  - core (application wide code and components)
  - features
    - [feature-folder] (feature specific code and components)
- models (application wide models)

## Possible Improvements

1. Pagination for the table. Virtualization is not enough performance-wise nor ux-wise.
1. Computing graph data in a worker thread for additional performance.
   - Or ideally getting aggregated data from the server.
1. Validating data coming from the API server.
1. Data caching and concatenating new employee data in place instead of refetching all the employees.
