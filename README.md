## In Parent component:-

ParentComponent maintains a piece of state called dataFromChild to store the data received from the child component.
It defines a function handleDataFromChild that updates dataFromChild with the data received from the child component.
Renders ChildComponent and passes handleDataFromChild function as a prop named onData.
Renders the data received from the child component if it exists.

## chiled component:-

It maintains its own state called inputData to store the data entered by the user.
Provides an input field for the user to enter data and a button to send the data to the parent component.
When the button is clicked, it calls the onData function passed from the parent component, passing the inputData as an argument.
