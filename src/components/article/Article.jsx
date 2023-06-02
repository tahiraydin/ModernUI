import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>
        I’m sure any blogger, marketer, or content creator who has ever had to
        write anything in a professional capacity, will agree that it is
        necessary — but also very time-consuming. Businesses may need blog
        articles for many reasons, such as SEO purposes or to announce
        information about their products or services.
      </p>
    </div>
  </div>
);

export default Article;
