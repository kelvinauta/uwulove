// ** @jsx jsx *
import React from "react";
import { jsx, Text } from "theme-ui";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Page from "../components/Page";
import Book from "../components/Book";
const Index = () => {
  return (
    <div>
      <Layout>
        <Menu></Menu>
        <div>
          <Book />
        </div>
      </Layout>
    </div>
  );
};

export default Index;
