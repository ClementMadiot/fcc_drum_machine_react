import audioData from "./data/drumAudio";
import "./style/App.scss";

function App() {
  const audio = new Audio();

  const drumMachine = (item) => {
    const { src, title } = item;

    displayCurrentDrum(title);
    return playDrum(src);
  };

  const playDrum = (src) => {
    audio.src = src;
    audio.play();
  };

  const displayCurrentDrum = (item) => {
    const display = document.getElementById("display");
    display.textContent = item ? item : "";
  };

  const keyDown = (e) => {
    const currentLetter = audioData.find(
      (item) => item.letter === e.key.toUpperCase()
    );
    if (currentLetter.letter) {
      console.log(`key press : ${e.key.toUpperCase()}, ${currentLetter.letter}`);
      playDrum(currentLetter.src);
      displayCurrentDrum(currentLetter.title);
    } else {
      console.log("No matching letter found");
    }
  };

  document.addEventListener("keydown", keyDown);

  return (
    <main>
      <div id="drum-machine">
        {audioData.map((item, index) => (
          <div
            key={`pad-${index}`}
            className="drum-pad"
            id={`button-${item.id}`}
            onClick={() => drumMachine(item)}
            onKeyDown={keyDown}
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
