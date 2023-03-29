import React, { Component } from "react";

const EnhancedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    state = { upvotes: 0};

    addUpvote = () => {
      this.setState({ upvotes: this.state.upvotes + 1});
    }

    render() {
      return (
        <OriginalComponent
          upvotes={this.state.upvotes}
          addUpvote={this.addUpvote}
          data={this.props.data}
        />
      );
    }
  }
  return NewComponent;
};

export default EnhancedComponent;