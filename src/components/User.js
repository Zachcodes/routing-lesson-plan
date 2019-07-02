import React from 'react';
import users from '../users';

export default function User(props) {
  let selectedUser = users.find(u => u.id === +props.match.params.id);
  return (
    <div>
      <h1>{selectedUser.name}</h1>
      <p>{selectedUser.age}</p>
    </div>
  );
}
