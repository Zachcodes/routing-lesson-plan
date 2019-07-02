import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../posts';

export default function Posts(props) {
  console.log('props', props);
  return (
    <div>
      {posts.map(p => {
        return <Link to={`${props.match.path}/${p.id}`}>{p.title}</Link>;
      })}
    </div>
  );
}
