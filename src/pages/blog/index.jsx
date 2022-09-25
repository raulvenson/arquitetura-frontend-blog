import React from "react";
import Author from "../../components/author";
import News from "../../components/news";
// import Footer from "../../components/footer";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <div>
        <Author />
        <div className="highlights-container">
          <h2>Ultimas do blog</h2>
        </div>
        <News />
        <News />
        <News />
        <News />
        <Link className="see-all" to="/">
          <b>Ver tudo</b>
        </Link>
      </div>
    </div>
  );
}
