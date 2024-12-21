/* THEORY EXERCISE */

    /** Question 1: What are the different ways to style React components? **/

        /*** 
        Answer: There are several ways to style React components:
        ***/

            // 1. Inline styles : You can directly apply styles in the component using the style attribute, where you pass a JavaScript object with camelCased properties.

            //---->>> Example:

                const MyComponent = () => {
                    const style = { color: 'red', fontSize: '20px' };
                    return <div style={style}>Hello, World!</div>;
                };

            // 2. CSS Stylesheets: You can link external CSS files and apply styles globally.

            //---->>> Example:

                import './App.css';

                const MyComponent = () => {
                return <div className="my-class">Hello, World!</div>;
                };
            
            // 3. CSS Modules: Allows local scoping for CSS, ensuring that styles are applied only to the component they are imported into.

            //---->>> Example:

                import styles from './App.module.css';

                const MyComponent = () => {
                return <div className={styles.myClass}>Hello, World!</div>;
                };
            

            // 4.Styled-Components: A library that allows you to write actual CSS within JavaScript. The styles are scoped to the component.

            //---->>> Example:
                
                import styled from 'styled-components';

                const Button = styled.button`
                background-color: blue;
                color: white;
                `;
                
                const MyComponent = () => {
                return <Button>Click Me!</Button>;
                };
            

            // 5. SASS/SCSS: An extension of CSS that allows for variables, nesting, and other features. You can use SASS with React by setting up your project with appropriate configurations.

    
    /** Question 2: What is React Router? How does it handle routing in single-page applications? **/
    
        /*** 
        Answer: 
            React Router is a library used to handle navigation in React applications. It allows us to create single-page applications (SPAs) by managing different views or components without reloading the entire page. React Router works by synchronizing the URL with the displayed view, allowing you to map specific URL paths to specific React components. When the URL changes, React Router renders the corresponding component, updating the view without refreshing the entire page.      
            It uses the browser’s history API to manipulate the URL and ensure smooth navigation between different views in a single-page app.
        ***/


    /** Question 2: Explain the difference between BrowserRouter, Route, Link, and Switch components in React Router. **/

        /***
        Answer:
        ***/

            //1 - BrowserRouter: This component wraps the entire app and uses the HTML5 history API to keep the UI in sync with the URL. It is the parent component for routing and should be placed at the root level of the application.

                //---->>> Example:

                import { BrowserRouter as Router } from 'react-router-dom';

            //2 - Route: The Route component is used to define a path and the component that should be rendered when that path matches the current URL. It renders a specific component based on the URL.

                //---->>> Example:

                /**  <Route path="/about" component={About} />   **/

            //3 - Link: The Link component is used to navigate between different routes. It behaves like an anchor tag (<a>) but does not reload the page. Instead, it uses the React Router to change the view.

                //---->>> Example:

                /**  <Link to="/about">About</Link>   **/

            //4 - Switch: The Switch component is used to wrap multiple Route components. It renders only the first matching Route. This ensures that only one route is rendered at a time, preventing multiple routes from being matched simultaneously.

                //---->>> Example:

                /** 
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>
                */
              


/*  Lab Exercise 1: Routing with React Router  */

    /** Task: Set up a basic React Router with three routes: Home, About, and Contact pages. Display the appropriate content based on the URL and create a navigation bar using React Router's Link component. **/
    
    //---->> Solution:

        import React from 'react';
        import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
        
        // Home Component
        const Home = () => {
        return <h1>Welcome to the Home Page!</h1>;
        };
        
        // About Component
        const About = () => {
        return <h1>About Us</h1>;
        };
        
        // Contact Component
        const Contact = () => {
        return <h1>Contact Us!</h1>;
        };
        
        // App Component with Routing Setup
        const App = () => {
        return (
            <Router>
            {/* Navigation Bar */}
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/contact">Contact</Link>
            </nav>
        
            {/* Routing Configuration */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
            </Router>
        );
        };
        
        export default App;


    // Explanation:

        // BrowserRouter (Router): Wrapping the app to enable routing.
        // Link: Used to create navigation links.
        // Route: Defines paths for each page.
        // Switch: Ensures that only one route is rendered at a time.
        // Pages: Home, About, and Contact are rendered based on the URL.


/* Lab Exercise 2: Routing with Advanced Styling Using Styled-Components */

    /** Task: Set up a basic React Router with Home, About, and Contact routes. Use Styled-Components for advanced styling to create styled navigation links and content components. **/

        //---->>> Solution:

            import React from 'react';
            import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
            import styled from 'styled-components';

            // Styled Components
            const Nav = styled.nav`
            background-color: #333;
            padding: 1rem;
            `;

            const StyledLink = styled(Link)`
            color: #fff;
            margin-right: 1rem;
            text-decoration: none;
            
            &:hover {
                text-decoration: underline;
            }
            `;

            const PageContainer = styled.div`
            padding: 2rem;
            font-family: Arial, sans-serif;
            `;

            const Title = styled.h1`
            color: #2c3e50;
            `;

            // Home Component
            const Home = () => {
            return <PageContainer><Title>Welcome to the Home Page!</Title></PageContainer>;
            };

            // About Component
            const About = () => {
            return <PageContainer><Title>About Us</Title></PageContainer>;
            };

            // Contact Component
            const Contact = () => {
            return <PageContainer><Title>Contact Us!</Title></PageContainer>;
            };

            // App Component with Routing and Styling
            const App = () => {
            return (
                <Router>
                {/* Styled Navigation Bar */}
                <Nav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/about">About</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                </Nav>

                {/* Routing Configuration */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                </Router>
            );
            };

            export default App;

        // Explanation:

        //-- Styled Components:
        
            //--- Nav: A styled navigation bar with a dark background.
            //--- StyledLink: Styled link components for navigation with hover effects.
            //--- PageContainer and Title: Used for styling the content of each page with padding and colors.
        
        //-- React Router Setup: Same as before, but the navigation links and pages are styled using Styled-Components.