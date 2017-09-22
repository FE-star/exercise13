const React = require('react')
const Component = React.Component
module.exports = class MyComponent extends Component {
	constructor(props) {
    super(props)
    this.state = { list: [{ name: 'hello' }, { name: 'world' }] }
  }
  render() {
    // TODO
    return null
  }        
}