import React from "react";
import ReactMarkdown from "react-markdown";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Uses from "./Uses.md";

import "./UsesView.css";

function UsesView() {
  return (
    <div>
      <Header />
      <div>
        <ReactMarkdown source={Uses} />
      </div>
      <Footer />
    </div>
  );
}

export default UsesView;
