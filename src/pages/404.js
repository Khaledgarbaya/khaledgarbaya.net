import React from "react";
import Link from "gatsby-link";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div className="container mx-auto p-8">
      <h1 className="text-4xl"> Oups.. </h1>
      <div className="notFound__text">
        Oh welcome to an endless supply of my cute head,you can stay here
        watching this or go back to the <Link to="/">home</Link> page
      </div>
      <div className="notFound__animation">
        <img
          className="notFound__img"
          alt="Khaled Logo"
          width="300"
          height="300"
          src="/logo.svg"
        />
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
