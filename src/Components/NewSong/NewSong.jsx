import React, { useState } from 'react';
import axios from 'axios';


const AddNewSong = ({createSong}) => {
    const [newSong, setNewSong] = useState({
        title: '',
        album: '',
        artist: '',
        genre: '',
        release_date:'',
        running_time: ''
        })
    
    function handleNewSongChange(event) {
        setNewSong({
            ...newSong,
            [event.target.name]: event.target.value
        });
    }

    async function handleNewSong(event) {
        event.preventDefault();
        await createSong(newSong);
    }
    async function handleDeleteSong(event) {
        const id = prompt("Please enter ID of song you wish to be deleted");
        await axios.delete(`http://127.0.0.1:5000/api/songs/${id}`);
    }


    return (
        <div>
            <form onSubmit={handleNewSong}>
                <input type="text" name="title" placeholder="Title" value={newSong.title} onChange={handleNewSongChange}/>
                <input type="text" name="album" placeholder="Album" value={newSong.album} onChange={handleNewSongChange}/>
                <input type="text" name="artist" placeholder="Artist" value={newSong.artist} onChange={handleNewSongChange}/>
                <input type="text" name="genre" placeholder="Genre" value={newSong.genre} onChange={handleNewSongChange}/>
                <input type="text" name="release_date" placeholder="YYYY-MM-DD" value={newSong.release_date} onChange={handleNewSongChange}/>
                <input type="text" name="running_time" placeholder="Running Time" value={newSong.running_time} onChange={handleNewSongChange}/>
                <button type="submit">Add Song</button>
            </form>
            <div>
            </div>
            <form onSubmit={handleDeleteSong}>
                <button>Delete Song</button>
            </form>
        </div>
    )
    }
export default AddNewSong