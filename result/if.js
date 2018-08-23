
const React = require('react')
const Component = React.Component
module.exports = class MyComponent extends Component {
	constructor(props) {
    super(props)
    this.state = { flag: true }
  }
  render() {
    let text = '<p>Hello wolrd</p><p>Hello Daniel</p>';
    // TODO
    return React.createElement('div',null,text);
  }        
}