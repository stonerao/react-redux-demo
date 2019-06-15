// 计数器
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from './count'

class Home extends Component {
  render() {
    const { number, increase, decrease } = this.props
    return (
      <div>
        <p>这里显示的是当前值: <span className="badge">{number}</span></p>
        <br />
        <button type="button" className="btn btn-default" onClick={() => increase(1)}>+1按钮</button>
        {' '}
        <button type="button" className="btn btn-default" onClick={() => decrease(1)}>-1按钮</button>
      </div>
    )
  }
}

function moveFromStoreToProps(state) {
  //state refers to the redux state
  if (!state) return {};

  let { number } = state;

  return {
    number: number
  }
}
let outputActions = {
  increase: increase,
  decrease: decrease
}

export default connect(moveFromStoreToProps, outputActions)(Home)