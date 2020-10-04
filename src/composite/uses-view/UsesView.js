import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./UsesView.css";
const Markdown = require('react-markdown');

function UsesView() {
    
  return (
    <div>
      <Header />
      <Markdown source="./Uses.md" />
      <Footer />
    </div>
  );
}

export default UsesView;