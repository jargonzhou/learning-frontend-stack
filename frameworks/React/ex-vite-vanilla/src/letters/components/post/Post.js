import React, { Component } from "react";
import PropTypes from 'prop-types'

export class Post extends Component {
  static propTypes = {
    post: PropTypes.shape({
      comments: PropTypes.array,
      content: PropTypes.string,
      date: PropTypes.number,
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
      likes: PropTypes.array,
      location: PropTypes.object,
      user: PropTypes.object,
      userId: PropTypes.string
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      post: null,
      comments: [],
      showComments: false,
      user: this.props.user
    }
    this.loadPost = this.loadPost.bind(this)
  }

  componentDidMount() {
    this.loadPost(this.props.id)
  }
  loadPost(id) {
    // TODO: load post P.107
  }

  render() {
    if (!this.state.post) {
      // return <Loader />
      return <></>
    }
    return <div className="post">
      {/* <UserHeader date={this.state.post.date} user={this.state.post.user} />
      <Content post={this.state.post} />
      <Link link={this.state.post} />
      <PostActionSelection showComments={this.state.showComments} />
      <Comments comments={this.state.comments}
        show={this.state.showComments}
        post={this.state.post}
        user={this.props.user} /> */}
    </div>
  }
}