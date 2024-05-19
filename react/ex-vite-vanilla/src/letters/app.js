import React, { Component } from "react";
import PropTypes from 'prop-types'

import { Post } from './components/post/Post'
import { CreatePost } from "./components/post/Create";

// P.104
class App extends Component {
  constructor(props) {
    super(props)
    const endpoint = import.meta.env.VITE_ENDPOINT
    console.log(`endpint: ${endpoint}`)

    this.state = {
      error: null,
      loading: false,
      posts: [],
      endpoint: `${endpoint}/posts?_page=1&_sort=date&_order=DESC&_embed=commments&_expand=user&_embed=likes`
    }
    this.getPosts = this.getPosts.bind(this)
    this.createNewPost = this.createNewPost.bind(this)
  }

  static propTypes = {
    children: PropTypes.node
  }

  componentDidMount() {
    this.getPosts()
  }
  componentDidCatch(error, errorInfo) {
    console.error(error)
    console.error(errorInfo)
    this.setState({ error: error })
  }
  getPosts() {
    // TODO: fetch posts P.106
  }

  createNewPost(post) {
    console.log(`App createNewPost: ${JSON.stringify(post)}`)
    this.setState((prevState, props) => {
      return {
        posts: prevState.posts.concat(post)
      }
    })
    // this.setState({posts: this.state.posts.concat(post)})
  }

  render() {
    // TODO: more component P.108
    return <div className="app">
      <h1>Hello Letters.</h1>
      <Post />
      <CreatePost onSubmit={this.createNewPost} /> {/* pass callback functions as props */}
      <button className="block" onClick={this.getPosts}>Load more posts</button>
    </div>
  }
}

export default App