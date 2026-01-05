// ========================================================
// example in 'React: Up & Running'
// ========================================================
import React from "react";

export class LifecycleLoggerComponent extends React.Component {
  static getName() { }

  componentDidMount() {
    console.log(this.constructor.getName() + '::componentDidMount')
  }

  componentWillUnmount() {
    console.log(this.constructor.getName() + '::componentWillUnmount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.constructor.getName() + `::componentDidUpdate:\n===prevProps=${JSON.stringify(prevProps)}\n===prevState=${JSON.stringify(prevState)}\n===snapshot=${snapshot}`)
  }
}
