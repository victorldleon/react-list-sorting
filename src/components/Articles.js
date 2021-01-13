import React, { Component } from "react";

class Articles extends Component {
  state = {
    articlesList: [],
  };

  componentDidMount() {
    const sortedList = this.props.articles
      .slice()
      .sort((a, b) => b.upvotes - a.upvotes);
    this.setState({ articlesList: sortedList });
  }

  sortByMostUpvoted = () => {
    const sortedList = this.props.articles
      .slice()
      .sort((a, b) => b.upvotes - a.upvotes);
    this.setState({ articlesList: sortedList });
  };

  sortByMostRecent = () => {
    const sortedList = this.props.articles
      .slice()
      .sort((a, b) => b.date - a.date);
    this.setState({ articlesList: sortedList });
  };

  render() {
    const articles = this.state.articlesList.map((article) => {
      return (
        <tr data-testid="article" key={article.date}>
          <td data-testid="article-title">{article.title}</td>
          <td data-testid="article-upvotes">{article.upvotes}</td>
          <td data-testid="article-date">{article.date}</td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={this.sortByMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={this.sortByMostRecent}
          >
            Most Recent
          </button>
        </div>
        <div className="card w-50 mx-auto">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Upvotes</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>{articles}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Articles;
