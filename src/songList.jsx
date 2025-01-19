import Song from './song'
const songs = [
    {id: 1, artist: 'Akon', songName: 'Lonely'},
    {id: 2, artist: 'Rihanna', songName: 'Umbrella'}
  ];

  export default function songsList() {
    const songList = songs.map(song =>
       Song(song)
    );

  return (
    <ul>{songList}</ul>
  );
}