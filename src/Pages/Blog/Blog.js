import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Helmet } from 'react-helmet-async';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-page'>
            <Helmet>
                <title>Blog - AKL Lawyer Service</title>
            </Helmet>
            <h2>Blog</h2>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between SQL and NoSQL</Accordion.Header>
                    <Accordion.Body>
                        <p>1. SQL database is the RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). Where NoSQL is an Non-relational datbase system.</p> <br />
                        <p>2. SQL database comes with fixed or static or predefined schema. On the other side, NoSQL have dynamic schema.</p> <br />
                        <p>3. SQL is Vertically scalable where NoSQL is Horizontally scalable.</p> <br />
                        <p>4. SQL databases are not suited for hierarchical data storage.But NoSQL databases are best suited for hierarchical data storage.</p> <br />
                        <p>5. Popular SQL databases are MySQL, PostgreSQL, Oracle, MS-SQL Server etc. Here are some famous NoSQL databases MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.</p> <br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. What is JWT, and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that identifies a compact and self-contained way used to share security information between two parties — a client and a server as a JSON object. This information can be verified and trusted because it is digitally signed. It is signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p> <br />
                        <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. What is the difference between JavaScript and NodeJS?</Accordion.Header>
                    <Accordion.Body>
                        <p>1. Javascript is a programming language that is used for writing scripts on the website.
                            . Where NodeJS is a Javascript runtime environment.
                        </p> <br />
                        <p>2. Javascript can be run only in the client-side browsers. But you can can run Javascript outside the browser with the help of NodeJS and also runs on server-side.</p> <br />
                        <p>3. Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.</p> <br />
                        <p>4. Javascript is used in frontend development. Nodejs is used in server-side development.</p> <br />
                        <p>5. Some of the Javascript frameworks are VueJs, ReactJs, RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc.  </p> <br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                    <Accordion.Body>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. It's built with the concept of event-driven architecture. It has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;