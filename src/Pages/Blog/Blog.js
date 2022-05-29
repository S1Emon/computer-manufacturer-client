import React from 'react';
import Footer from '../Shared/Footer'

const Blog = () => {
    return (
        <div>
            <div>
                <h3>1. How will you improve the performance of a React Application?</h3>
            </div>

            <div>
                <h3>2. What are the different ways to manage a state in a React application?</h3>
            </div>

            <div>
                <h3>3. How does prototypical inheritance work?</h3>
            </div>

            <div>
                <h3>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
            </div>

            <div>
                <h3>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h3>
            </div>
            <div>
                <h3>6. What is a unit test? Why should write unit tests?</h3>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default Blog;