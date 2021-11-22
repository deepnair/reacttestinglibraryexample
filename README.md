## React Testing Library in Next with Typescript example

This is based on a tutorial by Laith Harb at [React Testing Library Crash Course](https://www.youtube.com/watch?v=GLSSRtnNY0g) except it is done on Next.js with Typescript instead of create-react-app with plain javascript.

### Approach

1. First create the next app along with the necessary pre-installed react-testing library and jest with the following: 
    ```
    npx create-next-app reacttestinglibrary --example with-jest with-jest-app
    ```
    This prebuilds the __tests__ folder in the root and the necessary jest.config.js and the jest.setup.js

1. For the purpose of this tutorial delete all the sample tests written in the tests app. Delete everything inside the index.js.

1. Create a tsconfig.json file in the root by running:
    ```
    touch tsconfig.json
    ```
    Run the following command to further add typescript:
    ```
    yarn add --dev typescript @types/react
    ```
1. Run npm run dev so that the tsconfig.json and the next-env.d.ts are autopopulated.
1. Change the index.js to index.tsx.
1. Write comments of all the tests that need to be run. This could also serve as documentation and specifications.
1. Create a beforeEach, which takes a function that sets getByTestId which is destructured from the component that is rendered with the {render} imported from @testing-library/react.
1. Write out the tests. Import fireEvent for the clicks. For changing inputs use fireEvent.change which takes the element, and an object that takes target, which in turn takes a value.
1. Run tests with npm run test. Write tests and then the code to make it pass. 
1. At the end execute npm run dev and test it if it runs in practice.
