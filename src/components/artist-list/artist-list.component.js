import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Artist from '../artist/artist.component';

import './artist-list.styles.css';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [artistAlbum, setArtistAlbum] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await axios('http://jsonplaceholder.typicode.com/users');
      setArtists(response.data);
    }
    fetchFunc();
  }, [setArtists]);

  const handleDisplayAlbum = async e => {
    const response = await axios('http://jsonplaceholder.typicode.com/albums'); 
    console.log('******', response.data)
    return setArtistAlbum(response.data);
  }

  return (
    <div className='artist-list'>
      <h1>LIST OF ALL ARTISTS IN CHOCOLATE CITY</h1>
      {
        <Artist artists={artists} onHandleDisplayAlbum={handleDisplayAlbum}/>
      }
    </div>
  )
};

export default ArtistList;
