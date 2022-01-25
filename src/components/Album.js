import React from 'react';

export default function Album(props) {
  return <div>
  {
  <>
  <p>{props.data.id}</p>
  <p>{props.data.userId}</p>
  <p>{props.data.title}</p>
  </>
  }
  </div>;
}
