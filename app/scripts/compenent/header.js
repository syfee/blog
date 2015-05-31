var React = require('react');
var Header = React.createClass({
  render: function() {
    return (
      <div id='header'>
      <ul className = 'nav navbar'>
      <li>blg</li>
      <li>about</li>
      <li>archives</li>
      </ul>
      </div>
    );
  }
});

module.exports = Header;