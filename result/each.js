const React = require('react')
const Component = React.Component
module.exports = class MyComponent extends Component {
	constructor(props) {
    super(props)
    this.state = { list: [{ name: 'hello' }, { name: 'world' }] }
  }
  render() {
    // TODO
    let spanDOM = this.state.list.map((ele, index) => {
        return [
            React.createElement('span', null, index),
            React.createElement('span', null, ele.name)
        ]
    })
    return React.createElement('div', null, spanDOM);
  }        
}