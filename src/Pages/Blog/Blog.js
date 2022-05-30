import React from 'react';
import Footer from '../Shared/Footer'

const Blog = () => {
    return (
        <div className='container'>
            <div className='my-10'>
                <h2 className='font-bold text-4xl text-center text-orange-500'>Welcome to My Blog</h2>
                <p className='text-center font-semibold text-xl'>Here are a few questions & answers</p>
                <hr />
            </div>
            <div className='mx-10'>
                <h3 className='font-bold text-xl'>1. How will you improve the performance of a React Application?</h3>
                <p>
                    There are 5 ways to improve the performance of React App. Example down below:- <br />
                    <span className='font-semibold'>
                        1. Use React.Fragment to Avoid Adding Extra Nodes to the DOM <br />
                        2. Use Production Build <br />
                        3. Use React.Suspense and React.Lazy for Lazy Loading Components <br />
                        4. Use React.memo for Component Memoization <br />
                        5. Virtualize a Large List Using react-window <br />
                    </span>
                </p>
            </div> <br />

            <div className='mx-10'>
                <h3 className='font-bold text-xl'>2. What are the different ways to manage a state in a React application?</h3>
                <p>
                    There are four main types of state you need to properly manage in your React apps: <br />

                    <span className='font-semibold'>
                        1. Local state <br />
                        2. Global state <br />
                        3. Server state <br />
                        4. URL state <br />
                    </span>
                    <span>
                        <span className='font-semibold'>1. Local (UI) state -</span> Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.
                    </span> <br />
                    <span>
                        <span className='font-semibold'>2. Global (UI) state –</span> Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    </span> <br />
                    <span>
                        <span className='font-semibold'>3. Server state –</span>
                        Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                    </span> <br />
                    <span><span className='font-semibold'>4. URL state –</span> Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</span>
                </p>
            </div> <br />

            <div className='mx-10'>
                <h3 className='font-bold text-xl'>3. How does prototypical inheritance work?</h3>
                <p>
                    <span>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. <br />
                        Inheritance allows an object to use the properties and methods of another object without duplicating the code.
                        JavaScript uses the prototypal inheritance.
                    </span>
                </p>
            </div> <br />

            <div className='mx-10'>
                <h3 className='font-bold text-xl'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p>
                    <span>When we learn about React and state we will often read this: "Don't mutate the state". This means you shouldn't change an object or array directly without creating a new object/array.

                        Interestingly, when people request code reviews online one of the most common mistakes is exactly this: Direct changes of the state.

                        How come? Most beginner developers are not aware that they are mutating the state. That's why you can find a list of ways to accidentally mutate state directly here. You will see later why this may cause a lot of headache in the long run.
                    </span>
                </p>
            </div> <br />

            <div className='mx-10'>
                <h3 className='font-bold text-xl'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h3>
                <p>
                    There are different methods in JavaScript that we can use to search for an item in an array. Includes method we choose depends on in that use case.
                    <span>
                        The includes() method determines whether an array includes a certain value and returns true or false as appropriate. <br />
                        his method and other methods we have considered. This method accepts a value rather than a callback as the argument. Here's the syntax for the includes method:

                        const includesValue = array.includes(valueToFind, fromIndex) <br />
                        valueToFind is the value you are checking for in the array (required), and
                        fromIndex is the index or position in the array that you want to start searching for the element from (optional)
                    </span>
                </p>
            </div> <br />
            <div className='mx-10 mb-10'>
                <h3 className='font-bold text-xl'>6. What is a unit test? Why should write unit tests?</h3>
                <p>
                    <span>
                        Unit testing is one of the many different types of automated testing. Unit tests exercise very small parts of the application in complete isolation, comparing their actual behavior with the expected behavior. The “complete isolation” part means that, when unit testing, you don’t typically connect your application with external dependencies such as databases, the filesystem, or HTTP services. That allows unit tests to be fast and more stable since they won’t fail due to problems with those external services. <br /><br />
                        Unit tests, rather than being codeless tests, are created with code. You can think of unit tests as small programs that exercise your application, interacting with tiny portions of it. Each unit test is like a specification or example of how that tiny portion—i.e. a unit—behaves under a specific scenario.  By executing the suite of tests, developers can get immediate feedback when they change some codebase.
                    </span>
                </p>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default Blog;