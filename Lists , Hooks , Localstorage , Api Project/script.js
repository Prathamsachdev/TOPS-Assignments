/* Lists and Keys in React */

    /** THEORY EXERCISE **/

        // Question 1: How do you render a list of items in React? Why is it important to use keys when rendering lists?
        
        /***Answer: To render a list of items in React, you use the map() function to iterate over an array and return a JSX element for each item. Keys are important when rendering lists to help React identify which items have changed, are added, or removed. This improves the performance and ensures efficient updating of the UI.***/

        //---->>> Example:

        const fruits = ['Apple', 'Banana', 'Cherry'];
        const fruitList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

        
        
        // Question 2: What are keys in React, and what happens if you do not provide a unique key?

        /*** Answer: Keys are unique identifiers given to elements in a list to help React efficiently update the DOM. If keys are not unique or not provided, React will have difficulty tracking changes, leading to incorrect re-renders and performance issues.***/

    
    /** LAB EXERCISE **/

        // Task 1: Create a React component that renders a list of items (e.g., a list of fruit names). Use the map() function to render each item in the list.
    
        //---->>> Solution:

        const FruitList = () => {
            const fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];
          
            return (
              <ul>
                {fruits.map((fruit, index) => (
                  <li key={index}>{fruit}</li>
                ))}
              </ul>
            );
          };
          
          export default FruitList;

          
          // Task 2: Create a list of users where each user has a unique id. Render the user list using React and assign a unique key to each user.

          //---->>> Solution:

          const UserList = () => {
            const users = [
              { id: 1, name: 'John Doe' },
              { id: 2, name: 'Jane Smith' },
              { id: 3, name: 'Alice Johnson' },
            ];
          
            return (
              <ul>
                {users.map((user) => (
                  <li key={user.id}>{user.name}</li>
                ))}
              </ul>
            );
          };
          
          export default UserList;
          
          
/* Hooks (useState, useEffect, useReducer, useMemo, useRef, useCallback) */

    /** THEORY EXERCISE **/
    
        // Question 1: What are React hooks? How do useState() and useEffect() hooks work in functional components?

        /*** Answer: React Hooks are functions that allow functional components to use React features like state, lifecycle methods, and context.

            useState(): Used to add state to functional components. It returns the current state and a function to update it.
            useEffect(): Used to perform side effects like data fetching, subscriptions, or DOM manipulation. It runs after the render and can optionally depend on variables.

        ***/


        // Question 2: What problems did hooks solve in React development? Why are hooks considered an important addition to React?
        
        /*** Answer: Hooks eliminated the need for class components to manage state and lifecycle, simplifying React code. They make code reusable through custom hooks and reduce boilerplate, enhancing the developer experience. ***/
        




        // Question 3: What is useReducer? How is it used in a React app?
        
        /*** Answer: useReducer is a hook for managing state logic that involves multiple sub-values or complex transitions. It works similarly to Redux reducers and is used by defining a reducer function and an initial state. ***/
        




        // Question 4: What is the purpose of useCallback & useMemo hooks?
        
        /*** Answer:
        
        useCallback: Prevents re-creation of a function on every render, improving performance.
        useMemo: Caches a computed value and recalculates it only when dependencies change.

        ***/




        //Question 5: What’s the Difference between the useCallback & useMemo hooks?
        
        /*** Answer:
        
        useCallback: Returns a memoized function.
        useMemo: Returns a memoized value.

        ***/




        // Question 6: What is useRef? How does it work in a React app?
        
        /*** Answer: useRef provides a way to access and persist a mutable value that does not cause re-renders when updated. It is often used for accessing DOM elements or storing instance variables. ***/




    /** LAB EXERCISE **/

        // Task 1: Create a functional component with a counter using the useState() hook. Include buttons to increment and decrement the counter.
        
        //---->>> Solution:
    
        const Counter = () => {
        const [count, setCount] = React.useState(0);
        
        return (
            <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        );
        };
        
        export default Counter;



        // Task 2: Use the useEffect() hook to fetch and display data from an API when the component mounts.
        
        //---->>> Solution:
    
        import React, { useEffect, useState } from 'react';
        
        const FetchData = () => {
        const [data, setData] = useState([]);
        
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json));
        }, []);
        
        return (
            <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
            </ul>
        );
        };
        
        export default FetchData;



        // Task 3: Create a React app with useSelector & useDispatch.
        
        //---->>> Solution:

        This requires a Redux setup.
        
        Use useSelector to access the Redux state.
        Use useDispatch to dispatch actions.
        Task 4: Create a React app to avoid re-renders using useRef.
        Solution:
        
        jsx
        Copy code
        const AvoidRerenders = () => {
        const renderCount = React.useRef(0);
        
        React.useEffect(() => {
            renderCount.current += 1;
        });
        
        return (
            <div>
            <h1>Render Count: {renderCount.current}</h1>
            </div>
        );
        };
        
        export default AvoidRerenders;



/* LocalStorage */

    /** Theory Questions **/

        // Question 1: What is LocalStorage in JavaScript?

        /*** Answer: LocalStorage is a web storage API provided by browsers that allows you to store key-value pairs in a user's browser. Data stored in LocalStorage persists even after the browser is closed, unlike session storage. ***/


        // Question 2: How can you use LocalStorage in a React app?

        /*** Answer: LocalStorage can be accessed in React using window.localStorage. You can store, retrieve, or remove data using methods like:

            localStorage.setItem(key, value) to store data.
            localStorage.getItem(key) to retrieve data.
            localStorage.removeItem(key) to delete specific data.
        ***/

    /** LAB EXERCISE **/

        // Task 1: Create a React component that stores and retrieves a user’s name in LocalStorage.
        
        //---->>> Solution:

        //------ Go to the folder Localstorage-exercise ------//