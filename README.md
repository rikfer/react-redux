# Assumptions and considerations
* The application was developed using create-react-app
* Typescript: Since it wasn't specified, I worked with both JavaScript and Typescript. To be more precise, most of the components, API calls and models were written using Typescript. The redux module was developed entirely with JavaScript.
* Redux: As the requirements were not very complex, I decided to try to avoid over-engineering and develop it in the simplest way possible. So, I didn't use createSelector or useSelector, for example, which are hooks that I use frequently.
* Test: As it was not specified which library to use, I decided to use mainly 3 libraries: Enzyme, React Testing Library and Jest. In this way, and for a matter of time, I did some simple examples in order to get a big picture of the libraries that I know. Also, because of the lack of time, I didn't test the redux modules, (which were not requirements either).
* Finally, I reused some scripts that I usually work with, such as axiosManager.ts, which is already developed to be implemented with Typescript interfaces.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
To run the build solution, then you can run `serve -s build` and view it opening [http://localhost:5000](http://localhost:5000)
