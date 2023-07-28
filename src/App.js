import "./App.css";
import MusicPlayer from "./components/music-player/music-player";

function App() {
  return (
    <div className="App flex">
      <div className="h-full">Side Bar</div>
      <div> Main Page</div>
      <MusicPlayer />
    </div>
  );
}

export default App;
