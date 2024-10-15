import audioData from "./data/drumAudio";
import "./style/App.scss";



function App() {

const audio = new Audio();
  
  const drumMachine = (item) => {
    const { src, title } = item

    audio.src = src

    currentSong(title)
    audio.play()
  };
  
  const currentSong = (item) => {
    const display = document.getElementById("display");
    
    display.textContent = item ? item : ""
  };



  return (
    <main>
      <div id="drum-machine">
        {audioData.map((item, index) => (
          <div
            key={`pad-${index}`}
            className="drum-pad"
            id={item.id}
            onClick={() => drumMachine(item)}
          >
            <audio className="clip" id={item.letter} src={item.src}></audio>
            {item.letter}
          </div>
        ))}
      </div>
      <div className="logo">
        FCC
        <i className="inner-logo fa fa-free-code-camp"></i>
      </div>
      <div id="pad">
        <div id="display">&nbsp;</div>
      </div>
    </main>
  );
}

export default App;
