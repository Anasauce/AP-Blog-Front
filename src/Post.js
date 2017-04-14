import React, { Component } from 'react';
import './Post.css';


class Post extends Component {
  render() {
    return (
        <article class="Post">
          <header>
            <div class="Title">
              <h2><a href="#">Ana and Pascales first post</a></h2>
              <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
            </div>
            <div class="Meta">
              <time class="Published" datetime="2017-4-01">April 1, 2017</time>
              <a href="#" class="Author"><span class="name">Pascale Pierre</span><img src="#" alt="" /></a>
            </div>
          </header>
          <a href="#" class="Image featured"><img src="#" alt="" /></a>
          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus ni </p>
        </article>
    );
  }
}

export default Post;
