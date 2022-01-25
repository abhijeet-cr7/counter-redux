import {useState, useEffect} from 'react';
import React from 'react';
import Album from './Album.js';

export default function CompThree() {
  const [albums , setAlbums] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then((data) => {
        console.log('***data',data);
        setAlbums(data);  
    }) 
  },[])
  return <div>
  {albums.map((album, key) => {
    return(
      <div>
      <Album data={album}  />
      </div>
    )
  })  
  }
  </div>;
}

