# Calculator Exercise

This is a basic calculator build using React, TypeScript and styled-components.

Version number: 72cf4fe47f85c39779267d0ecee07655a354e623

# Notes regarding the exercise:

The exercise has a time limit of 1 hour and 30 minutes. I ran out of time, and the app is not completed.

I used approximately an hour of extra time to finish setting everything up for submission as well as some other issues such as resizing the logo. I am happy delivering the vast majority of code to a client. With that being said, I would not be comfortable submitting an incomplete project to the client. The product is usable and in a working state, with all tests passing, but it would be prudent to the client to see if more time could be allocated to finalizing the project.

There are steps taken to prevent errors, such as repeated operator and equal sign presses, due to this functionality not being added. The codebase allows for this extra functionality to be included in the future.

The calculator allows for multiple operators and operands in one equation, and the calculation of the equation follows the DMAS/ MDAS order in BODMAS / PEMDAS i.e. 10 - 1 \* 5 = 5

# Installation:

Clone the repo to your computer.

In the root directory of the project, install the dependencies with `yarn` or `yarn install`.

# Available scripts:

You can run the following scripts from the root directory of the project

## `yarn start`

This will start the development mode of the app and is the easiest way to preview the app.

## `yarn run build`

Builds the app for production to the `build` folder.

### Note regarding serving the app locally:

You can serve this locally by using the `serve` package, however, it will need to be installed first:

`npm install -g serve`

`serve -s build`

You can now open the page at the address given to you, typically http://localhost:5000

## `yarn test`

Runs the Jest test units.
