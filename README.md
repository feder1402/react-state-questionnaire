# React State Questionnaire
Prototype implementation of a dynamic workflow engine takes a JSON specification of the workflow tasks and 
generates an implementaion using a state machine as the main execution engine.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Inspecting the generated state machine during execution
Pass the **debug=true** query parameter to open a second tab in the browser showing the generated state machine
and allowing the inspection of its run-time state. Changes in the application will be reflected in the inspector 
window and vice versa.

``http://localhost:3000/?debug=true``

### Seeing the events and state changes during execution
The prototype converts the state machine events and state into messages to Redux Devtools. 
To see them:
- Install Redux's DevTools, it if not already installed
- Open the Developer Tools in your browser
- Find and open the **redux** tab
