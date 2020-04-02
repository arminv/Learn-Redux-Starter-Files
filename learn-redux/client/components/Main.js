import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
        {/* This will pass the props down based on which component we are rendering (unlike when we only have one child component): */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;
