// ========================================================
// example in 'React: Up & Running'
// ========================================================
import { Counter } from './Counter'
import { LifecycleLoggerComponent } from './LifecycleLoggerComponent'

class TextAreaCounter extends LifecycleLoggerComponent {
  static getName() {
    return 'TextAreaCounter'
  }

  constructor() {
    super()
    // initialize state
    this.state = {}
  }

  render() {
    console.log(this.constructor.getName() + '::render');
    const text = 'text' in this.state ? this.state.text : this.props.text
    return (
      <div>
        <textarea
          value={text}
          onChange={event => this.onTextChange(event)}
        />
        {text.length > 0
          ? <Counter count={text.length} />
          : null}
      </div>
    )
  }

  onTextChange(event) {
    this.setState({
      text: event.target.value
    })
  }
}

TextAreaCounter.defaultProps = {
  text: "Count me as I type"
}

export default TextAreaCounter
