import useTitle from "../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="container mx-auto">
      <div className="w-9/12 mx-auto p-8">
        <p className="text-lg font-semibold ">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </p>
        <p>
          <span className="text-lg font-semibold text-green-500">Ans: </span>A
          refresh token just helps you re-validate a user without them having to
          re-enter their login credentials multiple times. The access token is
          re-issued, provided the refresh token is a valid one requesting
          permission to access confidential resources.There are two common ways
          to store your tokens. The first is in localStorage and the second is
          in cookies. There is a lot of debate over which one is better with
          most people leaning toward cookies as they are more secure.
        </p>
        <br />
        <p className="text-lg font-semibold ">
          2. Compare SQL and NoSQL databases?
        </p>
        <p>
          <span className="text-lg font-semibold text-green-500">Ans: </span>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
        <br />
        <p className="text-lg font-semibold ">
          3. What is express js? What is Nest JS ?
        </p>
        <p>
          <span className="text-lg font-semibold text-green-500">Ans: </span>
          Express is a node js web application framework that provides broad
          features for building web and mobile applications. It is used to build
          a single page, multipage, and hybrid web application. It's a layer
          built on the top of the Node js that helps manage servers and
          routes.Nest. js is a server-side Node. js framework that's great for
          building highly testable and maintainable backend applications. You
          can create countless types of applications with Node. js; you're only
          limited by your applications features.
        </p>
        <br />
        <p className="text-lg font-semibold ">
          4. What is MongoDB aggregate and how does it work?
        </p>
        <p>
          <span className="text-lg font-semibold text-green-500">Ans: </span>
          Aggregation is a way of processing a large number of documents in a
          collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline.
        </p>
      </div>
    </div>
  );
};

export default Blog;
