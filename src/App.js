import React, { useState, useEffect} from 'react'
import NavBar from './Components/NavigationBar/NavigationBar';
import MusicTable from './Components/MusicTable/MusicTable';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:5000/api/songs');
    setSongs(response.data.songs)
    console.log(response.data.songs)
  }
  
  // async function createSong(newSong) {
    // newSong:
    // {
    //    title: "Nantes"
    //    album: "The Flying Fight Club"
    //    artist: "Beirut"
    //    genre: Indie Folk
    //    releaseDate: "11/09/2007"
    //    runningTime:  230
    // }
    // let response = await axios.post('http://127.0.0.1:5000/api/songs', newSong)
    // if (response.status === 201){
    //     await getAllSongs();    }
    // }
  
    function handleSearch(query) {

    }

  return (
    <div>
      <NavBar />
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div>
        <MusicTable songs={songs} />
        </div>
    </div>
  );
  }

export default App;
