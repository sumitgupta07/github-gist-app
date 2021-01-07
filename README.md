# Github Gist API Demo

React SPA demo to show gists by username for Github Gist users.

## Description

In this project, three features are implemented:
1. Search: When a user enters a username, it should be able to get a full list of public Gists by that user. 
2. Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and JavaScript files, the gist should have the respective tags/badges). 
3. Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.

In the project directory, you can run:

### Tech Stack used for the project

1. Create React App: To setup initial application with ready to use React, bundling and other functions out of the box
2. react-router-dom: To handle routing between different pages
3. Redux libraries: Redux and react-redux for state management, redux-thunk for asynchronous actions like Github Gist API calls
4. Axios to make rest api calls to Github Gist API
5. Bootstrap: For basic styling of components

## Demo hosted on Vercel 
Application is deployed on vercel hosting service and can be accessed at:
* Demo URL: https://github-gist-app.vercel.app


### Steps to setup locally
1. Clone the repository using below command
```
git clone https://github.com/sumitgupta07/github-gist-app.git
```
2. Run below commands on root folder of cloned repo
```
$ cd github-gist-app
$ npm install
```
3. It will install project dependencies
4. Run below command to make production build
``` 
$ yarn build
or
$ npm run build
```
5. To start the application, run these commands
``` 
$ yarn serve
or
$ npm run serve
```
6. Open http://localhost:5000 in any browser to access the app locally


### Potential Improvements

1. Code splitting to reduce bundle size using Suspense/lazy mechanism.
2. Pre-rendering using Next/Gatsby to improve SEO. Our app is not behind any login system, so it is good to pre-render for better SEO. Next also provides splitting out of the box.
3. Rendering a large number of gists could be slower. Pagination or infinite scrolling (windowing) can be implemented to improve performance.
4. Search box getting empty when returning from Forks link. It can be filled from pathname from the url if needed.
5. Unit/e2e testing using jest/Enzyme/Cypress.
6. Better styling. I have used basic level of styling.


