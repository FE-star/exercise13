const each = require('../result/each')
const _if = require('../result/if')
const __if = require('../result/if2')
const ReactDOM = require('react-dom/server')
const React = require('react')
const assert = require('assert')

function htmlDecode(str) {
  return str
      .replace(/(&lt;)/g,'<')
      .replace(/(&gt;)/g,'>')
}

describe('each', function () {
  it('应该可以生成对DOM', function () {
    assert.equal(
        htmlDecode(ReactDOM.renderToStaticMarkup(React.createElement(each))),
      '<div><span>0</span><span>hello</span><span>1</span><span>world</span></div>'
    )
  })

  it('应该可以生成对DOM', function () {
    assert.equal(
      htmlDecode(ReactDOM.renderToStaticMarkup(React.createElement(_if))),
      '<div><p>Hello wolrd</p><p>Hello Daniel</p></div>'
    )
  })

  it('应该可以生成对DOM', function () {
    assert.equal(
      ReactDOM.renderToStaticMarkup(React.createElement(__if)),
      '<div></div>'
    )
  })
})