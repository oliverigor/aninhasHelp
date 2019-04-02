import React, { Component } from "react";

export default class PostList extends Component {
  render() {
    const posts = this.props.posts;
    return (
      <ul>
        {posts.map(post => {
          return (
            <div key={post.id}>
              <li>{post.author}</li>
              <li>{post.title}</li>
            </div>
          );
        })}
      </ul>
    );
  }
}
