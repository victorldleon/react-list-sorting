import React, { Component } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

class App extends Component {
  state = {
    articlesList: [],
  };

  componentDidMount() {
    this.setState({
      articlesList: this.props.articles,
    });
  }
  render() {
    const articlesList = this.state.articlesList.map((article) => {
      return <Articles article={article} />;
    });
    return (
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button data-testid="most-upvoted-link" className="small">
            Most Upvoted
          </button>
          <button data-testid="most-recent-link" className="small">
            Most Recent
          </button>
        </div>
        {articlesList}
      </div>
    );
  }
}

export default App;
