// ========================================================
// example in 'React: Up & Running'
// ========================================================
import { LifecycleLoggerComponent } from './LifecycleLoggerComponent'

export class Counter extends LifecycleLoggerComponent {
  static getName() {
    return 'Counter'
  }

  render() {
    console.log(this.constructor.getName() + '::render');
    return <h3 id='counter'>{this.props.count}</h3>
  }
}

Counter.defaultProps = {
  count: 0
}