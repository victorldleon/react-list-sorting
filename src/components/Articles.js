import React from "react";

function Articles(props) {
  console.log(props);
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr data-testid="article" key="article-index">
            <td data-testid="article-title">{props.article.title}</td>
            <td data-testid="article-upvotes">{props.article.upvotes}</td>
            <td data-testid="article-date">{props.article.date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
