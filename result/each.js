const React = require('react')
const Component = React.Component
module.exports = class MyComponent extends Component {
	constructor(props) {
    super(props)
    this.state = { list: [{ name: 'hello' }, { name: 'world' }] }
  }

  render() {
      let text = '';
      this.state.list.forEach((item,index) => {
          text = text + `<span>${index}</span><span>${item.name}</span>`;
      });
    // TODO
    return React.createElement('div',null,text);
  }        
}