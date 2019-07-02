import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/one">Route One!</Link>
      <Link to="/two">Route Two!</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
}
