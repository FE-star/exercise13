const React = require('react')
const Component = React.Component
module.exports = class MyComponent extends Component {
	constructor(props) {
    super(props)
    this.state = { flag: false }
  }
  render() {
    // TODO
    let pDOM = [
        React.createElement('p', null, 'Hello wolrd'),
        React.createElement('p', null, 'Hello Daniel')
    ]
    return React.createElement('div', null, this.state.flag ? pDOM : '');
  }        
}