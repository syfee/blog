var React = require('react');
var Header = require('./header.js');
var Blog = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
      </div>
      );
  }
});

module.exports = Blog;
