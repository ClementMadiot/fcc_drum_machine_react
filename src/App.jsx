import audioData from "./data/drumAudio";
import "./style/App.scss";

function App() {
  return (
    <main>
      <div id="drum-machine">
        {audioData.map((item) => (
          <div className="drum-pad" id={item.id}>
            <audio className="clip" id={item.letter} src={item.song}></audio>
            {item.letter}
          </div>
        ))}
      </div>
        <div className="logo">FCC
          <i class="inner-logo fa fa-free-code-camp"></i>
        </div>
      <div id="pad">
        <div id="display">&nbsp;</div>
      </div>
    </main>
  );
}

export default App;
