import React from "react";

const Blog = () => {
  return (
    <div>
      {/* question number 1 */}
      <div className="shadow-xl px-2 my-4 py-4">
        <h2 className="text-2xl mb-4 text-primary">
          1.Difference between SQL and NoSQL
        </h2>
        <h3 className="text-slate-600 text-2xl font-semibold mb-2">SQL</h3>
        <p className="text-zinc-600">
          1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
          2.These databases have fixed or static or predefined schema <br />
          3.These databases are not suited for hierarchical data storage. <br />
          4.These databases are best suited for complex queries <br />
          5.Vertically Scalable <br />
          6.Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
        </p>
        <h3 className="text-slate-600 text-2xl font-semibold py-2">NoSQL</h3>
        <p className="text-zinc-600">
          1.Non-relational or distributed database system. <br />
          2.They have dynamic schema. <br />
          3.These databases are best suited for hierarchical data storage.{" "}
          <br />
          4.These databases are not so good for complex queries. <br />
          5. Horizontally scalable <br />
          6.Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
        </p>
      </div>
      {/* question number 2 */}
      <div className="shadow-xl px-2 my-4 py-4">
        <h2 className="text-2xl mb-4 text-primary">
          2.What is JWT, and how does it work?
        </h2>
        <p className="text-zinc-600">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued. <br />
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted. <br />
          A JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization, the JWT looks something like this:
          xxxxx.yyyyy.zzzzz. <br />
          Once decoded, you will get two JSON strings: <br />
          1. The header and the payload. <br />
          2. The signature. <br />
          The JOSE (JSON Object Signing and Encryption) header contains the type
          of token — JWT in this case — and the signing algorithm. <br />
          The payload contains the claims. This is displayed as a JSON string,
          usually containing no more than a dozen fields to keep the JWT
          compact. This information is typically used by the server to verify
          that the user has permission to perform the action they are
          requesting.
        </p>
      </div>
      {/* question number 3 */}
      <div className="shadow-xl px-2 my-4 py-4">
        <h2 className="text-2xl mb-4 text-primary">
          3.What is the difference between javascript and NodeJS?
        </h2>
        <h3 className="text-slate-600 text-2xl font-semibold mb-2">
          Javascript
        </h3>
        <p className="text-zinc-600">
          1. Javascript is a programming language that is used for writing
          scripts on the website. <br />
          2.Javascript can only be run in the browsers. <br />
          3.It is basically used on the client-side. <br />
          4.Javascript is capable enough to add HTML and play with the DOM.{" "}
          <br />
          5.Javascript can run in any browser engine as like JS core in safari
          and Spidermonkey in Firefox. <br />
          6.Javascript is used in frontend development.
        </p>
        <h3 className="text-slate-600 text-2xl font-semibold py-2">NodeJS</h3>
        <p className="text-zinc-600">
          1.NodeJS is a Javascript runtime environment. <br />
          2.We can run Javascript outside the browser with the help of NodeJS.{" "}
          <br />
          3.It is mostly used on the server-side. <br />
          4.Nodejs does not have capability to add HTML tags. <br />
          5. V8 is the Javascript engine inside of node.js that parses and runs
          Javascript.
          <br />
          6.Nodejs is used in server-side development.
        </p>
      </div>
      {/* question number 4 */}
      <div className="my-4 py-4 shadow-xl px-2">
        <h2 className="text-2xl mb-4 text-primary">
          4.How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          We know NodeJS application is single-threaded. Say, if processing
          involves request A that takes 10 seconds, it does not mean that a
          request which comes after this request needs to wait 10 seconds to
          start processing because NodeJS event loops are only single-threaded.
          The entire NodeJS architecture is not single-threaded. <br />
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. <br />
          If NodeJS can process the request without I/O blocking then the event
          loop would itself process the request and sends the response back to
          the client by itself. But, it is possible to process multiple requests
          parallelly using the NodeJS cluster module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
