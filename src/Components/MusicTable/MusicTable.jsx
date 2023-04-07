const MusicTable = (props) => {
    const {songs} = props;
    return (
        <table>
            <thead>
            <tr>
                <th>id</th>
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
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                    <td>{song.running_time}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default MusicTable;