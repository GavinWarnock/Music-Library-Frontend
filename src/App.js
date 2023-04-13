import React, { useState, useEffect} from 'react'
import NavBar from './Components/NavigationBar/NavigationBar';
import MusicTable from './Components/MusicTable/MusicTable';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import AddNewSong from './Components/NewSong/NewSong';

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
  
  async function createSong(newSong) {
    let response = await axios.post('http://127.0.0.1:5000/api/songs', newSong)
    if (response.status === 201){
        await getAllSongs();    }
        console.log(createSong)
    }

  async function deleteSong(id) {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/songs/${id}`);
      await getAllSongs();
    } catch (error) {
    }
  }
  
    function handleSearch(query) {
      const filteredData = songs.filter((song) => {
        return (song.title.toLowerCase().includes(query.toLowerCase()) || song.artist.toLowerCase().includes(query.toLowerCase()) || song.album.toLowerCase().includes(query.toLowerCase()) || song.release_date.toLowerCase().includes(query.toLowerCase()) || song.genre.toLowerCase().includes(query.toLowerCase()))
        
      }
        
    
      );
      setSongs(filteredData)
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
        <div>
          <AddNewSong createSong={createSong} deleteSong={deleteSong} />
        </div>
        <div></div>
    </div>
  );
  }

export default App;
