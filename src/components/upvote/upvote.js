import React, { Component } from "react";

const EnhancedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    state = { upvotes: 0};

    // This method is called via the original component
    addUpvote = () => {

      // Add 1 to the state upvotes for the instance of the class
      this.setState({ upvotes: this.state.upvotes + 1});
    }

    render() {
      return (
        <OriginalComponent
          upvotes={this.state.upvotes}
          addUpvote={this.addUpvote}

          // Return original props data so the original component has access to it
          data={this.props.data}
        />
      );
    }
  }
  return NewComponent;
};

export default EnhancedComponent;