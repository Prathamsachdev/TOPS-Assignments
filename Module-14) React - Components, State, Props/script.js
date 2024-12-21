// THEORY EXERCISE


/* Question 1: What are components in React? Explain the difference between functional components and class components. */
/** Answer: In React, components are the building blocks of the UI. They allow you to divide the UI into reusable pieces, each having its own logic and presentation. Components can be defined in two ways: **/

    /*** 1 - Functional Components: These are simple functions that accept props as an argument and return React elements. They are stateless and do not have lifecycle methods unless using hooks. ***/

        //---->>> Example:

            const Greeting1 = (props) => {
            return <h1>Hello, {props.name}!</h1>;
            };


    /***  2 - Class Components: These are ES6 classes that extend from React.Component and can have their own state and lifecycle methods. They use the render() method to return JSX. ***/

        //---->>> Example:

            class Greeting2 extends React.Component {
                render() {
                  return <h1>Hello, {this.props.name}!</h1>;
                }
              }


/* Question 2: How do you pass data to a component using props? */
/** Answer: Props (short for "properties") are used to pass data from a parent component to a child component in React. You can pass data by adding attributes to the child component. **/

    //---->>> Example: 

        // Parent component
        const Parent = () => {
            return <Greeting3 name="John" />;
        };
        
        // Child component
        const Greeting3 = (props) => {
            return <h1>Hello, {props.name}!</h1>;
        };
  

/* Question 3: What is the role of render() in class components? */
/** Answer: In class components, the render() method is used to describe what should be rendered on the screen. It must return a JSX element or null. The render() method is called automatically when the component's state or props change. **/
    
    //---->>> Example:

    class Greeting4 extends React.Component {
        render() {
          return <h1>Hello, {this.props.name}!</h1>;
        }
      }
      



/* LAB EXERCISE */
/** Task 1: Create a functional component Greeting that accepts a name as a prop and displays "Hello, [name]!". **/

    //---->>> Solution:

        import React from 'react';

        const Greeting5 = ({ name }) => {
        return <h1>Hello, {name}!</h1>;
        };

        export default Greeting5;


/** Task 2: Create a class component WelcomeMessage that displays "Welcome to React!" and a render() method. **/

    //---->>> Solution:
        
        jsx
        Copy code
        import React, { Component } from 'react';
        
        class WelcomeMessage extends Component {
          render() {
            return <h1>Welcome to React!</h1>;
          }
        }
        
        export default WelcomeMessage;






/* THEORY EXERCISE **/

/** Question 1: What are props in React.js? How are props different from state?
    
    /*** Answer:

    Props: Props are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the receiving component.
    State: State is used to store data that can change over time within a component. It is mutable and can be modified using the setState() method in class components or useState() hook in functional components.

    ***/




/** Question 2: Explain the concept of state in React and how it is used to manage component data. **/
    
    /*** Answer: 

    State is a built-in object in React that is used to store data that can change over time, and when state changes, the component re-renders. It helps in managing dynamic data within the component.

    ***/

    //--->>> Example:

        class Counter extends React.Component {
            constructor(props) {
            super(props);
            this.state = { count: 0 };
            }
        
            increment = () => {
            this.setState({ count: this.state.count + 1 });
            };
        
            render() {
            return (
                <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                </div>
            );
            }
        }
      

/** Question 3: Why is this.setState() used in class components, and how does it work? **/
        
    /*** Answer: this.setState() is used in class components to update the component's state. It ensures that React knows about the state change and triggers a re-render. When calling this.setState(), React merges the new state with the current state, and then it re-renders the component to reflect the updated state. ***/






/* LAB EXERCISE */

    /** Task 1: Create a React component UserCard that accepts name, age, and location as props and displays them in a card format. **/

        //---->>> Solution:

            import React from 'react';

            const UserCard = ({ name, age, location }) => {
            return (
                <div className="card">
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Location: {location}</p>
                </div>
            );
            };
            
            export default UserCard;


    /**  Task 2: Create a Counter component with a button that increments a count value using React state. Display the current count on the screen.**/

        //---->>> Solution:

            import React, { useState } from 'react';

            const Counter = () => {
            const [count, setCount] = useState(0);
            
            const increment = () => {
                setCount(count + 1);
            };
            
            return (
                <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                </div>
            );
            };
            
            export default Counter;
        