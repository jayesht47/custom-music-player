import "./App.css";
import MusicPlayer from "./components/music-player/music-player";
import SpotifyLogin from "./components/spotify-login/spotify-login";

function App() {
  return (
    <div className="App">
      <SpotifyLogin />
      <MusicPlayer />
    </div>
  );
}

export default App;
