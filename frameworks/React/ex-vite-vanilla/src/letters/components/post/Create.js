import React, {Component} from "react";
import PropTypes from 'prop-types'

export class CreatePost extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      valid: false // validation
    }
    this.handlePostChange = this.handlePostChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlePostChange(event) {
    const content = event.target.value
    this.setState({
      content: content,
      valid: content.length <= 280
    })
  }
  handleSubmit() {
    if (!this.state.valid) {
      return
    }
    const newPost = {
      content: this.state.content
    }
    this.props.onSubmit(newPost)
    console.log(this.state)
  }

  render() {
    return <div className="create-post">
      <button onClick={this.handleSubmit}>Post</button>
      <textarea 
        value={this.state.content}
        onChange={this.handlePostChange}
        placeholder="What's on your mind?"/>
    </div>
  }
}
