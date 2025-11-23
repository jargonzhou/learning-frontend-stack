// exploring lifecycle methods
import './style.css'
import PropTypes from 'prop-types'
import React, { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

class ChildComponent extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = (function () {
    console.log('ChildComponent: defaultProps')
    return {}
  })()

  constructor(props) {
    super(props)
    console.log('ChildComponent: state')
    this.state = {
      name: 'Mark',
      oops: undefined
    }
    this.oops = this.oops.bind(this)
  }

  oops() {
    // this.setState(() => ({ oops: true }))
    this.setState({oops: true})
  }

  // lifecycle methods
  // deprecated: use componentDidMount
  // componentWillMount() {
  //   console.log('ChildComponent: componentWillMount')
  // }
  componentDidMount() {
    console.log('ChildComponent: componentDidMount')
  }
  // deprecated: use getDerivedStateFromProps
  // componentWillReceiveProps(nextProps) {
  //   console.log('ChildComponent: componentWillReceiveProps')
  //   console.log('nextProps: ', nextProps)
  // }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(`ChildComponent: shouldComponentUpdate: nextProps=${JSON.stringify(nextProps)}, nextState=${JSON.stringify(nextState)}`)
    return true
  }
  // deprecated: use getSnapshotBeforeUpdate
  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log(`ChildComponent: componentWillUpdate: nextProps=${JSON.stringify(nextProps)}, nextState=${JSON.stringify(nextState)}`)
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`ChildComponent: componentDidUpdate: prevProps=${JSON.stringify(prevProps)}, prevState=${JSON.stringify(prevState)}`)
  }

  componentWillUnmount() {
    console.log('ChildComponent: componentWillUnmount')
  }

  render() {
    console.log('ChildComponent: render')
    if (this.state.oops) {
      throw new Error('Something went wrong')
    }
    return <>
      <div>Name: {this.props.name}</div>
      <button key="error" onClick={this.oops}>Create error</button>
    </>
  }
}

class ParentComponet extends Component {
  static defaultProps = (function () {
    console.log('ParentComponet: defaultProps')
    return {
      true: false
    }
  })()

  constructor(props) {
    super(props)
    console.log('ParentComponet: state')
    this.state = {
      text: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  // lifecycle methods
  componentDidMount() {
    console.log('ParentComponet: componentDidMount')
  }
  componentWillUnmount() {
    console.log('ParentComponet: componentWillUnmount')
  }
  componentDidCatch(error, errorInfo) {
    console.log('ParentComponet: componentDidCatch')
    console.error(error)
    console.error(errorInfo)
    this.setState(() => { error, errorInfo })
  }

  onInputChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    console.log('ParentComponent: render')
    if (this.state.error) {
      return <div stype={{whiteSpace: 'pre-wrap'}}>
        {this.state.error && this.state.error.toString()}
        <br/>
        {this.state.errorInfo.componentStack}
      </div>
    }
    return <>
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>
      <input key="input" value={this.state.text}
        onChange={this.onInputChange}></input>
      <ChildComponent key="ChildComponent" name={this.state.text}></ChildComponent>
    </>
  }
}

const domNode = document.getElementById('lifecyle-methods');
const root = createRoot(domNode);
root.render(<StrictMode>
  <ParentComponet />
</StrictMode>);