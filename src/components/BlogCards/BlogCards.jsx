import React, { createRef } from 'react';
import Pdf from "react-to-pdf";
const ref = createRef();
const BlogCards = () => {
    return (
        <div>
            <div className='flex justify-center'>
            <Pdf targetRef={ref}filename="div-blue.pdf" x={0} y={0} scale={0.55}>
                {({ toPdf }) => <button onClick={toPdf} className='btn' >Download Pdf</button>}
            </Pdf>
            </div>
            <div className='flex flex-wrap gap-10 justify-center mb-20 pt-10 mx-5' ref={ref}>
                <div className="card w-96 bg-slate-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Tell us the differences between uncontrolled and controlled components.</h2>
                        <p>Those components which state and beheviour are controlled by the parent element is called a Controlled Component. This components rely on the parent component to updare their state and behaviour. The components which controls their states by their own is called a uncontrolled component. In controlled component the data flows from parent to that component and in uncontrolled component the data flows within the component. However, controlled components are considered a best practice and uncontrolled components are considered an alternate approach.</p>
                    </div>
                </div>

                <div className="card w-96 bg-slate-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title">How to validate React props using PropTypes.</h2>
                        <p>PropTypes utility exports a numerous range of validators for configuring type definitions. Here are basic and requied prop types:
                            <ul className=' list-disc'>
                                <li>PropTypes.func: The prop should be a function
                                </li>
                                <li>PropTypes.object: The prop should be an object
                                </li>
                                <li>PropTypes.symbol: The prop should be a symbol</li>
                                <li>PropTypes.array: The prop should be an array
                                </li>
                                <li>PropTypes.string: The prop should be a string
                                </li>
                                <li>PropTypes.number: The prop should be a number
                                </li>
                                <li>PropTypes.bool: The prop should be a Boolean
                                </li>
                                <li>PropTypes.any: The prop can be of any data type
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="card w-96 bg-slate-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Tell us the difference between nodejs and express js.</h2>
                        <p>NodeJs is a package which provides the JavaScript run-time enviroment, On the other hand Express.js is framework that is defended on the NodeJs and helps to handle responses and requests. NodeJs is used to build server, input-output, event-driven apps etc. Express.js is used to build web-application using the approaches and principles of NodeJs. The most noticeable difference is NodeJs built on Google's V8 engine, on the other side ExpressJs is built on NodeJs. To build something NodeJs takes more time than ExpressJs. ExpressJs also provides routing and controllers</p>
                    </div>
                </div>

                <div className="card w-96 bg-slate-200 shadow">
                    <div className="card-body">
                        <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
                        <p>Those which hooks are created by developers are called custom hooks. We use custom hook to reduce the time to write the code and make our code cleaner. As custom hook doesn't needed to be rendered again it enhances the rendering speed. Custom hooks have the ability to be shared between components. Custom hooks improves the readability of the code. React Custoom Hook is a powerful thing which saves time and makes developers reliable. </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogCards;