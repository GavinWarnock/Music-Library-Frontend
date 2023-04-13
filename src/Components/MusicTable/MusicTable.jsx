import './MusicTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MusicTable = (props) => {
    const {songs} = props;
    return (
        <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Running Time</th>
                </tr>
            </thead>
            <tbody>
            {songs && songs.map((song) => (
                <tr key={song.id}>
                    <td data-cy="title">{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                    <td>{song.running_time}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default MusicTable;