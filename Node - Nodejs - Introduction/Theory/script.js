// Theory Assignment

/* 
    History and Evolution of Node.js :

    - Node.js was created by Ryan Dahl in 2009 as a response to the limitations of traditional server-side technologies like Apache. 
    Dahl wanted a solution that could handle asynchronous, non-blocking operations efficiently, leading to the creation of Node.js, 
    which is built on the V8 JavaScript engine.
*/

/* Defination of Node js : 

    Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code 
    outside the browser. It is built on Chrome’s V8 engine and uses an event-driven, non-blocking I/O model, making it lightweight, 
    efficient, and ideal for scalable web applications.

*/

/* Architecture of Node.js */

    /** Single-Threaded, Event-Driven: Unlike traditional web servers, Node.js uses a single thread with an event loop, making it highly efficient for handling multiple connections concurrently. **/

    /** Non-Blocking I/O: Instead of waiting for one task to complete before starting another, Node.js can handle multiple operations simultaneously. **/

    /** V8 Engine: The JavaScript V8 engine (developed by Google for Chrome) compiles JavaScript into machine code, making Node.js applications faster. **/

    /** Modules & Package Management: The Node Package Manager (npm) allows developers to install and use third-party libraries, making development faster and easier. **/

/* Key Features of Node.js */

    // - Asynchronous and Event-Driven: Ideal for handling real-time applications.
    // - Cross-Platform: Works on Windows, macOS, and Linux.
    // - Scalability: Supports microservices and distributed systems.
    // - Large Community & npm: Thousands of open-source packages are available.

/* 
    Comparison: Node.js vs. PHP vs. Java

    Feature	                  Node.js	                                    PHP	                                        Java

    Language -                JavaScript	                                PHP	                                        Java
    Execution Model -         Non-blocking, event-driven	                Blocking, synchronous	                    Multi-threaded
    Concurrency Handling -	  High due to async I/O	                        Limited	                                    Uses threads
    Speed -	                  Fast (V8 engine)	                            Slower due to synchronous execution         Fast but resource-intensive
    Scalability -	          High (ideal for microservices)                Moderate	                                High
    Best For -	              Real-time apps, APIs, chat applications	    CMS, websites	                            Large enterprise applications

*/