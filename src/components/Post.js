import React from 'react';
import posts from '../posts';

export default function Post(props) {
  let selectedPost = posts.find(p => p.id === +props.match.params.id);
  return (
    <div>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.text}</p>
    </div>
  );
}
