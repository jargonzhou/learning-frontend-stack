// Add React to an Existing Project
// https://react.dev/learn/add-react-to-an-existing-project

import './style.css'

import React, { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

// legacy
import { render } from 'react-dom'

import PropTypes from 'prop-types'

// mockding data
import data from './mock_data'

// function NavigationBar() {
//   // TODO: Actually implement a navigation bar
//   return <h1>Hello from React!</h1>;
// }

const domNode = document.getElementById('navigation');

// const root = createRoot(domNode);
// root.render(<NavigationBar />);

// legacy createElement
// const root = React.createElement('div', {},
//   React.createElement('h1', {}, "Hello, world!",
//     React.createElement('a', {href: 'mailto:zhoujiagen@gmail.com'},
//       React.createElement('h1', {}, "React in Action"),
//       React.createElement('em', {}, "...and now it really is!")
//     )
//   )
// )
// render(root, domNode)

// function _legacy_createElment() {
//   return <div>
//     <h1>Hello, world!</h1>
//     <a href="mailto:zhoujiagen@gmail.com">
//     <h1>React in Action</h1>
//     <em>...and now it really is!</em>
//     </a>
//   </div>
// }
// const root = createRoot(domNode);
// root.render(<_legacy_createElment/>)

// https://react.dev/reference/react/Component
class Post extends Component {
  render() {
    // legacy
    // return React.createElement('div', { className: 'post' },
    //   React.createElement('h2', { className: 'postAuthor', id: this.props.id },
    //     this.props.user,
    //     React.createElement('span', { className: 'postBody' },
    //       this.props.content
    //     ),
    //     this.props.children
    //   )
    // )

    return <div className="post">
      <h2 className="postAuthor" id={this.props.id}>{this.props.user}: </h2>
      <span className="postBody">{this.props.content}</span>
      {this.props.children}
    </div>
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

class Comment extends Component {
  render() {
    // return React.createElement('div', { className: 'comment' },
    //   React.createElement('h2', { className: 'commentAuthor' },
    //     this.props.user,
    //     React.createElement('span', { className: 'commentContent' },
    //       this.props.content
    //     )
    //   )
    // )
    return <div className="comment">
      <h2 className="commentAuthor">
        {this.props.user}: </h2>
      <span className="commentContent">
        {this.props.content}
      </span>
    </div>
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

class CreateComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      user: ''
    }

    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // event handlers
  handleUserChange(event) {
    const val = event.target.value
    this.setState({
      user: val
    })
  }
  handleTextChange(event) {
    const val = event.target.value
    this.setState({
      content: val
    })
  }
  handleSubmit(event) {
    event.preventDefault()

    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim()
    })

    this.setState({
      content: '',
      user: ''
    })
  }

  render() {
    // return React.createElement('form', {className: 'createComment'},
    //   React.createElement('input', {type: 'text', placeholder: 'Your name', value: this.state.user}),
    //   React.createElement('input', {type: 'text', placeholder: 'Thoughts?'}),
    //   React.createElement('input', {type: 'submit', value: 'Post'})
    // )
    return <form className="createComment" onSubmit={this.handleSubmit}>
      <input type='text' placeholder='Your name' value={this.state.user} name='name' autoComplete='off'
        onChange={this.handleUserChange}></input>
      <input type='text' placeholder='Thoughts?' name='content'
        onChange={this.handleTextChange}></input>
      <input type='submit' value='Post'></input>
    </form>
  }
}
CreateComment.propTypes = {
  content: PropTypes.string,
  // use functions as props
  onCommentSubmit: PropTypes.func.isRequired
}

class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: this.props.comments
    }

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  handleCommentSubmit(comment) {
    const comments = this.state.comments
    comment.id = Date.now()
    const newComments = comments.concat([comment])
    this.setState({
      comments: newComments
    })
  }

  render() {
    const commentList = this.state.comments.map(c =>
      <Comment key={c.id} id={c.id} content={c.content} user={c.user}></Comment>)
    return <div className='commentBox'>
      <Post id={this.props.post.id}
        content={this.props.post.content}
        user={this.props.post.user}></Post>
      {commentList}
      <CreateComment onCommentSubmit={this.handleCommentSubmit}></CreateComment>
    </div>
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comment: PropTypes.arrayOf(PropTypes.object)
}

// const App = React.createElement(Post, {
//   id: 1,
//   content: ' said: This is a post!',
//   user: 'Cartman'
// },
//   React.createElement(Comment, {
//     id: 2,
//     user: 'bob',
//     content: ' commented: wow! how cool!'
//   }),
//   React.createElement(CreateComment, {
//     onCommentSubmit
//   }))
// const App = React.createElement(CommentBox, {
//   comments: data.comments,
//   post: data.post
// })
// render(App, domNode)
// https://react.dev/reference/react/StrictMode
// render(<StrictMode>{App}</StrictMode>, domNode)

const root = createRoot(domNode);
root.render(<StrictMode>
  <CommentBox comments={data.comments} post={data.post} />
</StrictMode>);